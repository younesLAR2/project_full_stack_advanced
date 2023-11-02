import { Post } from "../types";


export interface PostDao {

    getPosts(): Post[] | undefined;
    createPost(post: Post): void;
    seePost(id: string): Post | undefined;
    deletePost(id: string): void;
}