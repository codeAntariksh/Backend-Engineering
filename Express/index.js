import express from 'express'
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, () => {
    console.log("App Listening on Port " + port);
});

// app.use((req,res) => {
//     console.log("Request Received");
//     // res.send("This is a Basic Response!");
//     // res.send({
//     //     "id":23,
//     //     "language":"JavaScript"
//     // });
//     let str = `<h1> The Reponse is: </h1>
//     <ul> 
//         <li> Object 1 </li>
//         <li> Object 2 </li>
//     </ul>`;
//     res.send(str);
//     // console.log(req);
// });

// app.get('/', (req, res) => {
//     res.send("You Contacted Root Path");
// });
// app.post('/', (req, res) => {
//     res.send("You Contacted Root Path and it's a POST Request");
// });

// app.get('/orange', (req, res) => {
//     res.send("You Contacted Orange Path");
// });

// app.get('/apple', (req, res) => {
//     res.send("You Contacted Apple Path");
// });
// app.post('/apple',(req,res) => {
//     res.send("Hello I am Post");
// });
/* 404 handler — MUST be last */
// app.use((req, res) => {
//     res.status(404).send("This Page Does Not Exist");
// });

// PATH PARAMETERS

// app.get('/:username/:id', (req, res) => {
//     let { username, id } = req.params;
//     // Combine both pieces of data into one response
//     res.send(`<h1>Welcome to the page of @${username}</h1><p>User ID: ${id}</p>`);
// });

// app.get("/search",(req,res) => {
//     let { q, color } = req.query;
//     res.send("These are the Search Results of the Query:" + q + color);
// })

// app.get('/',(req,res) => {
//     res.send("Hello, I am Root");
// });
// import express from 'express';
// const app = express();
// const PORT = 8000;

// app.get('/book/:title',(req,res) => {
//     res.send(`Now Reading: ${req.params.title}`);
// });

// app.get('/search', (req, res) => {
//     // If req.query.author is null/undefined, use 'Any Author'
//     const author = req.query.author || 'Any Author';
//     const year   = req.query.year || 'All Years';
    
//     res.send(`Searching for books by ${author} published in ${year}`);
// });

// app.get('/user/:id/books',(req,res) => {
//     const status = req.query.status;
//     const id = req.params.id;
//     res.send(`Showing ${status} books for User ${id}`); 
// });

// app.get('/',(req,res) => {
//     res.send(`Welcome to the Community Library!`);
// });


// app.listen(PORT, () => {
//     console.log(`App is Listening to Port ${PORT} and server is runnning at http://localhost:${PORT}`);
// });
