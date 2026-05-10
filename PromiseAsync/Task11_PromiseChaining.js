let obj = {user: "Hayk", age: 22};

 function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj.user);
        }, 1000)
    })
}

function getPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user + " has posts");
        }, 2000)
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(post + " comments");
        }, 1000)
    })
}


getUser().then((value) => {
        console.log(value);
        return getPosts(value);
    })

    .then((value) => {
        console.log(value);
        return getComments(value);
    })

    .then((value) => {
        console.log(value);
    })


