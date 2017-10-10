class CreateTwos < ActiveRecord::Migration[5.1]
  def change
    create_table :twos do |t|
      t.string :username, null: false
      t.timestamps
    end
    add_index :twos, :username, unique: true
  end
end
