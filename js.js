
// select items 
let nextBtn = document.querySelector(".nextBtn");
let stepNums = document.querySelector(".stepNums");
let stepNumsBullites = document.querySelectorAll(".stepNums li");
let stepNumsBullitesArray = Array.from(stepNumsBullites);
let goBack = document.querySelector(".goBack");
let confirmBtn = document.querySelector(".confrim");
let finalstep = document.querySelector(".finalstep");
let steps = document.querySelector(".steps");
let stepsDivs = document.querySelectorAll(".steps > div");
let stepsDivsArray = Array.from(stepsDivs);
let btns = document.querySelector(".btns");

let currentIndex = 1;
let stepsIndex = 1;

confirmBtn.addEventListener("click", () => {
    goBack.style.display = "none";
    stepsDivsArray.forEach((d) => {
        d.classList.remove("Active");
    });
    finalstep.style.display = "block";
    btns.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    // loop throught the bullites and remove all active classes
    stepNumsBullitesArray.forEach((b) => {
        b.classList.remove("active");
    });
    // increase the index to move to the next bullet
    currentIndex++;
    stepNums.children[currentIndex - 1].classList.add("active");
    // showing go back button 
    goBack.style.display = "block";

    if (currentIndex == 4) {
        nextBtn.style.display = "none";
        confirmBtn.style.display = "block";
    };

    // show the next step
    stepsDivsArray.forEach((d) => {
        d.classList.remove("Active");
    });
    stepsIndex++;
    steps.children[stepsIndex - 1].classList.add("Active");
});

goBack.addEventListener("click", () => {
    // loop throught the bullites and remove all active classes
    stepNumsBullitesArray.forEach((b) => {
        b.classList.remove("active");
    });
    // increase the index to move to the next bullet
    currentIndex--;
    stepNums.children[currentIndex - 1].classList.add("active");
    if (currentIndex == 1) {
        goBack.style.display = "none";
    }
    console.log(currentIndex);
    // showing go back button 

    // show the prev step
    stepsDivsArray.forEach((d) => {
        d.classList.remove("Active");
    });
    stepsIndex--;
    steps.children[stepsIndex - 1].classList.add("Active");

    if (currentIndex == 3) {
        nextBtn.style.display = "block";
        confirmBtn.style.display = "none";
    };
});

// add active class to the plans 
let plans = document.querySelectorAll(".plans .plan");
let plansArray = Array.from(plans);

plans.forEach((e) => {
    e.addEventListener("click", (e) => {
        plansArray.forEach((e) => {
            e.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

// yearly & monthly switch 
let keyContain = document.querySelector(".key-contain");
let key = document.querySelector(".key");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let yearlyPlan = document.querySelectorAll(".plan > .yearlyPlan");
let planPrice = document.querySelectorAll(".mo");
let mPrice = document.querySelectorAll(".m-price");
let mPrice1 = document.querySelectorAll(".m-price1");
let arcadeM = document.querySelector(".monthlyP");
let totalPlan = document.querySelector(".totalplan");
let aPrice = document.querySelector(".A-price");
let check = document.querySelector(".check");

keyContain.addEventListener("click", () => {
    key.classList.toggle("active");
    monthly.classList.toggle("active");
    yearly.classList.toggle("active");
    yearlyPlan.forEach((e) => {
        e.classList.toggle("active");
    });
    // icrease th price if the user chosed the year plan
    if (yearly.classList.contains("active")) {
        // switch monthly to yearly
        planPrice.forEach((e) => {
            e.textContent = "yr";
        });
        // change the frist plan price
        // mPrice.textContent = 10;
        mPrice.forEach((e) => {
            e.textContent = 10;
        });
        // change the other plan's prices
        mPrice1.forEach((e) => {
            e.textContent = 20;
        });
        arcadeM.textContent = "Yearly";
        totalPlan.textContent = "Year";
        aPrice.textContent = 90;
        check.textContent = 120;
    } else {
        // if the user didn't chose the yearly plan
        planPrice.forEach((e) => {
            e.textContent = "mo";
        });
        mPrice.forEach((e) => {
            e.textContent = 1;
        });
        // mPrice.textContent = 1;
        mPrice1.forEach((e) => {
            e.textContent = 2;
        });
        arcadeM.textContent = "Monthly";
        totalPlan.textContent = "Month";
        aPrice.textContent = 9;
        check.textContent = 12;
    };
});


// this following code has nothing to do with the project so ignore it

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 10;
//     if (a == 2) {
//         resolve(" you did it ");
//     } else {
//         reject(" wrong");
//     }
// });

// p.then((message) => {
//     console.log("this is is" + message);
// }).catch((message) => {
//     console.log("this is catch" + message);
// });

// const recordone = new Promise((resolve, reject) => {
//     resolve("video one Done");
// });

// const recordtwo = new Promise((resolve, reject) => {
//     if (resolve === "ss") {
//         resolve("video two Done");

//     } else {
//         reject("fuck no");

//     }
// });

// const recordthree = new Promise((resolve, reject) => {
//     resolve("video three Done");
// });
// Promise.all([
//     recordone,
//     recordtwo,
//     recordthree
// ]).then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log("that is it " + message);
// });