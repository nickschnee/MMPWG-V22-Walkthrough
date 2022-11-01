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