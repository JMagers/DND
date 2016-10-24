require 'test_helper'

class CharacterTemplatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character_template = character_templates(:one)
  end

  test "should get index" do
    get character_templates_url
    assert_response :success
  end

  test "should get new" do
    get new_character_template_url
    assert_response :success
  end

  test "should create character_template" do
    assert_difference('CharacterTemplate.count') do
      post character_templates_url, params: { character_template: { ability_charisma_mod: @character_template.ability_charisma_mod, ability_charisma_value: @character_template.ability_charisma_value, ability_constitution_mod: @character_template.ability_constitution_mod, ability_constitution_value: @character_template.ability_constitution_value, ability_dexterity_mod: @character_template.ability_dexterity_mod, ability_dexterity_value: @character_template.ability_dexterity_value, ability_intelligence_mod: @character_template.ability_intelligence_mod, ability_intelligence_value: @character_template.ability_intelligence_value, ability_strength_mod: @character_template.ability_strength_mod, ability_strength_value: @character_template.ability_strength_value, ability_wisdom_mod: @character_template.ability_wisdom_mod, ability_wisdom_value: @character_template.ability_wisdom_value, alignment: @character_template.alignment, armor_class: @character_template.armor_class, background: @character_template.background, character_class: @character_template.character_class, character_name: @character_template.character_name, features_traits: @character_template.features_traits, hit_dice: @character_template.hit_dice, hit_point_max: @character_template.hit_point_max, initiative: @character_template.initiative, other_proficiencies_languages: @character_template.other_proficiencies_languages, passive_perception: @character_template.passive_perception, private: @character_template.private, proficiency_bonus: @character_template.proficiency_bonus, race: @character_template.race, saving_throw_charisma_bool: @character_template.saving_throw_charisma_bool, saving_throw_charisma_value: @character_template.saving_throw_charisma_value, saving_throw_constitution_bool: @character_template.saving_throw_constitution_bool, saving_throw_constitution_value: @character_template.saving_throw_constitution_value, saving_throw_dexterity_bool: @character_template.saving_throw_dexterity_bool, saving_throw_dexterity_value: @character_template.saving_throw_dexterity_value, saving_throw_intelligence_bool: @character_template.saving_throw_intelligence_bool, saving_throw_intelligence_value: @character_template.saving_throw_intelligence_value, saving_throw_strength_bool: @character_template.saving_throw_strength_bool, saving_throw_strength_value: @character_template.saving_throw_strength_value, saving_throw_wisdom_bool: @character_template.saving_throw_wisdom_bool, saving_throw_wisdom_value: @character_template.saving_throw_wisdom_value, skills_acrobatics_bool: @character_template.skills_acrobatics_bool, skills_acrobatics_value: @character_template.skills_acrobatics_value, skills_animal_handling_bool: @character_template.skills_animal_handling_bool, skills_animal_handling_value: @character_template.skills_animal_handling_value, skills_arcana_bool: @character_template.skills_arcana_bool, skills_arcana_value: @character_template.skills_arcana_value, skills_athletics_bool: @character_template.skills_athletics_bool, skills_athletics_value: @character_template.skills_athletics_value, skills_deception_bool: @character_template.skills_deception_bool, skills_deception_value: @character_template.skills_deception_value, skills_history_bool: @character_template.skills_history_bool, skills_history_value: @character_template.skills_history_value, skills_insight_bool: @character_template.skills_insight_bool, skills_insight_value: @character_template.skills_insight_value, skills_intimidation_bool: @character_template.skills_intimidation_bool, skills_intimidation_value: @character_template.skills_intimidation_value, skills_investigation_bool: @character_template.skills_investigation_bool, skills_investigation_value: @character_template.skills_investigation_value, skills_medicine_bool: @character_template.skills_medicine_bool, skills_medicine_value: @character_template.skills_medicine_value, skills_nature_bool: @character_template.skills_nature_bool, skills_nature_value: @character_template.skills_nature_value, skills_perception_bool: @character_template.skills_perception_bool, skills_perception_value: @character_template.skills_perception_value, skills_performance_bool: @character_template.skills_performance_bool, skills_performance_value: @character_template.skills_performance_value, skills_persuasion_bool: @character_template.skills_persuasion_bool, skills_persuasion_value: @character_template.skills_persuasion_value, skills_religion_bool: @character_template.skills_religion_bool, skills_religion_value: @character_template.skills_religion_value, skills_sleight_of_hand_bool: @character_template.skills_sleight_of_hand_bool, skills_sleight_of_hand_value: @character_template.skills_sleight_of_hand_value, skills_stealth_bool: @character_template.skills_stealth_bool, skills_stealth_value: @character_template.skills_stealth_value, skills_survival_bool: @character_template.skills_survival_bool, skills_survival_value: @character_template.skills_survival_value, speed: @character_template.speed, trait_bonds: @character_template.trait_bonds, trait_flaws: @character_template.trait_flaws, trait_ideals: @character_template.trait_ideals, trait_personality: @character_template.trait_personality, user_id: @character_template.user_id } }
    end

    assert_redirected_to character_template_url(CharacterTemplate.last)
  end

  test "should show character_template" do
    get character_template_url(@character_template)
    assert_response :success
  end

  test "should get edit" do
    get edit_character_template_url(@character_template)
    assert_response :success
  end

  test "should update character_template" do
    patch character_template_url(@character_template), params: { character_template: { ability_charisma_mod: @character_template.ability_charisma_mod, ability_charisma_value: @character_template.ability_charisma_value, ability_constitution_mod: @character_template.ability_constitution_mod, ability_constitution_value: @character_template.ability_constitution_value, ability_dexterity_mod: @character_template.ability_dexterity_mod, ability_dexterity_value: @character_template.ability_dexterity_value, ability_intelligence_mod: @character_template.ability_intelligence_mod, ability_intelligence_value: @character_template.ability_intelligence_value, ability_strength_mod: @character_template.ability_strength_mod, ability_strength_value: @character_template.ability_strength_value, ability_wisdom_mod: @character_template.ability_wisdom_mod, ability_wisdom_value: @character_template.ability_wisdom_value, alignment: @character_template.alignment, armor_class: @character_template.armor_class, background: @character_template.background, character_class: @character_template.character_class, character_name: @character_template.character_name, features_traits: @character_template.features_traits, hit_dice: @character_template.hit_dice, hit_point_max: @character_template.hit_point_max, initiative: @character_template.initiative, other_proficiencies_languages: @character_template.other_proficiencies_languages, passive_perception: @character_template.passive_perception, private: @character_template.private, proficiency_bonus: @character_template.proficiency_bonus, race: @character_template.race, saving_throw_charisma_bool: @character_template.saving_throw_charisma_bool, saving_throw_charisma_value: @character_template.saving_throw_charisma_value, saving_throw_constitution_bool: @character_template.saving_throw_constitution_bool, saving_throw_constitution_value: @character_template.saving_throw_constitution_value, saving_throw_dexterity_bool: @character_template.saving_throw_dexterity_bool, saving_throw_dexterity_value: @character_template.saving_throw_dexterity_value, saving_throw_intelligence_bool: @character_template.saving_throw_intelligence_bool, saving_throw_intelligence_value: @character_template.saving_throw_intelligence_value, saving_throw_strength_bool: @character_template.saving_throw_strength_bool, saving_throw_strength_value: @character_template.saving_throw_strength_value, saving_throw_wisdom_bool: @character_template.saving_throw_wisdom_bool, saving_throw_wisdom_value: @character_template.saving_throw_wisdom_value, skills_acrobatics_bool: @character_template.skills_acrobatics_bool, skills_acrobatics_value: @character_template.skills_acrobatics_value, skills_animal_handling_bool: @character_template.skills_animal_handling_bool, skills_animal_handling_value: @character_template.skills_animal_handling_value, skills_arcana_bool: @character_template.skills_arcana_bool, skills_arcana_value: @character_template.skills_arcana_value, skills_athletics_bool: @character_template.skills_athletics_bool, skills_athletics_value: @character_template.skills_athletics_value, skills_deception_bool: @character_template.skills_deception_bool, skills_deception_value: @character_template.skills_deception_value, skills_history_bool: @character_template.skills_history_bool, skills_history_value: @character_template.skills_history_value, skills_insight_bool: @character_template.skills_insight_bool, skills_insight_value: @character_template.skills_insight_value, skills_intimidation_bool: @character_template.skills_intimidation_bool, skills_intimidation_value: @character_template.skills_intimidation_value, skills_investigation_bool: @character_template.skills_investigation_bool, skills_investigation_value: @character_template.skills_investigation_value, skills_medicine_bool: @character_template.skills_medicine_bool, skills_medicine_value: @character_template.skills_medicine_value, skills_nature_bool: @character_template.skills_nature_bool, skills_nature_value: @character_template.skills_nature_value, skills_perception_bool: @character_template.skills_perception_bool, skills_perception_value: @character_template.skills_perception_value, skills_performance_bool: @character_template.skills_performance_bool, skills_performance_value: @character_template.skills_performance_value, skills_persuasion_bool: @character_template.skills_persuasion_bool, skills_persuasion_value: @character_template.skills_persuasion_value, skills_religion_bool: @character_template.skills_religion_bool, skills_religion_value: @character_template.skills_religion_value, skills_sleight_of_hand_bool: @character_template.skills_sleight_of_hand_bool, skills_sleight_of_hand_value: @character_template.skills_sleight_of_hand_value, skills_stealth_bool: @character_template.skills_stealth_bool, skills_stealth_value: @character_template.skills_stealth_value, skills_survival_bool: @character_template.skills_survival_bool, skills_survival_value: @character_template.skills_survival_value, speed: @character_template.speed, trait_bonds: @character_template.trait_bonds, trait_flaws: @character_template.trait_flaws, trait_ideals: @character_template.trait_ideals, trait_personality: @character_template.trait_personality, user_id: @character_template.user_id } }
    assert_redirected_to character_template_url(@character_template)
  end

  test "should destroy character_template" do
    assert_difference('CharacterTemplate.count', -1) do
      delete character_template_url(@character_template)
    end

    assert_redirected_to character_templates_url
  end
end
