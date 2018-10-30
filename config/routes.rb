Rails.application.routes.draw do
  devise_for :users
  root 'limbus#index'
  resources :limbus
  namespace :api, defaults: { format: :json } do
    resources :nutrient_goals
    get 'daily_summary', to: 'reports#daily_summary'
    post 'limbus/general', to: 'limbus#general'
    post 'food/new', to: 'food#new'
  end
end
