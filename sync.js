let sync1 = function() {

    // Callback
    setTimeout(() => {
        console.log("First statement.");

        alert("ATTENTION!");

        console.log("Second statement.");

    }, 3000)  // 3 sec.
};

let sync2 = function() {
    console.log("Third statement.");
};

// We can not get the third console log statement until the first function has completed.
sync1();
sync2();