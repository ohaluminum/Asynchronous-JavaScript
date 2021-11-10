let callback1 = function() {

    // setTimeout(callback, delayTime): A callback function to be executed after the timer expires.
    setTimeout(() => {
        console.log("First statement.");

        alert("ATTENTION!");

        console.log("Second statement.");

    }, 3000);   // Wait for 3 sec.
};

let callback2 = function() {
    console.log("Third statement.");
};

callback1();
callback2();