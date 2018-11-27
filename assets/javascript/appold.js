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
        var game = {
            questions:[{answers:a}]
            timer
        }
        
        
        var questions = [{
            question : "What was the first CD to sell a million copies?",
            answers : ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
            correctAnswer : "Joshua Tree"
        },
        {
            question : "What was the first CD to sell a million copies?",
            answers : ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
            correctAnswer : "Joshua Tree"
        },
        {
            question : "What was the first CD to sell a million copies?",
            answers : ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
            correctAnswer : "Joshua Tree"
        },
        {
            question : "What was the first CD to sell a million copies?",
            answers : ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
            correctAnswer : "Joshua Tree"
        },
        ,
        {
            question : "What was the first CD to sell a million copies?",
            answers : ["Abbey Road", "Kind of Blue", "Joshua Tree", "Rumours"],
            correctAnswer : "Joshua Tree"
        }
    
    ]
        var correctAnswer = 0;
        var incorrectAnswer = 0;
        var unanswered = 0;
       
        // Functions


        
        
        // Timer object


            //  Set our number counter to 100.
            var number = 100;

            //  Variable that will hold our interval ID when we execute
            //  the "run" function
            var intervalId;

            //  When the start button gets clicked, execute the run function.
            $("#start-button").on("click", run);

            //  When the stop button gets clicked, run the stop function.
            $("#done-button").on("click", stop);

            //  The run function sets an interval
            //  that runs the decrement function once a second.
            //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
            function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            }

            //  The decrement function.
            function decrement() {

            //  Decrease number by one.
            number--;

            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + number + "</h2>");
                console.log(number);

            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                alert("All done!");
            }

            //  The stop function
            function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
            }

            //  Execute the run function.
            run();
            
        }