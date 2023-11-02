import { dataStore } from "..";
import { User, Post, Like, Comment } from "../../types";

export class inMemory implements dataStore {
  private users: User[] = [];
  private posts: Post[] = [];
  private comments: Comment[] = [];
  private likes: Like[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }
  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => email == user.email);
  }
  getUserByUsername(username: string): User | undefined {
    return this.users.find((user) => username == user.userName);
  }
  getPosts(): Post[] {
    return this.posts;
  }
  createPost(post: Post): void {
    this.posts.push(post);
  }
  seePost(id: string): Post | undefined {
    return this.posts.find((post) => id == post.id);
  }
  deletePost(id: string): void {
    const index = this.posts.findIndex((p) => id == p.id);
    if (index === -1) {
      return;
    }
    this.posts.splice(index, 1);
  }
  creatLike(like: Like): void {
    this.likes.push(like);
  }
  createComment(comment: Comment): void {
    this.comments.push(comment);
  }
  listComments(postId: string): Comment[] {
    return this.comments.filter((comment) => postId == comment.postId);
  }
  deleteComment(id: string): void {
    const index = this.comments.findIndex((c) => id == c.id);
    if (index === -1) {
      return;
    }
    this.comments.splice(index, 1);
  }
}
