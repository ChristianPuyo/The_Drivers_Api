const { Driver, Team} = require("../db")

const axios = require('axios')

const getAllTeams = async ()=>{
    const apiInfo = await axios.get('http://localhost:5000/drivers');
    const apiTeams = apiInfo.data.map(element => element.teams)
    const eachTeam = apiTeams.
        filter(element => typeof element === 'string').
        map(element => element.split(/, |,/)) 
        .flat()    

        eachTeam.forEach(el => {
            Team.findOrCreate({
                where: {name: el}
            })
            
        });
    

    const allTeams = await Team.findAll();
    return (allTeams); 
    
}


module.exports = { 
    getAllTeams
};





