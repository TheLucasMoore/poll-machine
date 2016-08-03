Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user', to: 'application#current_user'
  get 'request_token', to: 'tokens#request_token'
  get 'access_token', to: 'tokens#access_token'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :votes, only: [:create]
  resources :polls do
    resources :questions
  end
end
