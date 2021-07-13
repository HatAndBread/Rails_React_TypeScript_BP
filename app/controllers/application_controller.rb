class ApplicationController < ActionController::Base
  before_action :add_controller_action_names, only: %i[new edit show index]

  private

  def add_controller_action_names
    @controller_action = "#{controller_name}##{action_name}"
  end
end
