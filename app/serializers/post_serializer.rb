class PostSerializer
  include JSONAPI::Serializer
  attributes :content, :uuid, :delete_in, :id

  attribute :created_at do |post|
    post.created_at.utc.in_time_zone("Pacific Time (US & Canada)").strftime("%Y-%m-%d at %I:%M%p")
  end

  attribute :delete_at do |post|
    (post.created_at + post.delete_in.minutes).utc.in_time_zone("Pacific Time (US & Canada)").strftime("%Y-%m-%d at %I:%M%p")
  end

  attribute :delete_in do |post|
    (post.created_at + post.delete_in.minutes) - Time.now
  end
end
