Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :postings, only: [:index, :show] do
    resources :comments, only: [:index]
  end


  namespace :api do
    namespace :v1 do
      resources :postings, only: [:index, :new, :create, :show] do
        resources :comments, only: [:index, :new, :create, :show]
      end
    end
  end
end
