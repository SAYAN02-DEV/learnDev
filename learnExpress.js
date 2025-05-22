import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//morgan middleware
//custom middleware
app.use((req, res, next) => {
    conseol.log("request method:", req.url);
    next();
})
app.get('/', (req, res) => {
    res.send('hello world');
    //we can send html also; or html file also
    //res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})