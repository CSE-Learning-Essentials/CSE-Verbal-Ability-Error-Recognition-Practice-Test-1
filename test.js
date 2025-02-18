function checkAnswers() {
    let score = 0;
    let resultMessage = "";

    // Check Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "C") score++;

    // Check Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "B") score++;

    // Check Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "B") score++;

    // Check Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "A") score++;

    // Check Question 5
    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "E") score++;

    // Check Question 6
    let q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === "D") score++;

    // Check Question 7
    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === "A") score++;

    // Check Question 8
    let q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === "A") score++;

    // Check Question 9
    let q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === "A") score++;

    // Check Question 10
    let q10 = document.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === "A") score++;

    // Display result
    if (score >= 8) {
        resultMessage = "Congratulations! You passed the test.";
    } else {
        resultMessage = "You need more practice. Try again!";
    }

    document.getElementById("result").innerText = "Your Score: " + score + "/10\n" + resultMessage;
}
