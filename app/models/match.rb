class Match < ActiveRecord::Base
  belongs_to :league
  belongs_to :a_user_1, foreign_key: 'a_team_first_id', class: 'User'
  belongs_to :a_user_2, foreign_key: 'a_team_second_id', class: 'User'
  belongs_to :b_user_1, foreign_key: 'b_team_first_id', class: 'User'
  belongs_to :b_user_2, foreign_key: 'b_team_second_id', class: 'User'

  def winner
    result == true ? [a_user_1, a_user_2] : [b_user_1, b_user_2]
  end
end
