"using strict"

const express = require('express');
const app = express();

// allows us to access js/css/images if in a public directory
app.use(express.static('public'));

app.get('/',(request, response)=>{
    response.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`)
});