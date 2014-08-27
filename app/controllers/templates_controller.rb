class TemplatesController < ActionController::Base

  def page
    @path = params[:path]
    render :template => @path, :layout => nil
  end
end