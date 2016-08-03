Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :votes, only: [:create]
  resources :polls do
    resources :questions
  end
end
