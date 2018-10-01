const cardsDetailId = [
    "card1Details",
    "card2Details",
    "card3Details",
    "card4Details"
];

let y = '';
let currCardId = '', prevCardId = '';
let currSpeakerId = '', prevSpeakerId = '';
let countCard = 0;
let countSpeaker = 0;

function showMenuExt() {
    const x = document.getElementById('navMenuList');
    x.style.right = "0";
    x.style.transitionDuration = "1s";
    menuToggle = true;
}

function hideMenuExt() {
    const x = document.getElementById('navMenuList');
    x.style.right = "-2500px";
    x.style.transitionDuration = "1s";
}

function registrationClose() {
    alert("Registration has been closed!");
}

function showCardDetails(p) {
    var y = document.getElementById("");
    currCardId = y;
    isOdd = countCard % 2

    if (currCardId === prevCardId) {
        countCard++;
        y.style.display = "none";
    }
    if (currCardId === prevCardId && isOdd === 1 || currCardId !== prevCardId) {
        for (const key in cardsDetailId) {
            let x = document.getElementById(cardsDetailId[key]);
            if (x.style.display === "block") {
                x.style.display = "none";
            }
        }
        y.style.display = "block";
        y.style.height = "200px";
        prevCardId = currCardId;
    }
}

function showSpeakerDetails(p) {
    y = document.getElementById(p.id);
    currSpeakerId = y;
    isOdd = countSpeaker % 2

    if (currSpeakerId === prevSpeakerId) {
        countSpeaker++;
        y.style.display = "none";
    }
    if (currSpeakerId === prevSpeakerId && isOdd === 1 || currSpeakerId !== prevSpeakerId) {
        y.style.display = "block";
        prevSpeakerId = currSpeakerId;
    }
}


//form work here
function setData(item) {
    localStorage.setItem('responses', JSON.stringify(item));
}

function getData() {
    const retrieve = JSON.parse(localStorage.getItem("responses"));
    return retrieve
}

let responses = [];
console.log("pre response " + responses.length)

function onFormSubmit() {
    console.log('Hello')
    var item = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        message: document.getElementById("formMessage").value
    }

    responses.push(item)

    // for (let i = 0; i < responses.length; i++) {
    //     setData(responses[i])
    // }
    console.log("post response " + responses.length)

    setData(responses)

    document.getElementById("contactForm").style.display.none;
    document.getElementById("formHeading").innerHTML = "Thank you for contacting us!"

    // setTimeout(() => {
    //     ""
    // }, "100000");
}