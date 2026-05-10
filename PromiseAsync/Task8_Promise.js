let promise = new Promise((resolve) => {

    resolve("Date loaded");
});


promise.then((value) => {
    console.log(value);
})

