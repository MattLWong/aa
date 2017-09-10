class AddSeatingAndImageUrlToBench < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :seating, :integer, { default: 2, null: false }
    add_column :benches, :picture_url, :string
  end
end
