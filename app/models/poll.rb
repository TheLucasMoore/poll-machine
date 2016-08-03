class Poll < ApplicationRecord
  belongs_to :user
  has_many :questions
  has_many :votes, through: :questions

  validates_presence_of :title, :user_id
end
