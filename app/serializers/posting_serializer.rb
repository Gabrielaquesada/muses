class PostingSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_name, :user_photo, :posting_time, :location

  has_many :comments

  def user_name
    object.user.name
  end

  def user_photo
    object.user.profile_photo
  end

  def posting_time
    object.user.created_at
  end

  def location
    object.user.location
  end

end
