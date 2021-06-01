class Post < ApplicationRecord

    before_create :generateUUID

    after_create do
        PostJob.set(wait_until: delete_in.minutes.from_now).perform_later(self)
    end

    validates :content, length: {minimum: 1, maximum: 300}
    validates :delete_in, :inclusion => 5..120

    def generateUUID
        begin
            self.uuid = SecureRandom.urlsafe_base64(6)
            # self.uuid = SecureRandom.uuid
            # self.id = SecureRandom.random_number(1_000_000)
        end while Post.where(uuid: self.uuid).exists?
    end

end
