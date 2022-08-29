const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.listen(9000, () => {
    console.log('App running on port 9000');
})



app.get('/', (req, res) => {
    res.json({message: 'Crush your enemies'});
});
