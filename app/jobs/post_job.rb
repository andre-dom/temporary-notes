class PostJob < ApplicationJob
  queue_as :default

  def perform(post)
    p "Deleted post " + post.uuid
    post.destroy
  end
end
