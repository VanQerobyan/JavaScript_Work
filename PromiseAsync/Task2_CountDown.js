function countDown() {
    setTimeout(() => {
        for (let i = 5; i >= 0; --i) {
            console.log(i);
        }
        console.log("Go");
    },1000)
    
}

countDown();
