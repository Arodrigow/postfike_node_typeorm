import { Router } from "express";

import { CreateNewPostController } from "../useCases/posts/createNewPost/createNewPostController";
import { ListAllPostsController } from "../useCases/posts/listAllPosts/listAllPostsController";
import { DeletePostController } from "../useCases/posts/deletePost/DeletePostController";
import { FindPostByUserController } from "../useCases/posts/findPostByUser/findPostByUserController";
import { UpdatePostController } from "../useCases/posts/updatePost/UpdatePostController";
import { FindPostByContentController } from "../useCases/posts/findPostByContent/FindPostByContentController"
import { FindPostController } from "../useCases/posts/findPost/FindPostController";
import { ensureAuth } from "../middlewares/ensureAuth";



const postsRoutes = Router();

const createNewPostController = new CreateNewPostController();
const listAllPostsController = new ListAllPostsController();
const findPostController = new FindPostController();
const findPostByUserController = new FindPostByUserController();
const findPostByContentController = new FindPostByContentController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();

// baseURL/posts
postsRoutes.get("/find", listAllPostsController.handle);

postsRoutes.post("/:user_id/", ensureAuth, createNewPostController.handle);

postsRoutes.get("/:user_id/", findPostByUserController.handle);

postsRoutes.get("/search/q", findPostByContentController.handle);

postsRoutes.get("/find/:post_id", findPostController.handle);

postsRoutes.patch("/:user_id/:post_id", ensureAuth, updatePostController.handle);

postsRoutes.delete("/:user_id/:post_id", ensureAuth, deletePostController.handle);

export { postsRoutes };