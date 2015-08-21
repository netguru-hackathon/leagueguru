class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :matches, lambda { |user|
    where("matches.a_team_first_id=? OR matches.a_team_second_id=? OR \
           matches.b_team_first_id=? OR matches.b_team_second_id=?", user.id, user.id)
  }
end
