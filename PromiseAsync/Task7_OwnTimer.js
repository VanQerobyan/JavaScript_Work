let date = new Date();

function delay(message, time) {
   
    let res = date.getSeconds() + (time / 1000);
    while(true) {
        if (new Date().getSeconds() >= res) {
            console.log(message);
            break;
        }
    }
}
delay("Hello", 3000);
