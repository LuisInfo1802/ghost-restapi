import {Router} from 'express';
import { getSongs ,createSong,updateSong,deleteSong, getSong} from '../controllers/songs.controllers.js';

const router = Router();

router.get('/songs',getSongs)
//1:09:39
router.get('/songs/:idSong',getSong)


router.post('/songs/',createSong )

router.put('/songs/:idSong', updateSong)

router.delete('/songs/:idSong',deleteSong)

export default router;