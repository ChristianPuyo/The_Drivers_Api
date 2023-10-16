const { Driver, Team} = require("../db")
const { Op } = require("sequelize")
const axios = require('axios')



const getDbDrivers = async () => {
    const drivers = await Driver.findAll(
        {
            include: {
                model: Team,
                attributes: ['name'],
                as: 'teams',
                through: { attributes: [] }

            }
        }
    );
    return drivers;

};

const getApiDrivers = async ()=>{
    const apiInfo = await axios.get('http://localhost:5000/drivers');
    const apiInfoFiltered = apiInfo.data.map(element => {
        return{
            id: element.id,
            firstName: element.name.forename,
            lastName: element.name.surname,
            description: element.description,
            image: element.image.url,
            nationality: element.nationality,
            birthday: element.dob,
            teams: element.teams
        }
    })
    return apiInfoFiltered
}

const getAllDrivers = async ()=>{

    const dbInfo = await getDbDrivers();
    const apiInfo = await getApiDrivers();
    const getAllDriversApiDb = dbInfo.concat(apiInfo)
    return  getAllDriversApiDb;
}

const createDriver = async (firstName, lastName, description, image, nationality, birthday, createdInDb, teams)=>{
 let driverCreated = await Driver.create({firstName, lastName, description, image, nationality, birthday, createdInDb})

 let teamDb = await Team.findAll({
    where: {name: teams} 
 })

 driverCreated.addTeam(teamDb)
 return driverCreated;
}

const findDriverById = async (id)=>{
    const driversTotal = await getAllDrivers();
    
    let driverId = driversTotal.filter(el => el.id==id)
    if (driverId.length) {
        return driverId
    }else{
        return 'Id no encontrado'
    }
    
   
}





module.exports = { 
    getDbDrivers, 
    getApiDrivers, 
    getAllDrivers,
    createDriver,
    findDriverById
};