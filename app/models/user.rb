# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    attr_reader :password
    validates :first_name,:last_name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    before_validation :ensure_session_token

    has_many :reviews,
        foreign_key: :reviewer_id,
        class_name: :Review

    has_many :cart_items,
        foreign_key: :user_id,
        class_name: :CartItem
    
    has_many :products,
        foreign_key: :seller_id,
        class_name: :Product

    has_many :items,
        through: :cart_items,
        source: :product


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        save!
        self.session_token
    end

    
    private
    def ensure_session_token
         self.session_token ||= SecureRandom::urlsafe_base64
    end

end
