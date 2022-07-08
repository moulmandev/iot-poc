<?php

include("../includes/config.php");

$type = $_GET["type"];


if (empty($_POST)) {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=nopost");
    else
        echo "No referrer.";
    exit;
}

if ($type == "delete") {
    $response = file_get_contents(API_URL  .'/deleteEngine/' . $_GET["mac"]);
} else if ($type == "rules") {
    $action = $_GET["action"];

    if ($action == "add") {

//        SET_REGLE : "/setRegle/:adresseMac/:idRegle", // Front call api to add new time with MAC ADDRESS to database
//    SET_REGLE_NOM : "/setRegleNom/:adresseMac/:idRegle/:nom", // Front call api to add new time with MAC ADDRESS to database
//    SET_REGLE_START : "/setRegleStart/:adresseMac/:idRegle/:start", // Front call api to add new time with MAC ADDRESS to database
//    SET_REGLE_END : "/setRegleEnd/:adresseMac/:idRegle/:end", // Front call api to add new time with MAC ADDRESS to database
//    SET_REGLE_TEMPERATURE : "/setRegleTemperature/:adresseMac/:idRegle/:temperature", // Front call api to add new time with MAC ADDRESS to database
//
//    DELETE_REGLE: "/deleteRegle/:idRegle",

        $response = file_get_contents(API_URL  .'/setEngine/' . $mac);
    } else if ($action == "delete") {
        $response = file_get_contents(API_URL  .'/setEngine/' . $mac);
    }
}


$response = json_decode($response);

if ($response->code == 200) {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=success");
    else
        echo "No referrer.";
} else {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=error");
    else
        echo "No referrer.";
}
// insert (success), noinsert, noname, nomac, nopost
