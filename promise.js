let promise = new Promise((resolve, reject) => {
    let n = 1 + 1;

    // Check the promise if fulfill/reject
    if (n == 2) {
        resolve("fulfilled.");
    }
    else {
        reject("Rejected.")
    }
});

promise.then((msg) => {     // Do this when it success.
    console.log("Success Callback Function: " + msg);
}).catch((msg) => {         // Do this when it fail.
    console.log("Failure Callback Function: " + msg);
});
