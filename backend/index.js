const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { url } = require('inspector');
const http = require('http').Server(app);


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req,res);
});


http.listen(port, () => {
    console.log(`server chal raa on port ${port}`);

});

