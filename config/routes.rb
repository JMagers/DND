Rails.application.routes.draw do
  devise_for :users
  get 'character_templates/sort', to: 'character_templates#sort'
  resources :character_templates
  root 'character_templates#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
