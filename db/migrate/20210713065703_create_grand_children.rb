class CreateGrandChildren < ActiveRecord::Migration[6.1]
  def change
    create_table :grand_children do |t|
      t.string :name
      t.integer :age
      t.references :child, null: false, foreign_key: true
      t.timestamps
    end
  end
end
