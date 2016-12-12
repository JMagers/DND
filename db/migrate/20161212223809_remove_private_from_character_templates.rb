class RemovePrivateFromCharacterTemplates < ActiveRecord::Migration[5.0]
  def change
    remove_column :character_templates, :private
  end
end
