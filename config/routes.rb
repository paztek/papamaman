Papamaman::Application.routes.draw do

  devise_for :users, :skip => [:all]

  namespace 'api', :format => :json do
    namespace 'auth' do
      post '/login' => 'authentication#login', :as => 'login', :defaults => { :format => 'json' }
      post '/signup' => 'authentication#signup', :as => 'signup', :defaults => { :format => 'json' }
      post '/send-reset-password-instructions' => 'authentication#send_reset_password_instructions', :as => 'send_reset_password_instructions', :defaults => { :format => 'json' }
      post '/reset-password' => 'authentication#reset_password', :as => 'reset_password', :defaults => { :format => 'json' }
    end
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  #root 'home#index'

  # Serve AngularJS templates
  #get '/views/:path.html' => 'templates#page', :constraints => { :path => /.+/  }

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
