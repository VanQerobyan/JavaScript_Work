let promise = new Promise((resolve, reject) => {
    reject("Server error");
})


promise.catch((value) => {
    console.log(value);
});


