class CharacterTemplatesController < ApplicationController
  before_action :set_character_template, only: [:show, :edit, :update, :destroy]

  # GET /character_templates
  # GET /character_templates.json
  def index
    @character_templates = CharacterTemplate.all
  end

  # GET /character_templates/1
  # GET /character_templates/1.json
  def show
  end

  # GET /character_templates/new
  def new
    @character_template_base = CharacterTemplateBase.new
  end

  # GET /character_templates/1/edit
  def edit
  end

  # POST /character_templates
  # POST /character_templates.json
  def create
    @character_template_base = CharacterTemplateBase.new(character_template_params)
    base_attrs = character_template_base.attributes
    character_template_attrs = {
      abilities: {
        strength: {
          value: base_attrs[:ability_strength_value],
          mod: base_attrs[:ability_strength_mod]
        },
        dexterity: {
          value: base_attrs[:ability_dexterity_value],
          mod: base_attrs[:ability_dexterity_mod]
        },
        constitution: {
          value: base_attrs[:ability_constitution_value],
          mod: base_attrs[:ability_constitution_mod]
        },
        intelligence: {
          value: base_attrs[:ability_intelligence_value],
          base: base_attrs[:ability_intelligence_mod]
        },
        wisdom: {
          value: base_attrs[:ability_wisdom_value],
          mod: base_attrs[:ability_wisdom_mod]
        },
        charisma: {
          value: base_attrs[:ability_charisma_value],
          mod: base_attrs[:ability_charisma_mod]
        }
      },

      traits: {
        personality: base_attrs[:trait_personality],
        ideals: base_attrs[:trait_ideals],
        bonds: base_attrs[:trait_bonds],
        flaws: base_attrs[:trait_flaws]
      },

      saving_throws: {
        strength: {
          value: base_attrs[:saving_throw_strength_value],
          bool: base_attrs[:saving_throw_strength_bool]
        },
        dexterity: {
          value: base_attrs[:saving_throw_dexterity_value],
          bool: base_attrs[:saving_throw_dexterity_bool]
        },
        constitution: {
          value: base_attrs[:saving_throw_constitution_value],
          bool: base_attrs[:saving_throw_constitution_bool]
        },
        intelligence: {
          value: base_attrs[:saving_throw_intelligence_value],
          bool: base_attrs[:saving_throw_intelligence_bool]
        },
        wisdom: {
          value: base_attrs[:saving_throw_wisdom_value],
          bool: base_attrs[:saving_throw_wisdom_bool]
        },
        charisma: {
        value: base_attrs[:saving_throw_charisma_value],
        bool: base_attrs[:saving_throw_charisma_bool]
        }
      },

      skills: {
        acrobatics: {
          value: base_attr[:skills_acrobatics_value],
          bool: base_attr[:skills_acrobatics_bool]
        },
        animal_handling: {
          value: base_attr[:skills_animal_handling_value],
          bool: base_attr[:skills_animal_handling_bool]
        },
        arcana: {
          value: base_attr[:skills_arcana_value],
          bool: base_attr[:skills_arcana_bool]
        },
        athletics: {
          value: base_attr[:skills_athletics_value],
          bool: base_attr[:skills_athletics_bool]
        },
        deception: {
          value: base_attr[:skills_deception_value],
          bool: base_attr[:skills_deception_bool]
        },
        history: {
          value: base_attr[:skills_history_value],
          bool: base_attr[:skills_history_bool]
        },
        insight: {
          value: base_attr[:skills_insight_value],
          bool: base_attr[:skills_insight_bool]
        },
        intimidation: {
          value: base_attr[:skills_intimidation_value],
          bool: base_attr[:skills_intimidation_bool]
        },
        investigation: {
          value: base_attr[:skills_investigation_value],
          bool: base_attr[:skills_investigation_bool]
        },
        medicine: {
          value: base_attr[:skills_medicine_value],
          bool: base_attr[:skills_medicine_bool]
        },
        nature: {
          value: base_attr[:skills_nature_value],
          bool: base_attr[:skills_nature_bool]
        },
        perception: {
          value: base_attr[:skills_perception_value],
          bool: base_attr[:skills_perception_bool]
        },
        performance: {
          value: base_attr[:skills_performance_value],
          bool: base_attr[:skills_performance_bool]
        },
        persuasion: {
          value: base_attr[:skills_persuasion_value],
          bool: base_attr[:skills_persuasion_bool]
        },
        religion: {
          value: base_attr[:skills_religion_value],
          bool: base_attr[:skills_religion_bool]
        },
        sleight_of_hand: {
          value: base_attr[:skills_sleight_of_hand_value],
          bool: base_attr[:skills_sleight_of_hand_bool]
        },
        stealth: {
          value: base_attr[:skills_stealth_value],
          bool: base_attr[:skills_stealth_bool]
        },
        survival: {
          value: base_attr[:skills_survival_value],
          bool: base_attr[:skills_survival_bool]
        }
      }
    }
    
    @character_template = CharacterTemplate.new(character_template_attrs)

    respond_to do |format|
      if @character_template.save
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

    # Never trust parameters from the scary internet, only allow the white list through.
    def character_template_params
      params.require(:character_template).permit(:ability_strength_value, :ability_strength_mod, :ability_dexterity_value, :ability_dexterity_mod, :ability_constitution_value, :ability_constitution_mod, :ability_intelligence_value, :ability_intelligence_mod, :ability_wisdom_value, :ability_wisdom_mod, :ability_charisma_value, :ability_charisma_mod, :trait_personality, :trait_ideals, :trait_bonds, :trait_flaws, :character_name, :character_class, :background, :race, :alignment, :passive_perception, :armor_class, :initiative, :speed, :other_proficiencies_languages, :hit_point_max, :hit_dice, :features_traits, :proficiency_bonus, :saving_throw_strength_value, :saving_throw_strength_bool, :saving_throw_dexterity_value, :saving_throw_dexterity_bool, :saving_throw_constitution_value, :saving_throw_constitution_bool, :saving_throw_intelligence_value, :saving_throw_intelligence_bool, :saving_throw_wisdom_value, :saving_throw_wisdom_bool, :saving_throw_charisma_value, :saving_throw_charisma_bool, :skills_acrobatics_value, :skills_acrobatics_bool, :skills_animal_handling_value, :skills_animal_handling_bool, :skills_arcana_value, :skills_arcana_bool, :skills_athletics_value, :skills_athletics_bool, :skills_deception_value, :skills_deception_bool, :skills_history_value, :skills_history_bool, :skills_insight_value, :skills_insight_bool, :skills_intimidation_value, :skills_intimidation_bool, :skills_investigation_value, :skills_investigation_bool, :skills_medicine_value, :skills_medicine_bool, :skills_nature_value, :skills_nature_bool, :skills_perception_value, :skills_perception_bool, :skills_performance_value, :skills_performance_bool, :skills_persuasion_value, :skills_persuasion_bool, :skills_religion_value, :skills_religion_bool, :skills_sleight_of_hand_value, :skills_sleight_of_hand_bool, :skills_stealth_value, :skills_stealth_bool, :skills_survival_value, :skills_survival_bool, :private, :user_id)
    end
end
