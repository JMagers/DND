class CharacterTemplatesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_character_template, only: [:show, :edit, :update, :destroy]
  before_action :user_owns_it, only: [:edit, :update, :destroy]

  # SORT
  def sort
    # Filter
    character_templates = CharacterTemplate.all
    if params.key?(:user_id)
      user_id = params[:user_id]
      if User.exists?(user_id)
        character_templates = character_templates.where(user_id: user_id)
      end
    end
    if params.key?(:forked_from)
      forked_from = params[:forked_from]
      if CharacterTemplate.exists?(forked_from)
        character_templates = character_templates.where(forked_from: forked_from)
      end
    end
    # Sort
    method = params[:method].to_sym
    direction = params[:direction].to_sym
    if [:character_name, :num_forks, :created_at].include? method
      character_templates = character_templates.order(method => direction)
    end
    ct_summaries = character_templates.map {|ct| ct.get_summary()}

    render json: ct_summaries
  end

  def character_data
    if params.key?(:id)
      character_template_id = params[:id]
      if CharacterTemplate.exists?(character_template_id)
        character_template = CharacterTemplate.find(character_template_id)
        render json: character_template.get_all
      end
    end
  end

  # GET /character_templates
  # GET /character_templates.json
  def index
    @given_user = nil
    @user_id_filter = nil
    @forked_from_filter = nil
    @forked_from_name = nil
    if params.key?(:user_id)
      user_id = params[:user_id]
      if User.exists?(user_id)
        @user_id_filter = user_id.to_i
        @given_user = User.find(user_id)
      end
    end
    if params.key?(:forked_from)
      forked_from = params[:forked_from]
      @forked_from_filter = forked_from.to_i
      if CharacterTemplate.exists?(@forked_from_filter)
        @forked_from_name = CharacterTemplate.find(@forked_from_filter).character_name
      end
    end
  end

  # GET /character_templates/1
  # GET /character_templates/1.json
  def show
    @json_url = url_for(action: "character_data") + "?id=#{@character_template.id}"
  end

  # GET /character_templates/new
  def new
    forked_from = params[:forked_from]
    @original_template = nil
    if forked_from == 'random'
      @original_template = CharacterTemplate.order('RANDOM()').first
    elsif CharacterTemplate.exists?(forked_from)
      @original_template = CharacterTemplate.find(forked_from)
    end
    if @original_template != nil
      @character_template = @original_template.dup
      @character_template.forked_from = @original_template.id
    else
      @character_template = CharacterTemplate.new()
    end
  end

  # GET /character_templates/1/edit
  def edit
  end

  # POST /character_templates
  # POST /character_templates.json
  def create
    @character_template = CharacterTemplate.new(character_template_params)
    if user_signed_in?
      @character_template.user_id = current_user.id
    end

    respond_to do |format|
      if @character_template.save
        # Increment original character_template's num_forks
        forked_from = @character_template.forked_from
        if forked_from != nil && CharacterTemplate.exists?(forked_from)
          original_template = CharacterTemplate.find(forked_from)
          original_template.num_forks += 1
          original_template.save
        end
        format.html { redirect_to @character_template, notice: 'Character template was successfully created.' }
        format.json { render :show, status: :created, location: @character_template }
      else
        format.html { render :new }
        format.json { render json: @character_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /character_templates/1
  # PATCH/PUT /character_templates/1.json
  def update
    respond_to do |format|
      if @character_template.update(character_template_params)
        format.html { redirect_to @character_template, notice: 'Character template was successfully updated.' }
        format.json { render :show, status: :ok, location: @character_template }
      else
        format.html { render :edit }
        format.json { render json: @character_template.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /character_templates/1
  # DELETE /character_templates/1.json
  def destroy
    @character_template.destroy
    respond_to do |format|
      format.html { redirect_to character_templates_url, notice: 'Character template was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character_template
      @character_template = CharacterTemplate.find(params[:id])
    end

    def user_owns_it
      if current_user.id != @character_template.user_id
        redirect_to character_template_path(@character_template)
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def character_template_params
      params.require(:character_template).permit(:ability_strength_value, :ability_strength_mod, :ability_dexterity_value, :ability_dexterity_mod, :ability_constitution_value, :ability_constitution_mod, :ability_intelligence_value, :ability_intelligence_mod, :ability_wisdom_value, :ability_wisdom_mod, :ability_charisma_value, :ability_charisma_mod, :trait_personality, :trait_ideals, :trait_bonds, :trait_flaws, :character_name, :character_class, :background, :race, :alignment, :passive_perception, :armor_class, :initiative, :speed, :other_proficiencies_languages, :hit_point_max, :hit_dice, :features_traits, :proficiency_bonus, :saving_throw_strength_value, :saving_throw_strength_bool, :saving_throw_dexterity_value, :saving_throw_dexterity_bool, :saving_throw_constitution_value, :saving_throw_constitution_bool, :saving_throw_intelligence_value, :saving_throw_intelligence_bool, :saving_throw_wisdom_value, :saving_throw_wisdom_bool, :saving_throw_charisma_value, :saving_throw_charisma_bool, :skills_acrobatics_value, :skills_acrobatics_bool, :skills_animal_handling_value, :skills_animal_handling_bool, :skills_arcana_value, :skills_arcana_bool, :skills_athletics_value, :skills_athletics_bool, :skills_deception_value, :skills_deception_bool, :skills_history_value, :skills_history_bool, :skills_insight_value, :skills_insight_bool, :skills_intimidation_value, :skills_intimidation_bool, :skills_investigation_value, :skills_investigation_bool, :skills_medicine_value, :skills_medicine_bool, :skills_nature_value, :skills_nature_bool, :skills_perception_value, :skills_perception_bool, :skills_performance_value, :skills_performance_bool, :skills_persuasion_value, :skills_persuasion_bool, :skills_religion_value, :skills_religion_bool, :skills_sleight_of_hand_value, :skills_sleight_of_hand_bool, :skills_stealth_value, :skills_stealth_bool, :skills_survival_value, :skills_survival_bool, :forked_from, :picture_url)
    end
end
