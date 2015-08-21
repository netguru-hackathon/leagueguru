class UserSerializer < ActiveModel::Serializer
  attributes :value, :label, :email

  def label
    object.name
  end

  def value
    object.id
  end
end
