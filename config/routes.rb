Rails.application.routes.draw do

  
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  get 'about', to: 'public#new_about', as: 'about'
  get 'extension', to: 'public#extension', as: 'extension'

  resources :sessions, only: [:create, :destroy]
  
  resources :folders, only: [:create, :destroy]
  resources :links, only: [:destroy]
  resources :folder_links, only: [:destroy]
  resources :shared_baskets, only: [:create, :show, :destroy]
  resources :shared_links, only: [:destroy]
  resources :join_baskets, only: [:create, :destroy]

  # match '/google9a7dbb01c4a97ed2.html', 
  #       :to => proc { |env| [200, {}, ["google-site-verification: google9a7dbb01c4a97ed2.html"]] }

  root "public#new_about"

  # Extension Routes
  #============================
  get 'ng_current_user', to: 'users#ng_current_user', as: 'ng_current_user', defaults: { format:'json' }
  get 'ng_users_friends', to: 'users#ng_users_friends', as: 'ng_users_friends', defaults: { format:'json' }
  
  get 'users_inbox_links', to: 'shared_links#inbox_links', as: 'inbox_links'
  
  get 'ng_basket_info', to: 'folders#ng_basket_info', as: 'ng_basket_info', defaults: { format:'json' }
  get 'ng_friends_baskets', to: 'folders#ng_friends_baskets', as: 'ng_friends_baskets', defaults: { format:'json' }
  get 'ng_users_folders', to: 'folders#ng_users_folders', as: 'ng_users_folders', defaults: { format:'json' }
  
  get 'ng_inbox_links', to: 'shared_links#ng_inbox_links', as: 'ng_inbox_links', defaults: { format:'json' }

  get 'last_saved_links', to: 'links#last_saved_links', as: 'last_saved_links', defaults: { format:'json'}
  post 'new_link', to: 'links#new_link', as: 'new_link', defaults: { format:'json'}

  post 'sent_link', to: 'shared_links#sent_link', as: 'sent_link'
  
  get "*path" => "application#index"
end
