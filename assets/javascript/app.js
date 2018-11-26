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


// Timer

window.onload = function() {
    $("#start-button").on("click", timer.start);
    $("#done-button").on("click", timer.start);
  };
  
// Timer object

var timer = {
    time: 0,
    
}