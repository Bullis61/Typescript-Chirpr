const express = require('express');
import { CreateChirp, GetChirp, DeleteChirp, GetChirps, UpdateChirp }  from '../chirpstore';
import chirpstore from '../chirpstore'
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.send(chirpstore.GetChirp(id));
    }
    else {
        res.send(chirpstore.GetChirps());
    }
});

router.post('/', (req, res) => {
    let chirp = req.body;
    chirpstore.CreateChirp(chirp);
    res.send('Chirp added!');
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let editedChirp = req.body;
    chirpstore.UpdateChirp(id, editedChirp);
    res.send('Chirp edited successfully!')
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.send('Chirp deleted!');
});

module.exports = router;
