class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :a_team_first_id
      t.integer :a_team_second_id
      t.integer :b_team_first_id
      t.integer :b_team_second
      t.integer :league_id

      t.timestamps
    end
  end
end
