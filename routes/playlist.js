import { Router } from "express";
import { PlaylistController } from "../controllers/playlist.js";


const router = Router()

router.route("/playlists").get(PlaylistController.viewPlaylists)
router.route("/createPlaylist").post(PlaylistController.createPlaylist)
router.route("/selectPlaylist").get(PlaylistController.selectedPlaylist)
router.route("/deletePlaylist").delete(PlaylistController.deletePlaylist)




export default router;