//Variables------------------------------------------Variables
let AS = "default";//default, correct and wrong are working states of Answer State variable
let score = 0; //default value for score. used to keep track of correct answers.
// let quizAreaEL = document.querySelector("#quizarea");
let quizAreaEL = document.querySelector("#quiz-area-content");
let testvarEL = document.querySelector("#topleft");
let tempStartEL = document.querySelector("#topmid");
let curQuizPosition = 0;//keeps track of the current position of the array
let button = document.createElement("button");




let QuizContentObjArray = [
    {
        "name": "Scontent",//name Scontent = start content. will have different load functions base on this name
        "headerC": "Coding Quiz Challenge",//header content, this is the bold content on each view
        "bodyC": "Try to answer the following code related questions within the time limit.",//body content, this is the none bold content..
        "butt1": "Start Quiz"
    },
    {//Q1----------------------------------------------------
        "name": "Question 1",
        "answer": "q1a3",
        "headerC": "Commonly used data types DO NOT include:",
        "bodyC": "",
        "butt1": "1. strings",
        "butt2": "2. booleans",
        "butt3": "3. alerts",
        "butt4": "4. numbers",
        "butt1Val": "q1a1",
        "butt2Val": "q1a2",
        "butt3Val": "q1a3",
        "butt4Val": "q1a4"
    },
    {//Q2----------------------------------------------------
        "name": "Question 2",
        "answer": "q2a3",
        "headerC": "The condition in an if/else statement is enclosed within_____.",
        "bodyC": "",
        "butt1": "1. quotes",
        "butt2": "2. curly brackets",
        "butt3": "3. parenthises",
        "butt4": "4. square brackets",
        "butt1Val": "q2a1",
        "butt2Val": "q2a2",
        "butt3Val": "q2a3",
        "butt4Val": "q2a4"
    },
    {//Q3----------------------------------------------------
        "name": "Question 3",
        "answer": "q3a4",
        "headerC": "Arrays in JavaScript can be used to store ______.",
        "bodyC": "",
        "butt1": "1. numbers and strings",
        "butt2": "2. other arrays",
        "butt3": "3. booleans",
        "butt4": "4. all of the above",
        "butt1Val": "q3a1",
        "butt2Val": "q3a2",
        "butt3Val": "q3a3",
        "butt4Val": "q3a4"
    },
    {//Q4----------------------------------------------------
        "name": "Question 4",
        "answer": "q4a4",
        "headerC": "String values must be enclosed within _____ when being assigned to variables.",
        "bodyC": "",
        "butt1": "1. commas",
        "butt2": "2. curly brackets",
        "butt3": "3. quotes",
        "butt4": "4. parentheses",
        "butt1Val": "q4a1",
        "butt2Val": "q4a2",
        "butt3Val": "q4a3",
        "butt4Val": "q4a4"
    },
    {//Q5----------------------------------------------------
        "name": "Question 5",
        "answer": "q5a4",
        "headerC": "A very useful tool used during development\nand debugging for printing content to the\ndebugger is:",
        "bodyC": "",
        "butt1": "1. JavaScript",
        "butt2": "2. terminal / bash",
        "butt3": "3. for loops",
        "butt4": "4. console.log",
        "butt1Val": "q5a1",
        "butt2Val": "q5a2",
        "butt3Val": "q5a3",
        "butt4Val": "q5a4"
    },
    {//ALL DONE----------------------------------------------------
        "name": "Fall done",
        "fscore": "0",
        "headerC": "All Done!",
        "bodyC": "Your final score is ",
        "bodyC1": ".",
        "formC": "Enter initials:",
        "formCinitials": "",
        "buttSubmit": "Submit"
    },
    {//HighScores----------------------------------------------------
        "name": "HighScores",
        "butt1": "Go Back",
        "butt2": "Clear Highscores"
        //we will push "1": ".initials and score when submit on all done page is clicked."
    },
]//END of QuizContentObjArray--------------------------------------------

function printQuizArrayContent() {
    //load render start content from 0 index of quiz content array
    //this will load the start button as well
    //calls the render next function with variables to render the first obj in quiz content obj array
    for (var i = 0; i < QuizContentObjArray.length; i++) {
        console.log(QuizContentObjArray[i]);
        console.log(QuizContentObjArray[i].name);
        button.addEventListener("click", function (event) {
            alert(event.target.value);
        });
    };
}

// //Load Quiz Area Content Function loades the header, body etc stored in the object array
// function LQAC(val){
//     console.log("inside Load Quiz Area Content Function");

//     let temphead = document.createElement("h3");
//     temphead.setAttribute("class", "quizheader");
//     temphead.textContent =  QuizContentObjArray[]
// }

//create and append buttons
function CAB(val) {
    console.log("inside CAB");

    if(val>0){
    let button1 = document.createElement("button");
    button1.setAttribute("value", QuizContentObjArray[val].butt1Val);//was val+1
    button1.setAttribute("class", "button3");
    button1.textContent = QuizContentObjArray[val].butt1;//was "answer"+ (val+1)
    quizAreaEL.appendChild(button1);

    let button2 = document.createElement("button");
    button2.setAttribute("value", QuizContentObjArray[val].butt2Val);//was val+1
    button2.setAttribute("class", "button3");
    button2.textContent = QuizContentObjArray[val].butt2;//was "answer"+ (val+1)
    quizAreaEL.appendChild(button2);

    let button3 = document.createElement("button");
    button3.setAttribute("value", QuizContentObjArray[val].butt3Val);//was val+1
    button3.setAttribute("class", "button3");
    button3.textContent = QuizContentObjArray[val].butt3;//was "answer"+ (val+1)
    quizAreaEL.appendChild(button3);

    let button4 = document.createElement("button");
    button4.setAttribute("value", QuizContentObjArray[val].butt4Val);//was val+1
    button4.setAttribute("class", "button3");
    button4.textContent = QuizContentObjArray[val].butt4;//was "answer"+ (val+1)
    quizAreaEL.appendChild(button4);
    }
    console.log("End CAB");
}

//function create test button(s)
function CTB(numObutts) {
    console.log("inside CTB, numbObutts: " + numObutts);
    for (let i = 0; i < numObutts; i++) {
        console.log("inside CTB for" + i);
        // LQAC(i);
        CAB(i);
    }
    // button.addEventListener("click", function (event) {
    //     alert(event.target.value);
    // });

}


//this function input is the target array objec to render.
function RQC(ArrIndex) {
    console.log("inside RQC");
    if ((ArrIndex > -1) && (ArrIndex < QuizContentObjArray.length)) {
        console.log("inside RQC and if");
        let numberofbuttons = prompt("how many buttons");//----------------------------prompt
        CTB(numberofbuttons);
        console.log("end of if");
    }
    console.log("end of RQC");
}


function loadquiz() {
    //load render start content from 0 index of quiz content array
    //this will load the start button as well
    //calls the render next function with variables to render the first obj in quiz content obj array
    printQuizArrayContent();

    RQC(curQuizPosition);
}

tempStartEL.addEventListener("click", function (event) {
    loadquiz();
});

// loadquiz();//auto start to the page at the first obj in quiz content array
//all further renders are to be triggered by buttons rendered 

//this function renders the next quiz content from the object array.
//this function will call additional functions
//add fcall tallyscore
//add fcall update time
//set variable answer state AS, which is a temp variable for displaying the previous answer choose correct/wrong
function RNQC(current, next) {// variables are temp guesses at input

}


//this function returns the qty of questions in the content array by checking and counting the first character of name.
function questionQty(tempObjArr) {
    let numOfQuestion = 0;
    // for ()


    //     return
}

quizAreaEL.addEventListener("click", function (event) {
    var buttClickD = event.target;
    if (buttClickD.matches("button") === true) {
        alert(event.target.value);
    }

});