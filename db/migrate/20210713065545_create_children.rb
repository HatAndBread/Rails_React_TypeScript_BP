class CreateChildren < ActiveRecord::Migration[6.1]
  def change
    create_table :children do |t|
      t.string :name
      t.integer :age
      t.references :test, null: false, foreign_key: true

      t.timestamps
    end
  end
end
