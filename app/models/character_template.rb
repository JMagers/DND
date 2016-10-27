class CharacterTemplate < ApplicationRecord
  serialize :abilities, Hash
  serialize :traits, Hash
  serialize :saving_throws, Hash
  serialize :skills, Hash
end
