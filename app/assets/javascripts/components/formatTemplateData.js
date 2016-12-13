// Note: data parameter will be modified
function formatTemplateData(data) {
  var newData = {
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
        mod: data.ability_intelligence_mod
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
        value: data.skills_acrobatics_value,
        bool: data.skills_acrobatics_bool
      },
      animal_handling: {
        value: data.skills_animal_handling_value,
        bool: data.skills_animal_handling_bool
      },
      arcana: {
        value: data.skills_arcana_value,
        bool: data.skills_arcana_bool
      },
      athletics: {
        value: data.skills_athletics_value,
        bool: data.skills_athletics_bool
      },
      deception: {
        value: data.skills_deception_value,
        bool: data.skills_deception_bool
      },
      history: {
        value: data.skills_history_value,
        bool: data.skills_history_bool
      },
      insight: {
        value: data.skills_insight_value,
        bool: data.skills_insight_bool
      },
      intimidation: {
        value: data.skills_intimidation_value,
        bool: data.skills_intimidation_bool
      },
      investigation: {
        value: data.skills_investigation_value,
        bool: data.skills_investigation_bool
      },
      medicine: {
        value: data.skills_medicine_value,
        bool: data.skills_medicine_bool
      },
      nature: {
        value: data.skills_nature_value,
        bool: data.skills_nature_bool
      },
      perception: {
        value: data.skills_perception_value,
        bool: data.skills_perception_bool
      },
      performance: {
        value: data.skills_performance_value,
        bool: data.skills_performance_bool
      },
      persuasion: {
        value: data.skills_persuasion_value,
        bool: data.skills_persuasion_bool
      },
      religion: {
        value: data.skills_religion_value,
        bool: data.skills_religion_bool
      },
      sleight_of_hand: {
        value: data.skills_sleight_of_hand_value,
        bool: data.skills_sleight_of_hand_bool
      },
      stealth: {
        value: data.skills_stealth_value,
        bool: data.skills_stealth_bool
      },
      survival: {
        value: data.skills_survival_value,
        bool: data.skills_survival_bool
      }
    }
  };

  var deleteList = [
    'ability_strength_value',
    'ability_strength_mod',
    'ability_dexterity_value',
    'ability_dexterity_mod',
    'ability_constitution_value',
    'ability_constitution_mod',
    'ability_intelligence_value',
    'ability_intelligence_mod',
    'ability_wisdom_value',
    'ability_wisdom_mod',
    'ability_charisma_value',
    'ability_charisma_mod',
    'trait_personality',
    'trait_ideals',
    'trait_bonds',
    'trait_flaws',
    'saving_throw_strength_value',
    'saving_throw_strength_bool',
    'saving_throw_dexterity_value',
    'saving_throw_dexterity_bool',
    'saving_throw_constitution_value',
    'saving_throw_constitution_bool',
    'saving_throw_intelligence_value',
    'saving_throw_intelligence_bool',
    'saving_throw_wisdom_value',
    'saving_throw_wisdom_bool',
    'saving_throw_charisma_value',
    'saving_throw_charisma_bool',
    'skills_acrobatics_value',
    'skills_acrobatics_bool',
    'skills_animal_handling_value',
    'skills_animal_handling_bool',
    'skills_arcana_value',
    'skills_arcana_bool',
    'skills_athletics_value',
    'skills_athletics_bool',
    'skills_deception_value',
    'skills_deception_bool',
    'skills_history_value',
    'skills_history_bool',
    'skills_insight_value',
    'skills_insight_bool',
    'skills_intimidation_value',
    'skills_intimidation_bool',
    'skills_investigation_value',
    'skills_investigation_bool',
    'skills_medicine_value',
    'skills_medicine_bool',
    'skills_nature_value',
    'skills_nature_bool',
    'skills_perception_value',
    'skills_perception_bool',
    'skills_performance_value',
    'skills_performance_bool',
    'skills_persuasion_value',
    'skills_persuasion_bool',
    'skills_religion_value',
    'skills_religion_bool',
    'skills_sleight_of_hand_value',
    'skills_sleight_of_hand_bool',
    'skills_stealth_value',
    'skills_stealth_bool',
    'skills_survival_value',
    'skills_survival_bool'
  ]

  for (var i = 0; i < deleteList.length; i++) {
    var attrName = deleteList[i];
    delete data[attrName];
  }

  for (var attr in data) {
    newData[attr] = data[attr];
  }

  return newData;
}
