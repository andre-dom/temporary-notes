class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.integer :delete_in
      t.string :uuid

      t.timestamps
    end
  end
end
