//estas son nuestras rutas//

const express = require("express");
const router = express.Router();

const {
    home, 
    artists,
    albums,
    songs
} = require("../controlers/index.controller");

router.get("/", home);

router.get("/artists", artists);

router.get("/artists/:id", albums);

router.get("/albums/:id", songs);


module.exports = router;



