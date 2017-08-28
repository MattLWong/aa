class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body
      t.integer :todo_id, null: false
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
