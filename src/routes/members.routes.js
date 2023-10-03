import { Router } from "express";

import { getMember,getMembers, createMember, deleteMember, updateMember} from "../controllers/members.controllers.js";

const router = Router();

router.put('/members/:idMember',updateMember)

router.delete('/members/:idMember',deleteMember)

router.post('/members',createMember)

router.get('/members/:idMember',getMember)

router.get('/members/',getMembers)


export default router;