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
                //image: "/assets/images/JoshuaTree.jpg" 
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
            correct: 0, 
            incorrect: 0,

            countdown: function(){
                this.counter--; //countdown when the this starts
                $("#counter-number").text(this.counter);
                if(this.counter === 0) {
                    console.log("Time is up!);");
                    this.timeUp();
                }

            },

            loadQuestion: function() {

                timer = setInterval(game.countdown.bind(game), 1000);
                
                card.html("<h2>" + questions[game.currentQuestion].question + "</h2>");
                
                for (var index = 0; index < questions[game.currentQuestion].answers.length; index++){
                    card.append("<button class='answer-button' id='button' data-name='" + questions[game.currentQuestion].answers[index] 
                    + "'>" + questions[game.currentQuestion].answers[index] + "</button>");
                }
            },

            nextQuestion: function() {
                game.counter = countStartNumber;
                console.log(game.counter);
                $("#counter-number").html(game.counter);
                game.currentQuestion++;
                game.loadQuestion(game);
            },

            timeUp:  function(){

                clearInterval(timer);

                $("#counter-number").html(this.counter);

                card.html("<h2>Out of Time!</h2>");
                card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
                console.log(questions[this.currentQuestion].correctAnswer);
                if (this.currentQuestion === questions.length - 1) {
                setTimeout(this.results, 3 * 1000);
                this.loadQuestion();
                }
                else {
                setTimeout(this.nextQuestion, 3 * 1000);

                }
            },

            results: function() {

                clearInterval(window.timer);

                card.html("<h2>All done, heres how you did!</h2>");

                $("#counter-number").text(game.counter);

                card.append("<h3>Correct Answers: " + game.correct + "</h3>");
                card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
                card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
                card.append("<br><button id='start-over'>Start Over?</button>");
            },

            clicked: function(e) {
                clearInterval(window.timer);
                if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
                this.answeredCorrectly();
                }
                else {
                this.answeredIncorrectly();
                }
            },

            answeredIncorrectly: function() {

                this.incorrect++;

                clearInterval(timer);

                card.html("<h2>No!</h2>");
                card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");

                if (this.currentQuestion === questions.length - 1) {
                setTimeout(this.results, 3 * 1000);
                }
                else {
                setTimeout(this.nextQuestion, 3 * 1000);
                }
            },

            answeredCorrectly: function() {

                clearInterval(timer);

                this.correct++;

                card.html("<h2>Correct!</h2>");
            

                if (this.currentQuestion === questions.length - 1) {
                setTimeout(this.results, 3 * 1000);
                }
                else {
                setTimeout(this.nextQuestion, 3 * 1000);
                }
            },
            reset: function(){
                this.currentQuestion = 0;
                this.counter = countStartNumber;
                this.correct - 0;
                this.incorect = 0;
                this.loadQuestion();
            }
        }

            $(document).on("click", "#start-over", game.reset.bind(game));
            $(document).on("click", ".answer-button", function(e){
                game.clicked.bind(game, e)();
            });

            $(document).on("click", "#start", function(e){
                $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>")
                game.loadQuestion.bind(game)();
            })





        