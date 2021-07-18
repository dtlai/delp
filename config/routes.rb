Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:show, :index] do
      resources :reviews, only: [:create, :index]
    end
    resource :reviews, only: [:update, :destroy, :show]
  end

  root to: "static_pages#root"
end
