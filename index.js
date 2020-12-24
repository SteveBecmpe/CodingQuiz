//Variables------------------------------------------Variables
let AS = "default";//default, correct and wrong are working states of Answer State variable
let timescore = 5;
let BeginningTime = 75;
let timePen = 10;// time penalty 
let score = 0; //default value for score. used to keep track of correct answers.
let totAnsrD = 0;//keeps track of questions answered.
let timeLeftEL = document.querySelector("#time-left");
let resetButtEL = document.querySelector("#topmidreset");
let quizAreaEL = document.querySelector("#quiz-area-content");
let HighScoreEL = document.querySelector("#High-Score");
let curQuizPosition = 0;//keeps track of the current position of the array
let button = document.createElement("button");
let answerRwEL = document.querySelector("#quiz-rw-content");
let firsttime = 0;
let AllTimeHighScores = [];
let timeInterval;
let timeLeft;

let QuizContentObjArray = [
    {
        "name": "S0 Start content",//name Scontent = start content. will have different load functions base on this name
        "headerC": "Coding Quiz Challenge",//header content, this is the bold content on each view
        "bodyC": "Try to answer the following code related questions within the time limit.",//body content, this is the none bold content..
        "butt1": "Start Quiz",
        "butt1Val": "Start Quiz",
        "answer": "S0"
    },
    {//Q1----------------------------------------------------
        "name": "Question 1",
        "answer": "q1a3",
        "headerC": "Commonly used data types DO NOT \n include:",
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
        "answer": "q4a3",
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
        "name": "F6 all done",
        "fscore": "0",
        "headerC": "All Done!",
        "bodyC": "Your final score is ",
        "bodyC1": ".",
        "formC": "Enter initials:",
        "formCinitials": "",
        "buttSubmit": "Submit",//was Submit
        "buttVal": "F6",
        "answer": "AD"//
    },
    {//HighScores----------------------------------------------------
        "name": "F7 HighScores",
        "headerC": "HighScores",
        "butt1": "Go Back",
        "butt2": "Clear Highscores",
        "answer": "HS",
        //we will push "1": ".initials and score when submit on all done page is clicked."
    },
]//END of QuizContentObjArray--------------------------------------------

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedAllTimeHighScores = JSON.parse(localStorage.getItem("AllTimeHighScores"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedAllTimeHighScores !== null) {
        AllTimeHighScores = storedAllTimeHighScores;
    }
    // Render Scores to the DOM
    renderHighScores();//-------------------------------------------------------------------------------------
}

function storeHighScores() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("AllTimeHighScores", JSON.stringify(AllTimeHighScores));
}

function renderTime() {
    timeLeftEL.innerHTML = timeLeft;
}

//create and append Content
function CAC(val, val2) {//val is the index in the quizcontentobject array to be rendered.
    console.log("inside CAC");
    console.log(QuizContentObjArray[val].name.substring(0, 1));

    quizAreaEL.innerHTML = "";

    if ((QuizContentObjArray[val].name.substring(0, 1)) == "S") {
        // render Start quiz section
        console.log("S render loop ---------------------------------------------------");

        let tempStHeader = document.createElement("h2");
        tempStHeader.textContent = QuizContentObjArray[val].headerC;
        tempStHeader.setAttribute("class", "center-text");
        quizAreaEL.appendChild(tempStHeader);
        let tempBodyContent = document.createElement("h4");
        tempBodyContent.textContent = QuizContentObjArray[val].bodyC;
        tempBodyContent.setAttribute("class", "center-test");
        quizAreaEL.appendChild(tempBodyContent);
        let button = document.createElement("button");
        button.setAttribute("value", QuizContentObjArray[val].answer.substring(0, 2));
        button.setAttribute("class", "button3");
        button.textContent = QuizContentObjArray[val].butt1;
        quizAreaEL.appendChild(button);

    } else if ((QuizContentObjArray[val].name.substring(0, 1)) == "Q") { // if it is a question render this way
        console.log("Q render loop --------------------------------------------------");

        let tempQnum = document.createElement("h3");
        tempQnum.textContent = QuizContentObjArray[val].name;
        quizAreaEL.appendChild(tempQnum);
        let tempheader = document.createElement("h4"); //create header for content to be loaded from quizcontentobjarray
        tempheader.textContent = QuizContentObjArray[val].headerC;
        quizAreaEL.appendChild(tempheader);

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

        let LastDynamicQuizElement = document.querySelector("#quiz-area-content");//was#LastDyQEL"
        let temp = document.createElement("hr");//create line
        LastDynamicQuizElement.appendChild(temp);

        temp = document.createElement("div");//create line
        temp.setAttribute("id", "RWLine");
        LastDynamicQuizElement.append(temp);

        //LastDynamicQuizElement.append(temp);
        let RWLine = document.querySelector("#RWLine");
        temp = document.createElement("a");
        temp.setAttribute("class", "slant");
        RWLine.appendChild(temp);

        //append right wrong
        let temptext = "default";//-------------turned into function below
        console.log("val " + (val - 1) + "\nval2 " + val2);
        console.log("QuizA [val-1] " + QuizContentObjArray[val - 1].answer + "\nval2 " + val2);
        if (QuizContentObjArray[val - 1].answer === val2 && val2 === "S0") {
            temptext = "";
        } else if (QuizContentObjArray[val - 1].answer === val2) {
            temptext = "Correct";
            score++;
            totAnsrD++;
            setTimeout(ClearAnswerContent, 1000);//SET TIME OUT- for answer stuff
        } else if (QuizContentObjArray[val - 1].answer != val2) {
            clearInterval(timer);
            timeLeft = timeLeft - timePen;
            StartTimer();
            console.log("RENDER TIME AFTER WRONG");
            temptext = "Wrong";
            totAnsrD++;
            setTimeout(ClearAnswerContent, 1000);//SET TIME OUT- for answer stuff

        }
        temp.textContent = temptext;
    } else if ((QuizContentObjArray[val].name.substring(0, 2)) == "F6") { // if all done
        console.log("Inside F else If in CAC --------------------------------------------------");

        let tempheader = document.createElement("h2"); //create header for content to be loaded from quizcontentobjarray
        tempheader.textContent = QuizContentObjArray[val].headerC;
        quizAreaEL.appendChild(tempheader);

        let tempBodyContent = document.createElement("h4");
        tempBodyContent.textContent = QuizContentObjArray[val].bodyC + timescore;
        quizAreaEL.appendChild(tempBodyContent);

        tempBodyContent = document.createElement("h5");
        tempBodyContent.textContent = "Correct Answers / Total Questions: " + score + "/" + totAnsrD;
        quizAreaEL.appendChild(tempBodyContent);

        tempBodyContent = document.createElement("form");
        tempBodyContent.setAttribute("id", "UserInt");
        tempBodyContent.setAttribute("method", "POST");
        quizAreaEL.appendChild(tempBodyContent);

        let UserForm = document.querySelector("#UserInt");

        tempBodyContent = document.createElement("label");
        tempBodyContent.setAttribute("for", "UserInt");
        tempBodyContent.textContent = QuizContentObjArray[val].formC;
        UserForm.appendChild(tempBodyContent);

        tempBodyContent = document.createElement("input");
        tempBodyContent.setAttribute("type", "text");
        tempBodyContent.setAttribute("placeholder", "initials");
        tempBodyContent.setAttribute("name", "UserInt-Text");
        tempBodyContent.setAttribute("id", "User-Initials");
        UserForm.appendChild(tempBodyContent);

        let button1 = document.createElement("button");
        button1.setAttribute("value", QuizContentObjArray[val].buttVal);//was val+1
        button1.setAttribute("class", "button4");
        button1.textContent = QuizContentObjArray[val].buttSubmit;//was "answer"+ (val+1)
        UserForm.append(button1);//was append child

    } else if ((QuizContentObjArray[val].name.substring(0, 2)) == "F7") {
        let tempheader = document.createElement("h2"); //create header for content to be loaded from quizcontentobjarray
        tempheader.textContent = QuizContentObjArray[val].headerC;
        quizAreaEL.appendChild(tempheader);
        //quizAreaEL.innerHTML = "";/// clears quiz area content
        let HighScoreCount = AllTimeHighScores.length;
        let HStempST = document.querySelector("#quiz-area-content");
        // Render a new li for each todo
        for (var i = 0; i < HighScoreCount; i++) {
            var TempHighScore = AllTimeHighScores[i];

            var li = document.createElement("li");
            li.textContent = TempHighScore;
            li.setAttribute("data-index", i);

            var button = document.createElement("button");
            button.textContent = "Remove";

            li.appendChild(button);
            HStempST.appendChild(li);
        }
    }
    console.log("End CAC");
}

HighScoreEL.addEventListener("click", function (event) {//-----------------------------------------------------
    let val = event.target;
    CAC(7, val);
})


function ClearAnswerContent() {
    let LastDynamicQuizElement = document.querySelector("#RWLine");//was#LastDyQEL"
    LastDynamicQuizElement.innerHTML = "";
}

//clears quiz area content
function ClearQuizContent() {
    quizAreaEL.innerHTML = "";
    clearInterval(timer);
    timeLeft = BeginningTime;
    renderTime();
    score = 0; //default value for score. used to keep track of correct answers.
    totAnsrD = 0;//keeps track of questions answered.
    CAC(0, "Start");
}

function Autoload() {
    if (firsttime === 0) {
        firsttime++;
        score = 0; //default value for score. used to keep track of correct answers.
        totAnsrD = 0;//keeps track of questions answered.
        CAC(0, "Start");
    }
}

timeLeft = BeginningTime;

function StartTimer() {
    //setTime(); pending

    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
        }
        timeLeft--;
        renderTime();
    }, 1000)
};

quizAreaEL.addEventListener("click", function (event) {
    event.preventDefault();
    let buttClickD = event.target;//get specific button that caused the click
    let temp = event.target.value;
    let done = false;
    console.log("Target " + buttClickD + " \n" + "Value " + temp);
    if (buttClickD.matches("button") === true) {
        if (event.target.value.substring(0, 2) == "S0") {//switch from start to q1
            StartTimer();
            CAC(1, temp);
        } else if (event.target.value.substring(0, 2) == "q1") {//switch from q1 to q2
            CAC(2, temp);
        } else if (event.target.value.substring(0, 2) == "q2") {//switch from q2 to q3
            CAC(3, temp);
        } else if (event.target.value.substring(0, 2) == "q3") {//switch from q3 to q4
            CAC(4, temp);
        } else if (event.target.value.substring(0, 2) == "q4") {//switch from q4 to q5
            CAC(5, temp);
        } else if (event.target.value.substring(0, 2) == "q5") {//switch from q5 to all done F6 form to enter name display score
            clearInterval(timer);
            timescore = timeLeft;
            CAC(6, temp);
        } else if (event.target.value.substring(0, 2) == "F6") {//switch from F6 all done to F7 high scores

            var UserIntForm = document.querySelector("#User-Initials");
            var UserIntText = UserIntForm.value.trim();
            // Return from function early if submitted Text is blank
            if (UserIntText === "") {
                return;
            }
            // Add new Text to todos array, clear the input
            AllTimeHighScores.push(UserIntText + " Time Score: " + timescore + " Question Score: " + score + " / " + totAnsrD + "  ");
            CAC(7, temp);
            //Render High Score.
        } else if (event.target.value.substring(0, 2) == "F7") {//Do nothing way for different click high scores
            //CAC(0);
            alert("submit was pressed.");
        } else if (event.target.value == "reset") {//switch from F6 to F7 high scores
            ClearQuizContent();
        } else if (event.target.value == "submit") {
        }
    }
});

resetButtEL.addEventListener("click", function (event) {
    let buttClickD = event.target;
    if (buttClickD.matches("button") === true) {
        console.log(buttClickD.value);
        ClearQuizContent();
    }
});

Autoload();