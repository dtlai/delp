class User < ApplicationRecord

  attr_reader :password

  validates :email, :first_name, :last_name, :password_digest, :zipcode, :session_token, presence: true
  validates :email, uniqueness: true
  validates :zipcode, length: { minimum: 5 }
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

  after_initialize :ensure_session_token

  has_many :reviews,
    class_name: 'Review',
    foreign_key: :user_id


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
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
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
