import { tvShows } from "../server.js";

const TVController = {
    GetAllTVShows: (req, res) => {
        res.json(tvShows)
    },
    CreateTVShow: (req, res) => {
        tvShows.push(req.body);
        console.log(req);
        console.log(req.body);
        res.json(tvShows)
    },
    GetTVShowsFromYear: (req, res) => {
        const tvShowsFromYear = tvShows.filter(tvShow => tvShow.yearCreated == req.params.year)
        res.json(tvShowsFromYear)
    },
    DeleteOneTVShow: (req, res) => {
        const index = tvShows.findIndex(tvShow => tvShow.tvShow == req.params.title)
        tvShows.splice(index, 1);
        res.json(tvShows)
    },
    UpdateOneTVShowStarring: (req, res)  => {
        console.log(req.params.title)
        tvShows.forEach((tvShow, index) => {
            if(tvShow.tvShow == req.params.title) {
                tvShow.starring = req.body.starring;
            }
        })
        const updatedTVShow = tvShows.find(tvShow=>tvShow.tvShow == req.params.title)
        res.json(updatedTVShow)
    }
}

export default TVController