const { Router } = require("express");
const { getAllDrivers, createDriver, findDriverById  } = require("../controllers/driverControllers");


const driverRouter = Router();

driverRouter.get("/", async (req, res) => {

    const name = req.query.name;
    let drivers;
    try {
        drivers = await getAllDrivers(); 
        if (name) {
            const driversName = drivers.filter(element => element.firstName.toLowerCase().includes(name.toLowerCase()))
            driversName.length?
            res.status(200).json(driversName):
            res.status(404).send('Driver no encontrado')
        }else {
            res.status(200).json(drivers)
        }       

        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


driverRouter.post("/", async (req, res)=>{
    
    const {firstName, lastName, description, image, nationality, birthday, createdInDb, teams  } = req.body;
    
        try {
            const newDriver = await createDriver(firstName, lastName, description, image, nationality, birthday, createdInDb, teams)
            res.status(200).json(newDriver);
            
        } catch (error) {
            res.status(400).json({error: error.message})   
        }
      
    
})

driverRouter.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        let driver = await findDriverById(id);
        res.status(200).json(driver)
        
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
})



// studentRouter.post("/cargamasiva", async (req, res)=>{
    
//     const data = req.body;
//     console.log(data);
    
//         try {
//             if (data.length>0) {
//                 const datosMasivos = await insertarDatosMasivos(data)
//                 res.status(200).json(datosMasivos);
//             } else {
//                 throw new Error('Archivo vacio')  
//             }     
            
//         } catch (error) {
//             res.status(400).json({error: error.message})   
//         }
// })

// studentRouter.put("/:id", async (req, res)=>{

//     const{ id }  = req.params ;
//     const{ nombres, apellidos, dni, genero, fechaNacimiento, edad, email, id_departamento, id_plan}= req.body;
//     console.log(req.body)
//     try {
//         const actualizarEstudiante = await updateStudent(id, nombres, apellidos, dni, genero, fechaNacimiento, edad, email, id_departamento, id_plan );
//         res.status(200).json(actualizarEstudiante)
        
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })



// studentRouter.delete("/:id", async (req, res)=>{
//     const{ id }  = req.params ;
//     try {
//         const studentDeleted = await deleteStudent(id);
//         res.status(200).json(studentDeleted)
        
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })


module.exports = driverRouter;