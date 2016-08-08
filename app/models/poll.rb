class Poll < ApplicationRecord
  # belongs_to :user
  # when I build in Users, I'll uncomment this
  has_many :questions
  has_many :votes, through: :questions

  validates_presence_of :title
end
