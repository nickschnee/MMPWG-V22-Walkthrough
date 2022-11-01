
function beispielFetch() {

    //Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
    //In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    //Hier startet der Fetch mit der definierten URL.
    fetch(url)
        //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
        .then(response => response.json())
        //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
        .then(data => {
            //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
            //Mit "Console.log(data);" sieht man den Inhalt des Objekts.
            console.log(data);
            //Ab hier kann man entweder mit der Variable data arbeiten, oder eine funktion aufrufen mit data als Parameter.

            //Beispiel eines Funktionsaufrufs
            //"showSomething(data);"

        })
        //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
        .catch(error => console.log(error))

}


function beispielFetchFormulardaten() {

    let formData = new FormData();
    formData.append('data1', data1);

    fetch("meinserver.ch/php/daten.php",
        {
            body: formData,
            method: "post",
        })

        .then((res) => {

            return res.text();

        })
        .then((data) => {

            document.querySelector('#nachricht').innerHTML = data;

        })

}

function fetchMitAuthorisierung() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    fetch("https://376009-17.web.fhgr.ch/php/holeWGs.php",
        {
            body: '',
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            // mache etwas

        })
}

function WGsAnzeigen(data) {

    data.forEach(wg => {


        if (parseInt(wg.status)) {

            wg.status = '🟢';

        } else {

            wg.status = "🔴"

        }


        let wgContainer = document.createElement("div");
        wgContainer.innerHTML =

            '<div class="wg">' +
            '<h2>' + wg.status + ' ' + wg.titel + '</h2>' +
            '<img class="wg-image" src="' + wg.bild + '">' +
            '<p>' + wg.beschreibung + '</p>' +
            '📍 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=' + wg.adresse + '">' + wg.adresse + '</a> <br>' +
            '👉 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=' + wg.adresse + '">' + wg.email + '</a>' +
            '<p> <b> <span id="WG-' + wg.ID + '">  </span> <b> </p>'
            + '</div>';

        document.getElementById("liste-wg").appendChild(wgContainer);

        holeHashtagsVonWG(wg.ID);

    });

    function holeHashtagsVonWG(id) {

        let userID = localStorage.getItem('userID');
        let token = localStorage.getItem('token');

        let formData = new FormData();
        formData.append('wgID', id);

        fetch("https://376009-17.web.fhgr.ch/php/holeHashtagsVonWG.php",
            {
                body: formData,
                method: "post",
                headers: {

                    'Authorization': 'Basic ' + btoa(userID + ':' + token),

                }
            })

            .then((res) => {

                // error handling if session is expired
                if (res.status >= 200 && res.status < 300) {

                    return res.json();

                } else {

                    alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                    window.location = "/login.html"

                }

            })
            .then((data) => {

                if (data.length > 0) {

                    data.forEach(element => {

                        // füge die Hashtags ins Dokument ein 
                        // (hook: ID, welche in der Funktion WGsAnzeigen dynamisch vergeben wird)
                        document.getElementById("WG-" + id).innerHTML += '#' + element.hashtag + ' ';

                    });

                }

            })

    }

}