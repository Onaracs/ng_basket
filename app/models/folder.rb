class Folder < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :user

  has_many :links
  has_many :join_baskets
  
end