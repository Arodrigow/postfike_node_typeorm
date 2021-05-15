import { Router } from "express";
import { listAllPostsController } from "../useCases/posts/listAllPosts";
import { createNewPostController } from "../useCases/posts/createNewPost"
import { findPostByUserController } from "../useCases/posts/findPostByUser";
import { findPostController } from "../useCases/posts/findPost";
import { updatePostController } from "../useCases/posts/updatePost";

const postsRoutes = Router();

// baseURL/posts
postsRoutes.get("/find/", (request, response) => {
    listAllPostsController.handle(request, response);
});
postsRoutes.post("/:user_id/", (request, response) => {
    createNewPostController.handle(request, response);
});

postsRoutes.get("/:user_id", (request, response) => {
    findPostByUserController.handle(request, response);
});

postsRoutes.get("/find/:post_id", (request, response) => {
    findPostController.handle(request, response);
});

postsRoutes.patch("/:user_id/:post_id", (request, response) => {
    updatePostController.handle(request, response);
});

postsRoutes.delete("/:user_id/:post_id", (request, response) => {
    //TODO: Let an user delete a post
});

export { postsRoutes };