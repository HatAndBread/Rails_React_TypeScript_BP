class PagesController < ApplicationController
  def home
    # @use_react = true to render view through React
    @a_nice_message = 'hello!'
    @use_react = true
  end
end
