class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validate :username_valid?

  def username_valid?
    username = self.username
    if username == nil
      self.errors.add(:username, "must not be nil")
      return false
    elsif username.length == 0
      self.errors.add(:username, "must be included")
    elsif User.exists?(username: username)
      self.errors.add(:username, "has already been taken")
    end
  end
end
