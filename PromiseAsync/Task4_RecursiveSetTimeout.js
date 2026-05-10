
let i = 0;

function recSetTimeout() {
    setTimeout(() => {
        console.log(i);
        i++;
        recSetTimeout();
    },1000)
}
recSetTimeout();