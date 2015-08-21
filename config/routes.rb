Rails.application.routes.draw do
  devise_for :users

  root to: 'home#show'
  resource :dashboard, only: [:show]
end
