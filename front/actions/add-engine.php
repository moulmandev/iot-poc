<?php

include("../includes/config.php");

if (empty($_POST)) {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=nopost");
    else
        echo "No referrer.";
    exit;
}
if (empty($_POST["mac"])) {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=nomac");
    else
        echo "No referrer.";
    exit;
}

$mac = $_POST["mac"];
//$name = $_POST["name"];


$response = file_get_contents(API_URL  .'/setEngine/' . $mac);

$response = json_decode($response);

if ($response->code == 200) {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=insert");
    else
        echo "No referrer.";
} else {
    if (!empty($_SERVER['HTTP_REFERER']))
        header("Location: ".$_SERVER['HTTP_REFERER'] . "?error=noinsert");
    else
        echo "No referrer.";
}
// insert (success), noinsert, noname, nomac, nopost
