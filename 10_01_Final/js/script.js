console.log("HAllo Welt");

holeUser();

holeWGs()

function holeUser() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://376009-18.web.fhgr.ch/php/holeUser.php",
        {
            body: formData,
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
            // console.log(data);

            // console.log(data[0].name);

            document.querySelector("#username").innerHTML = data[0].name;

        })
}

function holeWGs(){


    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://376009-18.web.fhgr.ch/php/holeWGs.php",
        {
            body: formData,
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
            console.log(data);

            WGsAnzeigen(data);

            // console.log(data[0].name);


        })

}

function WGsAnzeigen(data) {

    data.forEach(wg => {

        
        if (parseInt(wg.status)){

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
            '📍 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query='+ wg.adresse + '">' + wg.adresse + '</a> <br>' +
            '👉 <a target="_blank" href="mailto:'+ wg.email + '">' + wg.email + '</a>' +
            '<p> <b> <span id="WG-' + wg.ID + '">  </span> <b> </p>'
            + '</div>';

        document.getElementById("liste-wg").appendChild(wgContainer);

        holeHashtagsVonWG(wg.ID);

    });

}

function holeHashtagsVonWG(id) {

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

            console.log(data);

            if (data.length > 0) {

                data.forEach(element => {

                    // füge die Hashtags ins Dokument ein 
                    // (hook: ID, welche in der Funktion WGsAnzeigen dynamisch vergeben wird)
                    document.getElementById("WG-" + id).innerHTML += '#' + element.hashtag + ' ';

                });

            }

        })

}

function logout(){

    localStorage.clear();
    window.location = "/login.html";

}