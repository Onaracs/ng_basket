class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :url
      t.string :title
      t.belongs_to :folder

      t.timestamps
    end
  end
end
