Rails.application.routes.draw do
  resources :limbus
  namespace :api, defaults: { format: :json } do
    resources :nutrient_goals
    get 'daily_summary', to: 'reports#daily_summary'
  end
end
