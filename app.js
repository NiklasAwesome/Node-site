const express = require('express');
const app = express();

function startGeneric() {
    console.log("Not implemented, Have a good day!");
    return 0;
}

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(8000, () => {
    console.log("Server currently running on port 8000");
});





startGeneric();
