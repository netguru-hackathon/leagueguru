class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
         :recoverable, :rememberable, :trackable, :validatable, omniauth_providers: [:google_oauth2]

  has_many :matches, lambda { |user|
    where("matches.a_team_first_id=? OR matches.a_team_second_id=? OR \
           matches.b_team_first_id=? OR matches.b_team_second_id=?", user.id, user.id)
  }

  def self.from_omniauth(auth)
    where(email: auth.info.email).first_or_create do |user|
      user.name = auth.info.first_name
      user.email = auth.info.email
      user.password ||= Devise.friendly_token[0,20]
    end
  end
end
