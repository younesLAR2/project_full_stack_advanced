import express, { RequestHandler } from "express";

const app = express();
app.use(express.json())


//our database
const posts: any[] = []

const requestLoggerMiddleware :RequestHandler = (req,res,next)=>{
    console.log("new request !");
    next();

}

app.use(requestLoggerMiddleware)
app.get('/posts',(request,response) =>{

    response.send({posts})
})

//Express by default doesn't know how to parse json request value to body 

app.post('/posts',(req,res)=>{

    const post = req.body
    posts.push(post);
    res.sendStatus(200);
})

app.listen(3000)
