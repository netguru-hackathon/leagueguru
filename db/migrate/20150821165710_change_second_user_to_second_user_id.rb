class ChangeSecondUserToSecondUserId < ActiveRecord::Migration
  def change
    rename_column :matches, :b_team_second, :b_team_second_id
  end
end
