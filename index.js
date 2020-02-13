const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    
    const songs = [{ id: 1, artist: 'Roddy Rich', name: 'The Box' }];
    
    res.status(200).json(songs);
})


const port = 5000; 
server.listen(port, () => console.log(`\n*** API on port ${port} ***\n`));