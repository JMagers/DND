class CharacterTemplate < ApplicationRecord
  include Rails.application.routes.url_helpers
  def get_summary
    {
      id: self.id,
      character_name: self.character_name,
      num_forks: self.num_forks,
      show_url: character_template_path(self)
      #num_likes: self.num_likes,
      #name of user
    }
  end
end
