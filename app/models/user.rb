class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :confirmable, :omniauthable, :rememberable
  devise :database_authenticatable, :registerable,
         :recoverable, :trackable, :validatable

  before_save :ensure_authentication_token

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def as_json(options={})
    options[:except] ||= :authentication_token
    super
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end
end
