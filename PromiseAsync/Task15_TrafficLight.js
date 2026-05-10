
function trafficLightRed() {
    return new Promise((resolve) => {
  
    setTimeout(() => {
        resolve("Red");
    }, 3000)

    })
}


function trafficLightYellow() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Yellow");
        }, 1000);
    })
}


function trafficLightGreen() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Green"), 2000);
    })

    trafficLight();
}


function trafficLight() {
trafficLightRed()
.then((value) =>{
    console.log(value);
    return trafficLightYellow();
})

.then((value) => {
    console.log(value);
    return trafficLightGreen();
})

.then((value) => {
    console.log(value);
    return  trafficLight();
})
}

trafficLight();

