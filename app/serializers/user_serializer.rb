class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :emails
end
