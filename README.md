####ERD#####

This project is a full javascript code
i'll use a simple client/server architecture where 
a single server is deployed on a cloud provider next to a relational database 
and serving http traffic to a public endpoint. 

##Schema

user (id, firs/last name, pwd, email(*))
posts (id, title, url, #userId, postedAt(timeStamp))
likes(userId, postId)
comments(userId, postId, comment ,postedAt)


##Server 

a simple server is responsible for authentification, serving stored data, and potentially 
ingesting and serving analytic data 

    - ORM : sequelize (auto queries)
    - FRAMWORK : express.js 


##AUTH 
    Oauth to be added initially or later for google + facebook or even github ,
    JWT-based auth mechanism is to be used  
API 
    -AUTH 
        => /signIn [POST]
        => /signUp [POST]
        => /signOut [POST]
    
    -Posts 
        => /posts/list [GET]
        => /posts/new [POST]
        => /posts/:id  [GET]
        => /posts/:id  [DELETE] // PERMITIONS
    
    -likes 
        => /likes/new [POST]
    
    -comments 
        => /comments/new [POST]
        => /comments/list [GET]
        => /comments/:id [DELETE]

##CLIENTS 

    i'll start with single web client, possibly adding mobile clients later
    the web client will be implemented in React.js


##Hosting 
    the code will be hosted on Github, PRs ans issues are welcome 
    the web client will be hosted using any free web hosting like netlify or firebase, a domain 
    will be purchased for the site, and configured to point to the web host's server public IP 

    we'll deploy the server to a (likely shared) VPS for flexibility. the VM will have HTTP/HTPPS
    posts open, and starting with manual deployement, to be automated later using github actions or
    similar. the server will have closed cors policy except for the domain name and the web host server


