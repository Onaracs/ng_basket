class Folder < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :user

  has_many :links
  has_many :join_baskets
  has_many :users, through: :join_baskets

  attr_accessor :owner
  
end