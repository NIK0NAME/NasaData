// API KEY https://api.nasa.gov/planetary/apod?api_key=J6nvJcWjfaU1S4gCFd9dzvmVyOmgBSfQEgecT494

/*
NASA Image and Video Library
url = https://images-api.nasa.gov
*/

let apiKey = "api_key=J6nvJcWjfaU1S4gCFd9dzvmVyOmgBSfQEgecT494";

let dataUrl = "https://images-api.nasa.gov/search?q=moon";

let responseData;

$( () => {
    console.log("Todo ready");
    getSonsgsData(dataUrl);
});

async function viewSongsData(data) {
    console.log(data.collection.items);

    data.collection.items.forEach(element => {
        console.log(element);
    });
}

async function getSonsgsData(url) {
    $.ajax({
        url: url,
        crossDomain: true,
         dataType: 'json',
        success: viewSongsData,
        async: true/*,
        beforeSend: setHeader,
        afterSend: setHeader*/
    });
}

function setHeader(xhr) {
    xhr.setRequestHeader('Access-Control-Allow-Origin', "http://localhost/");
}