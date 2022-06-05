module.exports = {
    //FRONT
    GET_ENGINE: "/getEngine/:adresseMac", // Front call api to get all engines from database
    SET_ENGINE: "/setEngine/:adresseMac", // Front call api to add new arduino with MAC ADDRESS to database
    SET_TIME : "/setTime/:adresseMac/:time", // Front call api to add new time with MAC ADDRESS to database
    SET_REGLE : "/setRegle/:adresseMac/:idRegle", // Front call api to add new time with MAC ADDRESS to database

    SET_STATUS : "/setStatus/:adresseMac/:status", // Front call api to add new time with MAC ADDRESS to database
    //TODO SET REGLE
    
    //ARDUINO
    // All calls must contain arduino MAC ADRESS to identify him
    SET_AMBIANTE_TEMPERATURE: "/setAmbianteTemperature/:adresseMac/:temperature",  // Arduino call api pour dire quelle temperature il fait actuellement
    GET_CHAUFFAGE_TEMPERATURE: "/getChauffageTemperature/:adresseMac", // Arduino call api pour savoir la temperature à mettre
    GET_REGLE_VOULU: "/getRegleVoulu/:adresseMac", // Arduino call api pour savoir les règles d'activation
    GET_TIME: "/getTime/:adresseMac" // Arduino call api to know the current date/time
};
