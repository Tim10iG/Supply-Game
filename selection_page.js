var role = parseInt(document.getElementById("role_id").innerHTML);
var station = parseInt(document.getElementById("station_id").innerHTML);

function supp() {
    $(".page1").hide();
    $("#two").hide();
    //window.alert("This works");
    $(".page_sup").show();
    $(".change_role").show();
    $("#role_id").html(1);
}

function qr_code() {
    $("#instructions").html("Scan the QR-Code on the workorder");
    $(".page_sup").hide();
    $("#reader").show();
    $(".page_download").hide();
    $(".change_role").show();
    $("#station_id").html(1);
}

function new_role() {
    $(".page1").show();
    $("#two").show();
    $(".hide").show();
    $(".page_sup").hide();
    $(".change_role").hide();
    $(".page_download").hide();
    $("#reader").hide();
    $("#role_id").html(0);
    $("#station_id").html(0);
}


function download_manual(truck_code) {
    // URL of the file you want to download
    var fileUrl = "";
    //window.alert(`Yoyo = ${truck_code}`);

    let relevant_truck_code = truck_code.substr(2, 5);

    //window.alert(`Yoyo2 = ${relevant_truck_code}`)

    switch(relevant_truck_code[0]) {
        case "F":
            switch(relevant_truck_code[2]) {
                case "R":
                    fileUrl = "https://drive.google.com/uc?export=download&id=10SAuu2GckkeJBGFc--h0le6nP0yX-8WT";
                    break;
                default:
                    fileUrl = "https://drive.google.com/uc?export=download&id=1N8GOiznj8cMmaSjCZrAxavC35rjphtQ-";
            }
            break;
        case "O":
            switch(relevant_truck_code[2]){
                case "D":
                    fileUrl = "https://drive.google.com/uc?export=download&id=1FVpzTtC3X4c9PxLk01oSGrv-k5DVVgPG";
                    break;
                default:
                    fileUrl = "https://drive.google.com/uc?export=download&id=14n_pWDHzoWTvn96FkwaLMJwtTHuHsDRE";
            }
            break;
        case "S":
            switch(relevant_truck_code[2]){
                case "L":
                    switch(relevant_truck_code[3]){
                        case "F":
                            fileUrl = "https://drive.google.com/uc?export=download&id=10ESiYuHovtfuGtgHfrIlFcOcDhmWQvYO";
                            break;
                        case "N":
                            fileUrl = "https://drive.google.com/uc?export=download&id=1SuGOBU8e-LCSeb3EF1wSMYiHnpI1N7Wo";
                            break;
                    }
                    break;
                case "S":
                    switch(relevant_truck_code[3]){
                        case "F":
                            window.alert("Download should have been executed 1");
                            fileUrl = "https://drive.google.com/uc?export=download&id=1px13P1cITtjTb6nO_F72cidNY3NmqLNe";
                            window.alert("Download should have been executed 2");
                            break;
                        case "N":
                            fileUrl = "https://drive.google.com/uc?export=download&id=1sKdzqQMrIikbUnFwM9CpKwL9iG8P5E7g";
                            break;
                    }
                    break;
            }
            break;
        case "Y":
            switch(relevant_truck_code[2]){
                case "L":
                    switch(relevant_truck_code[3]){
                        case "F":
                            fileUrl = "https://drive.google.com/uc?export=download&id=143GZPr0FT5xk6RSTtkfx6fLTGPA5yhI2";
                            break;
                        case "N":
                            fileUrl = "https://drive.google.com/uc?export=download&id=1pP1w4O70X6jqaaZAsZ0vhRQTjBfTJZ_L";
                            break;
                    }
                    break;
                case "S":
                    switch(relevant_truck_code[3]){
                        case "F":
                            fileUrl = "https://drive.google.com/uc?export=download&id=1KBCX42qpBXOYrjLwViO9gBi31PqrIx6T";
                            break;
                        case "N":
                            fileUrl = "https://drive.google.com/uc?export=download&id=1ah5N1lR7BBdl4XiKMsLyRGfyY5QZKiF1";
                            break;
                    }
                    break;
            }
            break;
        
    }

    /*switch(relevant_truck_code) {
        case "L-S2SF4-ACT-BFF-4":
            fileUrl = "https://drive.google.com/file/d/10SAuu2GckkeJBGFc--h0le6nP0yX-8WT/view?usp=drive_link";
            break;
    }*/

    //const fileUrl = "https://drive.google.com/file/d/10SAuu2GckkeJBGFc--h0le6nP0yX-8WT/view?usp=drive_link";

    window.location.href = fileUrl;

    // Use the fetch API to make a GET request
    //window.alert("Download should have been executed 3" + "This is the filreUrl: " + fileUrl + " Test 2");
    /*fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create an <a> element to trigger the download
            const a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = `${relevant_truck_code}_manual.pdf`; // You can specify the filename here
            a.style.display = "none";
            document.body.appendChild(a);
            a.click(); // Trigger the download
            document.body.removeChild(a); // Cleanup
        })
        .catch(error => {
            console.error("Error downloading the file:", error);
        });
    window.alert("Download should have been executed 4");*/
}

function new_download() {
    // Replace this with your generated direct download link
    window.alert("clicked")
    var downloadLink = "https://drive.google.com/uc?export=download&id=1ah5N1lR7BBdl4XiKMsLyRGfyY5QZKiF1";
    window.location.href = downloadLink;
  };