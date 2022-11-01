console.log("Hello Login");

function login(){

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log(email + password);




    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://376009-18.web.fhgr.ch/php/login.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        // console.log(data);
        document.querySelector('#nachricht').innerHTML = data;

        })
}