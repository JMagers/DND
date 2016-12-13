class CharacterTemplate < ApplicationRecord
  include Rails.application.routes.url_helpers
  validate :character_name_valid?
  def get_summary
    {
      id: self.id,
      character_name: self.character_name,
      num_forks: self.num_forks,
      show_url: character_template_path(self),
      edit_url: edit_character_template_path(self),
      destroy_url: character_template_path(self),
      user_id: self.user_id,
      username: User.find(self.user_id).username,
      picture_url: self.picture_url,
      created_at: self.created_at
    }
  end

  def get_all
    info = self.attributes.deep_dup
    user = User.find(self.user_id)
    info[:username] = user.username
    return info
  end

  def character_name_valid?
    character_name = self.character_name
    if character_name == nil
      self.errors.add(:character_name, "must not be nil")
      return false
    elsif character_name.length == 0
      self.errors.add(:character_name, "must be included")
      return false
    end
    return true
  end
end
