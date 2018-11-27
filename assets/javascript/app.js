// Trivia Game Exercise - Pseudocode:

// 1.	HTML:
    // a.	Heading – Total Trivia Game
    // b.	Body
        // i.	Container
        // ii.	Start button changes display to questions and starts the timer ticking down
        // iii.	Time Remaining: in seconds, starting w/120 down to 0
        // iv.	Questions with answer options display
            // 1.	Allow only 1 answer for each question
        // v.	All Done! Message displays when either:
            // 1.	Timer goes from 120 to 0
            // 2.	User clicks the Done button
        // vi.	When either the timer goes to 0 or the user clicks the Done button the following happens:
            // 1.	Calculations:
            // a.	Correct answers
            // b.	Incorrect answers
            // c.	Unanswered questions
// 2.	CSS:
    // a.	Background image
    // b.	Container with:
        // i.	Background color
        // ii.	Start button
        // iii.	Time Remaining display
        // iv.	Paragraph of questions and answer choices with radio buttons for selections of each answer – displays when Start button is clicked
        // v.	Done button
        // vi.	Display of calculation results
            // 1.	Correct answers
            // 2.	Incorrect answers
            // 3.	Unanswered questions
// 3.	Items/Javascript Logic:
    // a.   Store data:
    //  i.  Questions.    
    //  ii. Correct answers  
// a.	Timer
    // b.	Logic for determining if:
        // i.	Answer is correct
        // ii.	Answer is incorrect
        // iii.	Question is not answered
    // c.	Counter for:
        // i.	Correct answers
        // ii.	Incorrect answers
        // iii.	Unanswered questions
// 4.	Use cases/Javascript Logic:
    // a.	User clicks the Start button and the questions with answer options display
    // b.	Only allow 1 answer to be selected (use a radio button for this?)
    // c.	Looping through each question in the array until finished
    // d.	If, Else:
        // i.	Compare the answer selected by the user to the correct answer: 
            // 1.	If the answers match, add 1 to the counter for correct answers
            // 2.	If the answers do not match, add 1 to the counter for the incorrect answers
        // ii.	Determine if all questions were answered:
            //1.   If all questions were not answered, determine how nmany were not answered and add that number to the counter for unanswered questions
    // e.	When either the time remaining reaches 0, or the user clicks the Done button:
        // i.	Display the results of the calculations for:
            // 1.	Correct answers
            // 2.	Incorrect answers
            // 3.	Unanswered questions
        // ii.	Display text “All Done!”

        // Document Ready
        

        // Variables

        var card = $("#quiz-area");
        var countStartNumber = 30;
        
        var questions = [
            {
                question: "What was the first CD to sell a million copies?",
                answers: ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
                correctAnswer: "Joshua Tree"
                //add an image if you want to
            },
            {
                question: "What was the dog's name in The Thin Man movie series?",
                answers: ["Rascal", "Asta", "Spot", "Astor"],
                correctAnswer: "Asta"
            },
            {
                question: "Who sang the title song Grease in the 1978 musical motion picture?",
                answers: ["John Travolta", "Olivia Newton-John", "The Bee Gees", "Franki Valli"],
                correctAnswer: "Franki Valli"
            },
            {
                question: "Which U.S. President declared that the last Thursday in November should be celebrated as Thanksgiving?",
                answers: ["Abraham Lincoln", "George Washington", "Harry Truman", "John F. Kennedy"],
                correctAnswer: "Abraham Lincoln"
            },
            ,
            {
                question: "Who appeared on the cover of the first issue of People Magazine on March 4, 1974?",
                answers: ["Farrah Fawcett", "Frank Sinatra", "Mia Farrow", "Tom Selleck"],
                correctAnswer: "Mia Farrow"
            }];

        var timer;

        var game = {
            questions: questions,
            currentQuestion: 0,
            counter: countStartNumber,
            startTimer: start, //30 seconds
            correct: 0, 
            incorrect: 0,
            unanswered: 0,

            countdown: function(){
                game.counter--; //countdown when the game starts
                $("#counter-number").text(game.counter);
                if(game.counter === 0) {
                    console.log("Time is up!);");
                    this.reset() [
                        this.counter];
                    // this.timeUP() Rows 115 and 116 are new logic
                }

            },

            loadQuestion: function() {

                timer = setInterval(game.countdown, 1000);
                
                card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

                for (var index = 0; index < questions[this.currentQuestion].answers.length; index++){
                    card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[index] 
                    + "'>" + questions[this.currentQuestion].answers[index] + "</button>");
                }
            },
            
            nextQuestion: function() {
                startTimer = countStartNumber;
                $("#counter-number").text(startTimer);
                this.currentQuestion++;
                game.loadQuestion();
            },

            timeUp:  function(){
                if(this.startTimer == 0) {
                    alert ("Time Up!"); 
                    clearInterval(this.timer);
                    } else {
                     (this.nextQuestion);
                }

            },

            results: function() {
            },

            clicked:  function(){

            },

            answerCorrectly: function(){
                if(this.questions[this.currentQuestion].correctAnswer == $('#button').val())
                this.correct++;
            },
            
            answerIncorrectly: function(){
                if(this.questions[this.currentQuestion].incorrectAnswer == $('#button').val())
                    this.incorrect++;

            },

            reset: function(s){
                this.currentQuestion = 0;
                this.counter = 30;
                this.correct - 0;
                this.incorect = 0;
                this.loadQuestion();
            }
        }

            $(document).on("click", "#start-over", game.reset.bind(game));

            $(document).on("click", "#start", function(){
                $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>")
                game.loadQuestion();
            })





        