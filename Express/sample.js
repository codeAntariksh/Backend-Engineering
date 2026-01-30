import express from 'express';
const app = express();
const PORT = 8000;

app.get('/book/:title',(req,res) => {
    res.send(`Now Reading: ${req.params.title}`);
});

app.get('/search', (req, res) => {
    // If req.query.author is null/undefined, use 'Any Author'
    const author = req.query.author || 'Any Author';
    const year   = req.query.year || 'All Years';
    
    res.send(`Searching for books by ${author} published in ${year}`);
});

app.get('/user/:id/books',(req,res) => {
    const status = req.query.status;
    const id = req.params.id;
    res.send(`Showing ${status} books for User ${id}`); 
});

app.get('/',(req,res) => {
    res.send(`Welcome to the Community Library!`);
});


app.listen(PORT, () => {
    console.log(`App is Listening to Port ${PORT} and server is runnning at http://localhost:${PORT}`);
});






