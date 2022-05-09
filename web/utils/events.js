module.exports = {
    //FRONT
    GET_ENGINE: "/getEngine", // Front call api to get all engines from database
    ADD_ENGINE: "/addEngine", // Front call api to add new arduino with MAC ADDRESS to database

    
    //ARDUINO
    // All calls must contain arduino MAC ADRESS to identify him
    SET_AMBIANTE_TEMPERATURE: "/setAmbianteTemperature",  // Arduino call api pour dire quelle temperature il fait actuellement
    GET_CHAUFFAGE_TEMPERATURE: "/getChauffageTemperature", // Arduino call api pour savoir la temperature à mettre
    GET_REGLE_VOULU: "/getRegleVoulu", // Arduino call api pour savoir les règles d'activation
    GET_TIME: "/getTime" // Arduino call api to know the current date/time
};
