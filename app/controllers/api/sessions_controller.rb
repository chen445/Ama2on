class Api::SessionsController < ApplicationController
    def create
        errors = {}
        if (params[:user][:email] == nil || params[:user][:email] == "")
            errors["emailError"] = "Invalid email"
        end
        if (params[:user][:password] == nil || params[:user][:password] == "")
            errors["passwordError"] = "Invalid password"
        end
        if !errors.empty? 
            return render json: errors, status: 401
        end

        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            errors["generalError"] = "Something went wrong"
            render json: errors, status: 401
        end 
    end


    def destroy
        @user = current_user
        if @user
            logout 
            render "api/users/show"
        else 
            render json: ["User not signed in"], status: 404
        end 
    end 
end
