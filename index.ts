import express, { RequestHandler } from "express";
import {db} from "./dataStore"
import { Post } from './types';
const app = express();
app.use(express.json())




const requestLoggerMiddleware :RequestHandler = (req,res,next)=>{
    console.log(req.method,'-',req.path,'-',req.body);
    next();

}

//app.use(requestLoggerMiddleware)
app.use((req,res,next)=>{
    // console.log(Date.now())
    next();
})

app.get('/posts',requestLoggerMiddleware,(request,response) =>{
    const posts: Post[] | undefined = db.getPosts()
    response.send({posts})
})


//Express by default doesn't know how to parse json request value to body 

app.post('/posts',(req,res)=>{

    const post = req.body
    db.createPost(post);
    res.sendStatus(200);
})

app.listen(3000)
