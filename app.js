const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const messages = require('./messages');

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

//conversations crud 
app.get('/messages', messages.getMessages); // get all messages
app.get('/messages/:id', messages.getMessage); // get just one message

app.post('/message', messages.insertMessage); // insert new message

app.put('/message/:id', messages.updateMessage); // update message

app.delete('/messages/delete/:id', messages.deleteMessage); // delete message

app.listen(8000, () => console.log('server in port 8000'));