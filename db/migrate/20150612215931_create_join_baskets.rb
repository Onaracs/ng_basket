class CreateJoinBaskets < ActiveRecord::Migration
  def change
    create_table :join_baskets do |t|
      t.belongs_to :folder
      t.belongs_to :user
      t.boolean :owner, default: false
    end
  end
end
