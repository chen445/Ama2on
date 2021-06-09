class Api::UsersController < ApplicationController
   
    def create
        errors={}
        if user_params[:first_name]==nil || user_params[:first_name]==""
            errors["firstNameError"]="First Name cannot be empty"
        end 
         if user_params[:last_name]==nil || user_params[:last_name]==""
            errors["lastNameError"]="Last Name cannot be empty"
        end 
        if user_params[:email]==nil || user_params[:email]==""
            errors["emailError"]="Email cannot be empty"
        end 

        if user_params[:password]==nil || user_params[:password]==""
            errors["passwordError"]="Password cannot be empty"
        end 
        if !errors.empty?
            return render json: errors, status: 400
        end
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end 
    end

    private
    def user_params
        params.require(:user).permit(:first_name,:last_name,:email,:password)
    end 
end
