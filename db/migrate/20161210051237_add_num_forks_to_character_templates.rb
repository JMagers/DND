class AddNumForksToCharacterTemplates < ActiveRecord::Migration[5.0]
  def change
    add_column :character_templates, :num_forks, :integer, :default => 0
  end
end
