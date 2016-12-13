class AddPictureUrlToCharacterTemplates < ActiveRecord::Migration[5.0]
  def change
    add_column :character_templates, :picture_url, :string
  end
end
