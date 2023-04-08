const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


app.post("/",(req,res)=>{
    const api_key = '0487298612c912d3e7bbb384f2c04360'
    const lang = 'en'
    // https.get(('https://api.themoviedb.org/3/movie/16985?api_key='+ api_key +'&language='+ lang +''),(response)=>{
    https.get(('https://api.themoviedb.org/3/movie/550?api_key='+ api_key +'&language='+ lang),(response)=>{
        console.log(response.statusCode);
        response.on('data', (d) => {
            const mov = JSON.parse(d);
            // console.log(mov); 
            // res.write(mov.belongs_to_collection.name+'\n');

            // res.write(mov.genres[0].name);
            // res.write(mov.genres[1].name+'\n');
            res.write("<h1>"+ mov.overview +"</h1>");

            res.write('<img src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg">\n');
            res.send();
          }); 
    })
    
    // res.send(req.body.mName);

    // res.send(mov.belongs_to_collection.name);
})

app.listen(3000,()=>{
    console.log("Server Started\nWelcome to Movie Shine!")
})