class CreateLeagues < ActiveRecord::Migration
  def change
    create_table :leagues do |t|
      t.boolean :open
      t.string :name

      t.timestamps
    end
  end
end
