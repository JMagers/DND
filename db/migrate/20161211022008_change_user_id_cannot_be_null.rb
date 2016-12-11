class ChangeUserIdCannotBeNull < ActiveRecord::Migration[5.0]
  def change
    change_column :character_templates, :user_id, :integer, :null => false
  end
end
