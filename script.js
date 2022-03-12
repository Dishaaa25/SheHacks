
const Questions = [{
    id: 0,
    q: "Do you think about your own death or about dying?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Have you ever thought of harming yourself or trying to take your own life?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]
    

},
{
    id: 2,
    q: "Do you think or feel this way presently?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]
    

},
{
    id: 3,
    q: "Do you think you might act on these thoughts of self-harm or suicide in the future?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]
},
{
    id: 4,
    q: "Do your thoughts command you to act upon them?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]
},
{
    id: 5,
    q: "Do you have those methods available to you to take your life, such as over the counter pills, prescription pills, knives or proximity to a balcony, bridge or subway?",
    a: [{ text: "Very often", isCorrect: false },
        { text: "Sometimes", isCorrect: false },
        { text: "Rarely", isCorrect: true },
        { text: "Never", isCorrect: false }
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
/*op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;*/

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "white";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "white";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "white";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "white";
    selected = op4.value;

})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 6) {
    id++;
    iterate(id);
    console.log(id);
    
}
if (id==6){
    alert("You may need professional help at this phase. Please proceed to the therapy page....");
}


})


