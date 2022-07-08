<?php

$response = file_get_contents(API_URL  .'/getEngine/' . $_GET["edit"]);
$mcuEntity = current(json_decode($response));

if (!empty($_GET)) {
    if (!empty($_GET["error"])) {
        $error = $_GET["error"];
        switch ($error) {
            case "success":
                echo "success";
                break;
            case "error":
                echo "error";
                break;
        }
    }
}
?>

<div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
        <h1 class="text-3xl text-black pb-6">Éditeur</h1>


        <p class="text-xl pb-6 flex items-center">
            Supprimer un MCU
        </p>

        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                <p class="text-xl pb-6 flex items-center">
                    Ajouter une règle d'activation
                </p>
                <div class="leading-loose">
                    <form class="p-10 bg-white rounded shadow-xl" action="/actions/edit-engine.php?type=rules&action=add" method="post">
                        <div class="">
                            <label class="block text-sm text-gray-600" for="datepicker_start">Heure de début</label>
                            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="datepicker_start" id="datepicker_start" placeholder="Choisissez un heure de début" required/>
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-600" for="datepicker_end">Heure de fin</label>
                            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="datepicker_end" id="datepicker_end" placeholder="Choisissez un heure de fin" required/>
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-600" for="temp">Température cible (en °C)</label>
                            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="temp" id="temp">
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
                <i class="fas fa-list mr-3"></i> Liste des règles d'activation pour '<?= $mcuEntity->adresseMac ?>'
            </p>
            <div class="bg-white overflow-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Heure de début</th>
                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Heure de fin</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Température (en °C)</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Action(s)</th>
                    </tr>
                    </thead>
                    <tbody class="text-gray-700">

                        <tr>
                            <td class="w-1/3 text-left py-3 px-4">12h00</td>
                            <td class="w-1/3 text-left py-3 px-4">0h00</td>
                            <td class="text-left py-3 px-4">20</td>
                            <td class="text-left py-3 px-4"><a href="" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">Supprimer</a></td>
                        </tr>
                        <tr>
                            <td class="w-1/3 text-left py-3 px-4">0h00</td>
                            <td class="w-1/3 text-left py-3 px-4">6h00</td>
                            <td class="text-left py-3 px-4">23</td>
                            <td class="text-left py-3 px-4"><a href="" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">Supprimer</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <?php include("./includes/elements/footer.php") ?>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
        flatpickr("#datepicker_start", {
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true
        });

        flatpickr("#datepicker_end", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        });


    </script>
</div>