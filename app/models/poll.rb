class Poll < ApplicationRecord
  belongs_to :user
  has_many :questions
  has_many :votes, through: :questions
end
