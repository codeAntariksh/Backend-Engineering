import express from "express";
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
app.use(methodOverride('_method'));
// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 5050;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

import { v4 as uuidv4 } from 'uuid';

// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



let posts = [
    {
        id : uuidv4(),
        username : "Antarikshya",
        content : "I Love Coding"
    },
    {
        "id" : uuidv4(),
        username : "Rupam",
        content : "I Love Mechanical Engineering"
    },
    {
        "id" : uuidv4(),
        username : "Sarthak",
        content : "I Love Research Work"
    }
]



app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/posts",(req,res) => {
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params; // Changed 'res' to 'req'
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = newContent;
    res.redirect("/posts"); // Redirecting back to the index is cleaner than res.send
});


app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        // Always handle the case where the ID is invalid
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});


app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    res.render("edit.ejs",{ post }); 
});


app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    // Standard Filter: keep everything that DOES NOT match the ID
    // Note: use !== (strict inequality)
    posts = posts.filter((p) => id !== p.id); 
    res.redirect("/posts");
});

app.listen(PORT,() => {
    console.log(`Listeining to PORT: ${PORT}`);
});

