class TestsController < ApplicationController
  before_action :set_test, only: %i[show create edit update destroy]
  def index
    @tests = Test.all
    @some_stuff = { thing: 10, bling: 6 }
  end

  def show; end

  def new; end

  def create; end

  def edit; end

  def update; end

  def destroy; end

  private

  def set_test
    @test = Test.find(params[:id])
  end
end
