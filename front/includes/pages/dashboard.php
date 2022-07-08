<?php
    $response = file_get_contents(API_URL  .'/getEngines');
    $engines = json_decode($response);

    if (!empty($_GET)) {
        if (!empty($_GET["error"])) {
            $error = $_GET["error"];
            switch ($error) {
                case "insert":
                    echo "success";
                    break;
                case "noinsert":
                    echo "noinsert";
                    break;
                case "noname":
                    echo "noname";
                    break;
                case "nomac":
                    echo "nomac";
                    break;
                case "nopost":
                    echo "nopost";
                    break;
            }
        }
    }
?>

<div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
        <h1 class="text-3xl text-black pb-6">Tableau de bord</h1>

        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                <p class="text-xl pb-6 flex items-center">
                    Ajouter un MCU
                </p>
                <div class="leading-loose">
                    <form class="p-10 bg-white rounded shadow-xl" action="/actions/add-engine.php" method="post">
                        <div class="">
                            <label class="block text-sm text-gray-600" for="mac">Adresse MAC</label>
                            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="mac" name="mac" type="text" required="" placeholder="Adresse MAC" aria-label="mac">
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-600" for="email">Nom</label>
                            <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="name" name="name" type="text" required="" placeholder="Un pseudo" aria-label="name">
                        </div>
                        <div class="mt-6">
                            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="w-full mt-12">
            <p class="text-xl pb-3 flex items-center">
                <i class="fas fa-list mr-3"></i> Liste des MCU
            </p>
            <div class="bg-white overflow-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Adresse MAC</th>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Température</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">État</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Action(s)</th>
                    </tr>
                    </thead>
                    <tbody class="text-gray-700">
                    <?php
                        foreach ($engines as $engine) {
                            echo '<tr>';
                            echo '<td class="w-1/3 text-left py-3 px-4">' . $engine->adresseMac . '</td>';
                            echo '<td class="w-1/3 text-left py-3 px-4">' . $engine->nom . '</td>';
                            echo '<td class="text-left py-3 px-4">' . $engine->temperature . '</td>';
                            echo '<td class="text-left py-3 px-4">' . ($engine->status == 1 ? "Actif" : "Éteint") . '</td>';
                            echo '<td class="text-left py-3 px-4"><a href="index.php?edit=' . $engine->adresseMac .'" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">Edit</a></td>';
                            echo '</tr>';
                        }
                    ?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <?php include("./includes/elements/footer.php") ?>
</div>