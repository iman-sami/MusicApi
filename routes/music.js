import { Router } from "express";
import { MusicController } from "../controllers/music.js";
import upload from "../utils/multer.js";

const router = Router()

router.route("/music").get(MusicController.allMusics)
router.route("/music/:id").get(MusicController.selectedMusic)
router.route("/music/upload").post(upload.array("musics"),MusicController.uploadMusic)


export default router;