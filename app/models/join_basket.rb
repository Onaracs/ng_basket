=begin

1.) Create new model/migration for joining baskets
- Will belong to user
- Will belong to folder

2.) When a user clicks on join basket
- http request to create a new join_basket with
  - user_id
  - folder_id

3.) When a user has their baskets returned
  - user.folders.order('created_at ASC')
  - ADD!!!
  - user.join_folders.folders and push to @folders


=end

class JoinBasket < ActiveRecord::Base
  belongs_to :folder
  belongs_to :user

  # ADD AN OWNER FALSE HERE FOR THE LOOP
end