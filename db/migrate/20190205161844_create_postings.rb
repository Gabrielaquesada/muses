class CreatePostings < ActiveRecord::Migration[5.2]
  def change
    create_table :postings do |t|
      t.text :description, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
