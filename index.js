var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "How many sizes of headers are available in html by default?",
    "options": [
    {
    "a": "5",
    "b": "6",
    "c": "4",
    "d": "3"
    }
    ],
    "answer": "6",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "How to create an ordered list in html?",
    "options": [
    {
    "a": "&lt;ul&gt; ",
    "b": "&lt;ol&gt;",
    "c": "&lt;href&gt;",
    "d": "&lt;b&gt;"
    }
    ],
    "answer": "&lt;ol&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which html tag is used to declare internal CSS ?",
    "options": [
    {
    "a": "&lt;style&gt;",
    "b": "&lt;link&gt;",
    "c": "&lt;script&gt;",
    "d":  "none of the above"
    }
    ],
    "answer": "&lt;style;&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following keywords is used to defined a variable in Javasript?",
    "options": [
    {
    "a": "var",
    "b": "let",
    "c":"both A and B",
    "d":"None of the above"
    }
    ],
    "answer": "var",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "The correct sequence of HTML tags for starting a webpage is",
    "options": [
    {
    "a": "Head,Title,HTML,Body",
    "b": "HTML,Body,Title,Head",
    "c": "Body,Title,Head,HTML",
    "d": "HTML,Head,Title,Body"
    }
    ],
    "answer": "HTML,Head,Title,Body",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    "d":"None of the above."
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following element is responsible for making the text bold in HTML?",
    "options": [
    {
    "a": "&lt;pre&gt;",
    "b": "&lt;a&gt;",
    "c": "&lt;b&gt;",
    "d":"&lt;br&gt;"
    }
    ],
    "answer": "&lt;b&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following tag is used to define options in a drop-down selection list?",
    "options": [
    {
    "a": "&lt;select&gt;",
    "b": "&lt;list&gt;",
    "c": "&lt;option&gt;",
    "d": "&lt;dropdown&gt;"
    }
    ],
    "answer": "&lt;option&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of the followinf HTML tag is used to display text with scrolling effect?",
    "options": [
    {
    "a": "&lt;marquee&gt;",
    "b": "&lt;scroll&gt;",
    "c": "&lt;div&gt;",
    "d": "None of the above"
    }
    ],
    "answer": "&lt;marquee&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 11,
    "question": "How does a WHILE loop start?",
    "options": [
    {
    "a": "while i = 1 to 10",
    "b": "while (i &lt;= 10; i++)",
    "c": "while (i &lt;= 10)"
    }
    ],
    "answer": "while (i &lt;= 10)",
    "score": 0,
    "status": ""
    },
    {
    "id": 12,
    "question": "which of the following is used to read HTML page and render it?",
    "options": [
    {
    "a": "Web server",
    "b": "Web network",
    "c": "Web browser",
    "d": "Web matrix"
    }
    ],
    "answer": "Web browser",
    "score": 0,
    "status": ""
    },
    {
    "id": 13,
    "question": "How can you add a comment in a JavaScript?",
    "options": [
    {
    "a": "//This is a comment",
    "b": "&sbquo;This is a comment",
    "c": "&lt;!--This is a comment--&gt;"
    }
    ],
    "answer": "//This is a comment",
    "score": 0,
    "status": ""
    },
    {
    "id": 14,
    "question": "What does vlink mean?",
    "options": [
    {
    "a":"visible link",
    "b":"visited link",
    "c":"active link",
    "d":"None of the above"
    }
    ],
    "answer": "visited link",
    "score": 0,
    "status": ""
    },
    {"id": 15,
    "question": "Is JavaScript case-sensitive?",
    "options": [
    {
    "a": "No",
    "b": "Yes"
    }
    ],
    "answer": "Yes",
    "score": 0,
    "status": ""
    }
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });