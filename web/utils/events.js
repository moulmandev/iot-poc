module.exports = {
    //FRONT
    
    //ENGINE
    GET_ENGINES: "/getEngines",
    GET_ENGINE: "/getEngine/:adresseMac", // Front call api to get all engines from database
    SET_ENGINE: "/setEngine/:adresseMac", // Front call api to add new arduino with MAC ADDRESS to database
    SET_TIME : "/setTime/:adresseMac/:time", // Front call api to add new time with MAC ADDRESS to database
    SET_STATUS : "/setStatus/:adresseMac/:status", // Front call api to add new time with MAC ADDRESS to database

    DELETE_ENGINE : "/deleteEngine/:adresseMac", // Front call api to add new time with MAC ADDRESS to database

    //Regle
    SET_REGLE : "/setRegle/:adresseMac/:idRegle", // Front call api to add new time with MAC ADDRESS to database
    SET_REGLE_NOM : "/setRegleNom/:adresseMac/:idRegle/:nom", // Front call api to add new time with MAC ADDRESS to database
    SET_REGLE_START : "/setRegleStart/:adresseMac/:idRegle/:start", // Front call api to add new time with MAC ADDRESS to database
    SET_REGLE_END : "/setRegleEnd/:adresseMac/:idRegle/:end", // Front call api to add new time with MAC ADDRESS to database
    SET_REGLE_TEMPERATURE : "/setRegleTemperature/:adresseMac/:idRegle/:temperature", // Front call api to add new time with MAC ADDRESS to database

    DELETE_REGLE: "/deleteRegle/:idRegle",
    //getRegle in arduino



    
    //ARDUINO
    // All calls must contain arduino MAC ADRESS to identify him
    SET_AMBIANTE_TEMPERATURE: "/setAmbianteTemperature/:adresseMac/:temperature",  // Arduino call api pour dire quelle temperature il fait actuellement
    GET_CHAUFFAGE_TEMPERATURE: "/getChauffageTemperature/:adresseMac", // Arduino call api pour savoir la temperature à mettre
    GET_REGLE_VOULU: "/getRegleVoulu/:adresseMac", // Arduino call api pour savoir les règles d'activation
    GET_TIME: "/getTime/:adresseMac" // Arduino call api to know the current date/time
};
