function formatTemplateData(data) {
  var new_data = {
    abilities: {
      strength: {
        value: data.ability_strength_value,
        mod: data.ability_strength_mod
      },
      dexterity: {
        value: data.ability_dexterity_value,
        mod: data.ability_dexterity_mod
      },
      constitution: {
        value: data.ability_constitution_value,
        mod: data.ability_constitution_mod
      },
      intelligence: {
        value: data.ability_intelligence_value,
        base: data.ability_intelligence_mod
      },
      wisdom: {
        value: data.ability_wisdom_value,
        mod: data.ability_wisdom_mod
      },
      charisma: {
        value: data.ability_charisma_value,
        mod: data.ability_charisma_mod
      }
    },

    traits: {
      personality: data.trait_personality,
      ideals: data.trait_ideals,
      bonds: data.trait_bonds,
      flaws: data.trait_flaws
    },

    saving_throws: {
      strength: {
        value: data.saving_throw_strength_value,
        bool: data.saving_throw_strength_bool
      },
      dexterity: {
        value: data.saving_throw_dexterity_value,
        bool: data.saving_throw_dexterity_bool
      },
      constitution: {
        value: data.saving_throw_constitution_value,
        bool: data.saving_throw_constitution_bool
      },
      intelligence: {
        value: data.saving_throw_intelligence_value,
        bool: data.saving_throw_intelligence_bool
      },
      wisdom: {
        value: data.saving_throw_wisdom_value,
        bool: data.saving_throw_wisdom_bool
      },
      charisma: {
        value: data.saving_throw_charisma_value,
        bool: data.saving_throw_charisma_bool
      }
    },

    skills: {
      acrobatics: {
        value: base_attr.skills_acrobatics_value,
        bool: base_attr.skills_acrobatics_bool
      },
      animal_handling: {
        value: base_attr.skills_animal_handling_value,
        bool: base_attr.skills_animal_handling_bool
      },
      arcana: {
        value: base_attr.skills_arcana_value,
        bool: base_attr.skills_arcana_bool
      },
      athletics: {
        value: base_attr.skills_athletics_value,
        bool: base_attr.skills_athletics_bool
      },
      deception: {
        value: base_attr.skills_deception_value,
        bool: base_attr.skills_deception_bool
      },
      history: {
        value: base_attr.skills_history_value,
        bool: base_attr.skills_history_bool
      },
      insight: {
        value: base_attr.skills_insight_value,
        bool: base_attr.skills_insight_bool
      },
      intimidation: {
        value: base_attr.skills_intimidation_value,
        bool: base_attr.skills_intimidation_bool
      },
      investigation: {
        value: base_attr.skills_investigation_value,
        bool: base_attr.skills_investigation_bool
      },
      medicine: {
        value: base_attr.skills_medicine_value,
        bool: base_attr.skills_medicine_bool
      },
      nature: {
        value: base_attr.skills_nature_value,
        bool: base_attr.skills_nature_bool
      },
      perception: {
        value: base_attr.skills_perception_value,
        bool: base_attr.skills_perception_bool
      },
      performance: {
        value: base_attr.skills_performance_value,
        bool: base_attr.skills_performance_bool
      },
      persuasion: {
        value: base_attr.skills_persuasion_value,
        bool: base_attr.skills_persuasion_bool
      },
      religion: {
        value: base_attr.skills_religion_value,
        bool: base_attr.skills_religion_bool
      },
      sleight_of_hand: {
        value: base_attr.skills_sleight_of_hand_value,
        bool: base_attr.skills_sleight_of_hand_bool
      },
      stealth: {
        value: base_attr.skills_stealth_value,
        bool: base_attr.skills_stealth_bool
      },
      survival: {
        value: base_attr.skills_survival_value,
        bool: base_attr.skills_survival_bool
      }
    }
  };

  modified_data = data;
  delete modified_data.saving_throw_strength_value
  delete modified_data.saving_throw_strength_bool
  delete modified_data.saving_throw_dexterity_value
  delete modified_data.saving_throw_dexterity_bool
  delete modified_data.saving_throw_constitution_value
  delete modified_data.saving_throw_constitution_bool
  delete modified_data.saving_throw_intelligence_value
  delete modified_data.saving_throw_intelligence_bool
  delete modified_data.saving_throw_wisdom_value
  delete modified_data.saving_throw_wisdom_bool
  delete modified_data.saving_throw_charisma_value
  delete modified_data.saving_throw_charisma_bool
  delete modified_data.skills_acrobatics_value
  delete modified_data.skills_acrobatics_bool
  delete modified_data.skills_animal_handling_value
  delete modified_data.skills_animal_handling_bool
  delete modified_data.skills_arcana_value
  delete modified_data.skills_arcana_bool
  delete modified_data.skills_athletics_value
  delete modified_data.skills_athletics_bool
  delete modified_data.skills_deception_value
  delete modified_data.skills_deception_bool
  delete modified_data.skills_history_value
  delete modified_data.skills_history_bool
  delete modified_data.skills_insight_value
  delete modified_data.skills_insight_bool
  delete modified_data.skills_intimidation_value
  delete modified_data.skills_intimidation_bool
  delete modified_data.skills_investigation_value
  delete modified_data.skills_investigation_bool
  delete modified_data.skills_medicine_value
  delete modified_data.skills_medicine_bool
  delete modified_data.skills_nature_value
  delete modified_data.skills_nature_bool
  delete modified_data.skills_perception_value
  delete modified_data.skills_perception_bool
  delete modified_data.skills_performance_value
  delete modified_data.skills_performance_bool
  delete modified_data.skills_persuasion_value
  delete modified_data.skills_persuasion_bool
  delete modified_data.skills_religion_value
  delete modified_data.skills_religion_bool
  delete modified_data.skills_sleight_of_hand_value
  delete modified_data.skills_sleight_of_hand_bool
  delete modified_data.skills_stealth_value
  delete modified_data.skills_stealth_bool
  delete modified_data.skills_survival_value
  delete modified_data.skills_survival_bool

  for (var attr in modified_data) {
    new_data[attr] = modified_data[attr];
  }

  return new_data;
}
