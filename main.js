// API KEY https://api.nasa.gov/planetary/apod?api_key=J6nvJcWjfaU1S4gCFd9dzvmVyOmgBSfQEgecT494

/*
NASA Image and Video Library
url = https://images-api.nasa.gov
*/

//Organizar por centros

let apiKey = "api_key=J6nvJcWjfaU1S4gCFd9dzvmVyOmgBSfQEgecT494";

let dataUrl = "https://images-api.nasa.gov/search?q=moon";

let responseData;

$( () => {
    console.log("Todo ready");
    $('.close_me').on('click', () => {
        $('#view_data').hide();
    });
    getSonsgsData(dataUrl);
});

async function viewSongsData(data) {
    console.log(data.collection.items);

    let cont = $('.elemts_cont');
    data.collection.items.forEach(element => {
        if('href' in element) {
            let elem = `<div class='home_elem' onclick='loadSingleData("` + element.href + `", "` + element.data[0].description + `")'>`;
            elem += "<div class='elem_desc'>" + element.data[0].description + "</div>";
            elem += "<div class='elem_center'>Center: <strong>" + element.data[0].center + "</strong></div>";
            elem += "<div class='elem_center'>Id: <strong>" + element.data[0].nasa_id + "</strong></div>";
            elem += "<div class='elem_photo'><img src='" + element.links[0].href + "' /></div>";
            elem += "</div>";
            setTimeout(() => {
                
            }, 500);
            cont.append(elem);
        }
        //console.log(element);
    });
}

async function loadSingleData(url, title) {
    $(".floating_heading").text("");
    $('#view_data').show();
    $.ajax({
        url: url,
        crossDomain: true,
         dataType: 'json',
        success: (data) => {
            console.log(data);
            $('.floating_items').text("");
            $(".floating_heading").text(title);
            
            data.forEach(elemnt => {
                if(elemnt.includes('metadata.json')) {
                    $('.some_metadata').html();
                }else if(elemnt.includes('.mp4') || elemnt.includes('.mov') ||elemnt.includes('.srt')) {
                    let videeo = `
                    <video controls>
                        <source src="`+elemnt+`" type="video/mp4">
                    </video>`;
                    $('.floating_items').append(videeo);
                }else {
                    let elem = "<img src='" + elemnt +"' />";
                    $('.floating_items').append(elem);
                }
                
            });
        },
        async: true
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