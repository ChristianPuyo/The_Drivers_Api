const { Router } = require("express");
const { getAllTeams  } = require("../controllers/teamControllers");


const teamRouter = Router();

teamRouter.get("/", async (req, res) => {

    let teams;
    try {
         teams = await getAllTeams();
         res.status(200).json(teams)
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = teamRouter;