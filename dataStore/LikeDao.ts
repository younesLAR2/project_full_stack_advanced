import { Like } from "../types";

export interface LikeDao{

    creatLike(like: Like): void
}