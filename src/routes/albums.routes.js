import { Router } from 'express';

import { getAlbum,getAlbums, createAlbum, deleteAlbum , updateAlbum} from "../controllers/albums.controllers.js";

const router = Router();

router.delete('/albums/:idAlbum',deleteAlbum)

router.post('/albums/',createAlbum)

router.put('/albums/:idAlbum',updateAlbum)

router.get('/albums/:idAlbum',getAlbum)

router.get('/albums',getAlbums)

export default router;