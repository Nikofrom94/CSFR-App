import { AppDataSource } from "./data-source"
import { Ability } from "./entity/Ability"
import { AbilityCategory } from "./entity/AbilityCategory"



AppDataSource.initialize().then(async () => {

    console.log("checking a ability category in DB...")
    let ab_categ = await AppDataSource
        .createQueryBuilder()
        .select("abilitycategory")
        .from(AbilityCategory, "abilitycategory")
        .where("abilitycategory.name = :name", { name: "Artisanat" })
        .getOne()
    if(ab_categ == null){
        console.log("Inserting a ability category in DB...")
        ab_categ = new AbilityCategory()
        ab_categ.name = "Artisanat"
        ab_categ.name_en = "Crafting"
        ab_categ.description = ""
        ab_categ.cs_page = ""
        await AppDataSource.manager.save(ab_categ)
    }


    console.log("Inserting a new ability into the database...")
    const ab = new Ability()
    ab.name = "Timber"
    ab.name_en = "Saw"
    ab.cs_page = "25"
    ab.stat = ""
    ab.stat_cost = ""
    ab.tier = "1"
    ab.description = "une longe description"
    await AppDataSource.manager.save(ab)
    console.log("Saved a new ability with id: " + ab.id)
    console.log("Adding ability category " + ab_categ.id + " to ability with id: " + ab.id)
    await AppDataSource
    .createQueryBuilder()
    .relation(Ability, "categories")
    .of(ab)
    .add(ab_categ)


    console.log("Loading abilities from the database...")
    const abilities = await AppDataSource.manager.find(Ability)
    console.log("Loaded abilities: ", abilities)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

