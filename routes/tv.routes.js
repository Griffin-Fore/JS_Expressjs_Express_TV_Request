import {Router} from "express";
import TVController from "../controllers/tv.controller.js";
const router = Router()

router.route("/tv")
    .get(TVController.GetAllTVShows)
    .post(TVController.CreateTVShow)

router.route("/tv/year/:year")
    .get(TVController.GetTVShowsFromYear)

router.route("/tv/:title")
    .delete(TVController.DeleteOneTVShow) 
    .patch(TVController.UpdateOneTVShowStarring) 

export default router;