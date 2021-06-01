module Api
    class PostsController < ApplicationController
        # skip_before_action :verify_authenticity_token
        # protect_from_forgery with: :null_session
        
        def show
            @post = Post.find_by(uuid: params[:uuid])
            if @post
                render json: PostSerializer.new(@post).serializable_hash.to_json, status: 200
            else
                render json: PostSerializer.new(@post).serializable_hash.to_json, status: 404
            end
            # render json: PostSerializer.new(@post).serializable_hash.to_json, status: 200
        end

        def create
            @post = Post.new(post_params)

            if @post.save
                render json: PostSerializer.new(@post).serializable_hash.to_json, status: 200
            else
                render json: {error: @post.errors.messages}, status: 400
            end
        end

        private

        def post_params
            params.require(:post).permit(:content, :delete_in)
        end
    end
end