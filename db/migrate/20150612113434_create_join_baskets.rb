class CreateJoinBaskets < ActiveRecord::Migration
  def change
    create_table :join_baskets do |t|
      belongs_to :folder
      belongs_to :user
    end
  end
end
