class CrudController < ApplicationController
  before_action :find_model

  def index
    @objects = model.all
  end

  def new
    @object = model.new
  end

  def create
    object_responder
  end

  def show
  end

  def edit
  end

  def update
    if @object.update object_params
      respond_to do |format|
        format.html { redirect_to collection_path }
        format.js do
          @message = 'Success!'
          @submessage = "#{model.name.capitalize} Updated!"
          @type = 'success'
        end
      end
    else
      respond_to do |format|
        format.html { render :edit }
        format.js do
          @message = 'Error'
          @submessage = @object.errors.full_messages.first.to_s
          @type = 'error'
        end
      end
    end
  end

  def destroy
    redirect_to collection_path
    @object.destroy
  end

  private

  def object_responder
    if model.create object_params
      respond_to do |format|
        format.html { redirect_to collection_path }
        format.js do
          @message = 'Success!'
          @submessage = "#{model.name.capitalize} Updated!"
          @type = 'success'
        end
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js do
          @message = 'Error'
          @submessage = @object.errors.full_messages.first.to_s
          @type = 'error'
        end
      end
    end
  end

  def model
    @klass ||= controller_name.singularize.camelize.constantize
  end

  def object_params
    params.require(model.name.underscore.to_sym).permit(model.column_names)
  end

  def find_model
    @object = model.find(params[:id]) if params[:id]
  end

  def collection_path
    view_context.url_for controller: controller_path, action: 'index'
  end

  def resource_path
    view_context.url_for controller: controller_path, action: 'show',
                         id: @object.to_param
  end
end
