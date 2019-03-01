Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # possibly needed for ActionCable
   mount ActionCable.server => '/cable'

resources :users
resources :messages

  resources :postings, only: [:index, :show] do
    resources :comments, only: [:index]
  end

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:create, :index]
      resources :users, only: [:show]
      get "users/current" => "users#current_user"
    end
  end


  namespace :api do
    namespace :v1 do
        resources :postings, only: [:index, :new, :create, :show] do
          resources :comments, only: [:index, :new, :create, :show]
        end
      end
    end

  namespace :api do
      namespace :v1 do
          resources :users, only: [:show, :new, :create] do
              resources :postings, only: [:index, :new, :create, :show]
          end
        end
      end
  end
