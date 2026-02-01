import express from 'express';
const app = express();
const PORT = 8080;
// app.use(express.static('FrontEnd'));
// app.use(express.)
app.set(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET Response. Username: ${user}, Password: ${password}`);
});

app.post("/register", (req, res) => {
    // POST uses req.body (Data is hidden in the request body) 
    console.log(req.body);
    res.send(`Standard POST Response. Welcome!`);
});

app.listen(PORT,() => {
    console.log(`Listening to PORT ${PORT}`);
});