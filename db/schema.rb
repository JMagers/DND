# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161210051237) do

  create_table "character_templates", force: :cascade do |t|
    t.integer  "ability_strength_value"
    t.integer  "ability_strength_mod"
    t.integer  "ability_dexterity_value"
    t.integer  "ability_dexterity_mod"
    t.integer  "ability_constitution_value"
    t.integer  "ability_constitution_mod"
    t.integer  "ability_intelligence_value"
    t.integer  "ability_intelligence_mod"
    t.integer  "ability_wisdom_value"
    t.integer  "ability_wisdom_mod"
    t.integer  "ability_charisma_value"
    t.integer  "ability_charisma_mod"
    t.text     "trait_personality"
    t.text     "trait_ideals"
    t.text     "trait_bonds"
    t.text     "trait_flaws"
    t.string   "character_name"
    t.string   "character_class"
    t.string   "background"
    t.string   "race"
    t.string   "alignment"
    t.integer  "passive_perception"
    t.integer  "armor_class"
    t.integer  "initiative"
    t.integer  "speed"
    t.text     "other_proficiencies_languages"
    t.integer  "hit_point_max"
    t.integer  "hit_dice"
    t.text     "features_traits"
    t.string   "proficiency_bonus"
    t.integer  "saving_throw_strength_value"
    t.boolean  "saving_throw_strength_bool"
    t.integer  "saving_throw_dexterity_value"
    t.boolean  "saving_throw_dexterity_bool"
    t.integer  "saving_throw_constitution_value"
    t.boolean  "saving_throw_constitution_bool"
    t.integer  "saving_throw_intelligence_value"
    t.boolean  "saving_throw_intelligence_bool"
    t.integer  "saving_throw_wisdom_value"
    t.boolean  "saving_throw_wisdom_bool"
    t.integer  "saving_throw_charisma_value"
    t.boolean  "saving_throw_charisma_bool"
    t.integer  "skills_acrobatics_value"
    t.boolean  "skills_acrobatics_bool"
    t.integer  "skills_animal_handling_value"
    t.boolean  "skills_animal_handling_bool"
    t.integer  "skills_arcana_value"
    t.boolean  "skills_arcana_bool"
    t.integer  "skills_athletics_value"
    t.boolean  "skills_athletics_bool"
    t.integer  "skills_deception_value"
    t.boolean  "skills_deception_bool"
    t.integer  "skills_history_value"
    t.boolean  "skills_history_bool"
    t.integer  "skills_insight_value"
    t.boolean  "skills_insight_bool"
    t.integer  "skills_intimidation_value"
    t.boolean  "skills_intimidation_bool"
    t.integer  "skills_investigation_value"
    t.boolean  "skills_investigation_bool"
    t.integer  "skills_medicine_value"
    t.boolean  "skills_medicine_bool"
    t.integer  "skills_nature_value"
    t.boolean  "skills_nature_bool"
    t.integer  "skills_perception_value"
    t.boolean  "skills_perception_bool"
    t.integer  "skills_performance_value"
    t.boolean  "skills_performance_bool"
    t.integer  "skills_persuasion_value"
    t.boolean  "skills_persuasion_bool"
    t.integer  "skills_religion_value"
    t.boolean  "skills_religion_bool"
    t.integer  "skills_sleight_of_hand_value"
    t.boolean  "skills_sleight_of_hand_bool"
    t.integer  "skills_stealth_value"
    t.boolean  "skills_stealth_bool"
    t.integer  "skills_survival_value"
    t.boolean  "skills_survival_bool"
    t.boolean  "private"
    t.integer  "user_id"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "forked_from"
    t.integer  "num_forks",                       default: 0
  end

end
