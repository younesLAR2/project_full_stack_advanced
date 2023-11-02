//DAO == DATA ACCESS OBJECT 
    

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
}

export interface Post{
    id: string;
    title: string;
    url: string;
    userId: string;
    userName: number;
}

export interface Like{
    userId: string;
    postId: string;

}

export interface Comment{
    id : string;
    userId: string;
    postId: string;
    comment: string;
    postedAt: number

}