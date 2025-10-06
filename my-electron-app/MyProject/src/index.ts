import { AppDataSource } from "./data-source"
import { Ability } from "./entity/Ability"

try {
    AppDataSource.initialize()
    console.log("Data Source has been initialized!")
} catch (error) {
    console.error("Error during Data Source initialization", error)
}

try{
        console.log("Inserting a new ability into the database...")
        const ab = new Ability()
        ab.name = "Timber"
        ab.name_en = "Saw"
        ab.cs_page = "25"
        await AppDataSource.manager.save(ab)
        console.log("Saved a new ability with id: " + ab.id)

        console.log("Loading users from the database...")
        const abilities = await AppDataSource.manager.find(Ability)
        console.log("Loaded abilities: ", abilities)

        console.log("Here you can setup and run express / fastify / any other framework.")
}
catch(error ){
    console.error("Error during Data inserting", error)
}

