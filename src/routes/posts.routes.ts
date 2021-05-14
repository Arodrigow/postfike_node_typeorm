import { Router } from "express";
import { listAllPostsController } from "../useCases/posts/listAllPosts";
import { createNewPostController } from "../useCases/posts/createNewPost"

const postsRoutes = Router();

// baseURL/posts
postsRoutes.get("/", (request, response) => {
    listAllPostsController.handle(request, response);
});
postsRoutes.post("/:user_id/", (request, response) => {
    createNewPostController.handle(request, response);
});

postsRoutes.get("/:user_id", (request, response) => {
    //TODO: Get all posts of a user
});

postsRoutes.get("/:user_id/:post_id", (request, response) => {
    //TODO: Get a specific post from user
});

postsRoutes.patch("/:user_id/:post_id", (request, response) => {
    //TODO: Let an user update posts
});

postsRoutes.delete("/:user_id/:post_id", (request, response) => {
    //TODO: Let an user delete a post
});

export { postsRoutes };