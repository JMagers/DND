#!/usr/bin/env python3
base_command = 'rails generate scaffold CharacterTemplate'  # here

abilities_list = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
]
new_abilities = []
for ability in abilities_list:
    new_abilities.append("ability_%s_value:integer" % ability)
    new_abilities.append("ability_%s_mod:integer" % ability)
abilities = " ".join(new_abilities)  # here

traits_list = [
    'personality',
    'ideals',
    'bonds',
    'flaws'
]
new_traits = []
for trait in traits_list:
    new_traits.append("trait_%s:text" % trait)
traits = " ".join(new_traits)  # here

saving_throws_list = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
]
new_saving_throws = []
for t in saving_throws_list:
    s = "saving_throw_%s_value:integer saving_throw_%s_bool:boolean" % (t, t)
    new_saving_throws.append(s)
saving_throws = " ".join(new_saving_throws)  # here

skills_list = [
    'acrobatics',
    'animal_handling',
    'arcana',
    'athletics',
    'deception',
    'history',
    'insight',
    'intimidation',
    'investigation',
    'medicine',
    'nature',
    'perception',
    'performance',
    'persuasion',
    'religion',
    'sleight_of_hand',
    'stealth',
    'survival'
]
new_skills_list = []
for skill in skills_list:
    string = "skills_%s_value:integer skills_%s_bool:boolean" % (skill, skill)
    new_skills_list.append(string)
skills = " ".join(new_skills_list)  # here


generic_list = [
    'character_name:string',
    'character_class:string',
    'background:string',
    'race:string',
    'alignment:string',
    'passive_perception:integer',
    'armor_class:integer',
    'initiative:integer',
    'speed:integer',
    'other_proficiencies_languages:text',
    'hit_point_max:integer',
    'hit_dice:integer',
    'features_traits:text',
    'proficiency_bonus'
]
generic = " ".join(generic_list)  # here

other_list = [
    'private:boolean',
    'user_id:integer'
]
other = " ".join(other_list)  # here

full_command_list = [
    base_command,
    abilities,
    traits,
    generic,
    saving_throws,
    skills,
    other
]
print(" ".join(full_command_list))
