class UsersController < CrudController
  before_action :authenticate_user!
end
