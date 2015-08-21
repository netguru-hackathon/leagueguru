class DashboardsController < ApplicationController
  def show
    @leagues = serialize_all(League.all, LeagueSerializer)
  end
end
