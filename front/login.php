<?php
session_start();

include("./includes/config.php");
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IOT-POC - Login</title>
    <meta name="author" content="https://github.com/moulmandev/iot-poc">
    <meta name="description" content="">

    <!-- Tailwind -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
        .font-family-karla { font-family: karla; }
        .bg-sidebar { background: #3d68ff; }
        .cta-btn { color: #3d68ff; }
        .upgrade-btn { background: #1947ee; }
        .upgrade-btn:hover { background: #0038fd; }
        .active-nav-link { background: #1947ee; }
        .nav-item:hover { background: #1947ee; }
        .account-link:hover { background: #3d68ff; }
    </style>
</head>

    <body class="bg-gray-100 font-family-karla flex">

        <div class="w-full flex flex-col h-screen overflow-y-hidden">
            <form class="p-10 bg-white rounded shadow-xl" action="/actions/login.php" method="post">
                <div class="">
                    <label class="block text-sm text-gray-600" for="username">Nom d'utilisateur</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="username" id="username" required/>
                </div>
                <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="password">Mot de passe</label>
                    <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="password" name="password" id="password" required/>
                </div>
                <div class="mt-6">
                    <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Se connecter</button>
                </div>
            </form>
        </div>

        <!-- AlpineJS -->
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
        <!-- Font Awesome -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></s
    </body>
</html>
