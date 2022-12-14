var wgID;

var hashtags = [];

holeUserWG();

holeAlleHashtags();

function neueWG(){

    console.log("Neue WG erstellen!");

    let titel = document.querySelector("#titel").value;
    let adresse = document.querySelector("#adresse").value;
    let bild = document.querySelector("#bild").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let stadt = document.querySelector("#stadt").value;
    let status = document.querySelector("input[name='status']:checked").value;


    let formData = new FormData();
    formData.append('titel', titel);
    formData.append('adresse', adresse);
    formData.append('bild', bild);
    formData.append('beschreibung', beschreibung);
    formData.append('stadt', stadt);
    formData.append('status', status);

    formData.append('hashtags', JSON.stringify(hashtags));

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    formData.append('user', userID);

    fetch("https://376009-18.web.fhgr.ch/php/neueWG.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(userID + ':' + token),

            }
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        // console.log(data);
        document.querySelector('#nachricht').innerHTML = data;

        })

}

function holeUserWG() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://376009-18.web.fhgr.ch/php/holeUserWG.php",
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

            console.log(data);

            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            if (data.length == 0) {

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "F??lle dieses Formular aus, um deine WG aufzuschalten:"

                // zeige den korrekten Button an
                document.querySelector('#button-neue').classList.remove("hidden");

                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
            } else {

                // speichere die wg ID in der globalen variable
                // diese brauchen wir sp??ter zum aktualisieren und l??schen der WG
                wgID = data[0].ID;

                // zeige Infotext an
                document.querySelector('#infoText').innerHTML = "Hier kannst du deine WG bearbeiten:"

                // zeige den korrekten Button an
                document.querySelector('#button-aktualisieren').classList.remove("hidden");
                document.querySelector('#button-loeschen').classList.remove("hidden");

                // f??lle das Formular mit den Werten aus der DB aus
                document.querySelector('#titel').value = data[0].titel;
                document.querySelector('#adresse').value = data[0].adresse;
                document.querySelector('#beschreibung').value = data[0].beschreibung;
                document.querySelector('#stadt').value = data[0].stadt;
                document.querySelector('#bild').value = data[0].bild;
                document.querySelector('#bild-vorschau').src = data[0].bild;

                // setze den korrekten Status (Radiobutton) aus den Infos der DB
                if (data[0].status == 1) {

                    document.querySelector('#status-frei').checked = true;

                } else {

                    document.querySelector('#status-besetzt').checked = true;

                }

                // f??rbe die Hashtags dieser WG korrekt ein
                holeHashtagsVonWG(wgID);

            }
        })
}

function aktualisiereWG() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    // Formulardaten in Body ??bertragen
    let titel = document.querySelector('#titel').value;
    let adresse = document.querySelector('#adresse').value;
    let beschreibung = document.querySelector('#beschreibung').value;
    let stadt = document.querySelector('#stadt').value;
    let bild = document.querySelector('#bild').value;
    let status = document.querySelector('input[name="status"]:checked').value;

    let jsonHashtags = JSON.stringify(hashtags);

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('titel', titel);
    formData.append('adresse', adresse);
    formData.append('beschreibung', beschreibung);
    formData.append('stadt', stadt);
    formData.append('status', status);
    formData.append('bild', bild);

    formData.append('hashtags', jsonHashtags);

    formData.append('wgID', wgID);

    fetch("https://376009-18.web.fhgr.ch/php/aktualisiereWG.php",
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

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            // zeige die Nachricht an
            document.querySelector('#nachricht').innerHTML = data;

        })
}

function loescheWG() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('wgID', wgID);

    fetch("https://376009-18.web.fhgr.ch/php/loescheWG.php",
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

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            console.log(data);
            
            document.querySelector('#nachricht').innerHTML = data;

            // button aktualisieren
            document.querySelector('#button-neue').classList.remove("hidden");
            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");

            // Formularfelder leeren
            document.querySelector('#titel').value = "";
            document.querySelector('#adresse').value = "";
            document.querySelector('#beschreibung').value = "";
            document.querySelector('#stadt').value = "";
            document.querySelector('#bild').value = "";
            document.querySelector('#status-frei').checked = false;
            document.querySelector('#status-besetzt').checked = false;

            document.querySelector('#bild-vorschau').src = "";

            document.querySelector('.hashtag').style = "Color: black;";

            // Variablen leeren
            hashtags = [];
            wgID = "";



        })
};

// hashtags
// hashtags
// hashtags
// hashtags

function holeAlleHashtags() {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    fetch("https://376009-18.web.fhgr.ch/php/holeAlleHashtags.php",
        {
            body: "",
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

            data.forEach(hashtag => {

                // schreibe Hashtags ins HTML
                let dieserHashtag = document.createElement("div");

                dieserHashtag.innerHTML = " <p onclick='addHashtag(" + hashtag.ID + ")' id='" + hashtag.ID + "' class='hashtag'> #" + hashtag.hashtag + "</p> ";

                dieserHashtag.style = 'margin-right: 10px; cursor: pointer;';
                document.getElementById("hashtags").appendChild(dieserHashtag);

            });

        })
}

function addHashtag(id) {

    // Pr??fe, ob hashtag bereits im Array ist 
    if (hashtags.indexOf(id) == -1) {

        document.getElementById(id).style = "Color: blue;"

        hashtags.push(id);

    } else {

        document.getElementById(id).style = "Color: black;"

        hashtags.splice(hashtags.indexOf(id), 1);

    }

    console.log(hashtags);

}

function holeHashtagsVonWG(id) {

    // get authentication variables from localstorage
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('wgID', id);

    fetch("https://376009-18.web.fhgr.ch/php/holeHashtagsVonWG.php",
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

            if (data) {

                data.forEach(hashtag => {

                    // f??rbe die hashtags ein
                    document.getElementById(hashtag.ID).style = "color: Blue;";

                    // pushe die hashtags in die globale variable
                    hashtags.push(parseInt(hashtag.ID));

                });

            }

        })

}

// logout
// logout
// logout

function logout(){

    localStorage.clear();
    window.location = "/login.html";

}