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

    let cont = $('.elemts_cont');
    data.collection.items.forEach(element => {
        let elem = "<div class='home_elem'>";
        elem += "<div class='elem_desc'>" + element.data[0].description + "</div>";
        elem += "<div class='elem_center'>Center: <strong>" + element.data[0].center + "<strong></div>";
        elem += "<div class='elem_photo'><img src='" + element.links[0].href + "' /></div>";
        elem += "</div>";
        cont.append(elem);
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