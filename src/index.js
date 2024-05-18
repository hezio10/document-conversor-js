const Express = require('express');
const app = Express();

const routeToPDF = require('./routes/toPDF');
const routeToWord = require('./routes/toWord');

// app.use('/');
app.use('/', routeToPDF);
app.use('/', routeToWord);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log("Server running");
});

