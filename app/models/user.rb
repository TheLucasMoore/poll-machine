class User < ApplicationRecord
  validates_presence_of :uid, :handle
  has_many :polls
  has_many :votes
end
