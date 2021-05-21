import { Router } from "express";

import { CreateNewPostController } from "../useCases/posts/createNewPost/createNewPostController";
import { ListAllPostsController } from "../useCases/posts/listAllPosts/listAllPostsController";


const postsRoutes = Router();

const createNewPostController = new CreateNewPostController();
const listAllPostsController = new ListAllPostsController();

// baseURL/posts
postsRoutes.get("/find/", listAllPostsController.handle);

postsRoutes.post("/:user_id/", createNewPostController.handle);

postsRoutes.get("/:user_id", (request, response) => {
    //findPostByUserController.handle(request, response);
});

postsRoutes.get("/find/:post_id", (request, response) => {
    //findPostController.handle(request, response);
});

postsRoutes.patch("/:user_id/:post_id", (request, response) => {
    //updatePostController.handle(request, response);
});

postsRoutes.delete("/:user_id/:post_id", (request, response) => {
    //deletePostController.handle(request, response);
});

export { postsRoutes };