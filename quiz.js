const questions = [
    {
        "question": "Which of the following is the Markup language",
        "a": "JavaScript",
        "b": "HTML",
        "c": "Python",
        "d": "C++",
        "correct": "b"
    },
    {
        "question": "Which of the following is not an HTML tag?",
        "a": "p",
        "b": "style",
        "c": "div",
        "d": "doc",
        "correct": "d"
    },
    {
        "question": "HTML stand for",
        "a": "Hypermark Language",
        "b": " Hypermix language",
        "c": "Hypertext Markup Language",
        "d": "Hypertension Language",
        "correct": "c"
    },
    {
        "question": "The correct sequence of HTML tags for starting a webpage is ",
        "a": "Head, Title, HTML, body",
        "b": "HTML, Body, Title, Head",
        "c": "HTML, Footer, Title, Body",
        "d": "HTML, Head, Title, Body",
        "correct": "d"
    },
    {
        "question": "HTML tags are enclosed in",
        "a": "# and #",
        "b": "{ and }",
        "c": "! and ?",
        "d": "< and >",
        "correct": "d"
    },
    {
        "question": "Which of the following attribute is used to provide a unique name to an element?",
        "a": "class",
        "b": "Id",
        "c": "type",
        "d": "None of these",
        "correct": "b"
    },
    {
        "question": "What are the types of unordered or bulleted list in HTML?",
        "a": "disc, square, triangle",
        "b": "polygon, triangle, circle",
        "c": "disc, circle, square",
        "d": "None of these",
        "correct": "c"
    }
]
var point = 0;
var index = 0;
const a = document.getElementsByTagName("button");
const inp = document.getElementsByClassName("ansopt");
const loader = () => {
    document.getElementById("questionBox").innerHTML = questions[index].question;
    document.getElementsByClassName("common")[0].innerHTML = questions[index].a;
    document.getElementsByClassName("common")[1].innerHTML = questions[index].b;
    document.getElementsByClassName("common")[2].innerHTML = questions[index].c;
    document.getElementsByClassName("common")[3].innerHTML = questions[index].d;


};
const loaderr = () => {
    window.location.reload(true);
}
const getans = () => {
    var result;
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
            result = inp[i].value;
        }
    }
    return result;
}
const submitted = () => {
    const ans = getans();
   
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
            document.getElementsByTagName("button")[0].disabled = true;
            position = i;
            a[1].style.opacity = "1";
            a[1].disabled = false;
            if (ans === questions[index].correct) {
                point++;
                document.getElementsByClassName("common")[i].style.backgroundColor = "lightgreen";
            }
            else {
                document.getElementsByClassName("common")[i].style.backgroundColor = "lightcoral";
            }

        }
    }
    
    if (index >= questions.length - 1) {
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementsByClassName("score")[0].style.display = "block";
        document.getElementsByClassName("score")[0].firstElementChild.firstElementChild.firstElementChild.innerHTML = `Your Score is ${point} / ${questions.length} <br>
        <button class= "playagain" onclick="loaderr()" > Play Again </button>
        `;
    }

}
const next = () => {
    document.getElementsByTagName("button")[0].disabled = false;
    for (var i = 0; i < inp.length; i++) {
        inp[i].checked = false;
        document.getElementsByClassName("common")[i].style.backgroundColor = "";
    }
    index++;
    loader();
    document.getElementsByTagName("button")[1].disabled = true;
    document.getElementsByTagName("button")[1].style.opacity = "0.5";
    if (index >= questions.length - 1) {
        console.log(document.getElementsByTagName("button")[1].style.display = "none");

    }


}

