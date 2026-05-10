let file = "JavaScript.js";

function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Download file " + file);
        }, 1000);
    })
}


function resizeImage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resize ${file}'s image`);
        }, 2000);
    })
}


function uploadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Upload file: " + file);
        }, 3000);
    })
}


downloadFile().then((value) => {
    console.log(value);
    return resizeImage();
})

    .then((value) => {
        console.log(value);
        return uploadFile();
    })

    .then((value) => {
        console.log(value);
    })

