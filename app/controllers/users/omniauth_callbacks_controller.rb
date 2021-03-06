class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    user = User.from_omniauth(request.env['omniauth.auth'])
    if user.persisted?
      sign_in_and_redirect user, event: :authentication
      set_flash_message(:notice, :success, kind: __callee__.to_s) if is_navigational_format?
    else
      session["devise.#{__callee__.to_s}_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
end
