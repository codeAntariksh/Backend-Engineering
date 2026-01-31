import express from 'express';
const app = express();
const PORT = 8000;
app.use(express.static("/public/css"));
app.use(express.static("/public/js"));
app.set("view engine","ejs");


app.get("/route",(req,res) => {
    res.send(`This is a Route`);
});

app.get("/ig/:username", (req,res) => {
    let username = req.params.username;
    const followers = ["adam","bob","sydney","marley","jessica"];
    console.log(username);
    res.render("instagram.ejs",{username,followers});
})


app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{ num : diceVal });
});

app.get('/',(req,res) => {
    // res.send(`This is Root`);
    res.render("home.ejs");
});


app.listen(PORT,() => {
    console.log(`Listening to PORT ${PORT}`);
});
