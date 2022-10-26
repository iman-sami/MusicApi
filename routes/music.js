import { Router } from "express";
import { MusicController } from "../controllers/music";

const router = Router()

router.route("/music").get(MusicController.allMusics)
router.route("/music/:id").get(MusicController.selectedMusic)


export default router;