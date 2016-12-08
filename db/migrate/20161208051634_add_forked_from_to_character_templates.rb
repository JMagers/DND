class AddForkedFromToCharacterTemplates < ActiveRecord::Migration[5.0]
  def change
    add_column :character_templates, :forked_from, :integer
  end
end
