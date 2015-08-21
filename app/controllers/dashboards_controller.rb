class DashboardsController < ApplicationController
  def show
    @leagues = serialize_all(League.all, LeagueSerializer)
    @users = serialize_all(User.all, UserSerializer)
  end
end
