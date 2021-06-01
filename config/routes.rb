Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'posts#index'

  namespace :api do
    resources :posts, param: :uuid, only: [:create, :destroy, :show]
  end

  match '*path', to: 'posts#index', via: :all
end
