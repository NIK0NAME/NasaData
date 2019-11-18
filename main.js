// API KEY https://api.nasa.gov/planetary/apod?api_key=J6nvJcWjfaU1S4gCFd9dzvmVyOmgBSfQEgecT494

/*
NASA Image and Video Library
url = https://images-api.nasa.gov
*/

let dataUrl = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

let responseData;

$( () => {
    console.log("Todo ready");
    getSonsgsData();
});

async function viewSongsData(data) {
    console.log(data);
}

async function getSonsgsData() {
    $.ajax({
        url: dataUrl,
        crossDomain: true,
         dataType: 'json',
        success: viewSongsData,
        async: true,
        beforeSend: setHeader,
        afterSend: setHeader
    });
}

function setHeader(xhr) {
    xhr.setRequestHeader('Access-Control-Allow-Origin', "http://localhost/");
}