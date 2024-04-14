document.getElementById("minigameBtn").addEventListener("click", function() {
    const answers = {
        input1: ["accessing", "altering", "destroying", "accessing data", "altering data", "destroying data"],
        input2: [5],
        input3: [35],
        input4: [39],
        input5: ["ransomware"],
        input6: ["email", "emails", "texts"],
        input7: ["phishing"],
        input8: [2021],
        input9: ["virtual private network"],
        input10: ["sentinelsafe technologies"]
    };

    // Get user inputs from input fields
    const userAnswers = {
        input1: document.getElementById("input1").value.trim().toLowerCase(),
        input2: parseInt(document.getElementById("input2").value.trim()),
        input3: parseInt(document.getElementById("input3").value.trim()),
        input4: parseInt(document.getElementById("input4").value.trim()),
        input5: document.getElementById("input5").value.trim().toLowerCase(),
        input6: document.getElementById("input6").value.trim().toLowerCase(),
		input7: document.getElementById("input7").value.trim().toLowerCase(),
		input8: parseInt(document.getElementById("input8").value.trim()),
		input9: document.getElementById("input9").value.trim().toLowerCase(),
		input10: document.getElementById("input10").value.trim().toLowerCase()
    };

    // Validate user inputs format
    let validFormat = true;
    const formatErrors = {};
    if (!userAnswers.input1) {
        validFormat = false;
        formatErrors.input1 = "Answer space 1 must be filled";
    }
    if (isNaN(userAnswers.input2)) {
        validFormat = false;
        formatErrors.input2 = "Answer space 2 must be filled with a number";
    }
    if (isNaN(userAnswers.input3)) {
        validFormat = false;
        formatErrors.input3 = "Answer space 3 must be filled with a number";
    }
    if (isNaN(userAnswers.input4)) {
        validFormat = false;
        formatErrors.input4 = "Answer space 4 must be filled with a number";
    }
    if (!userAnswers.input5) {
        validFormat = false;
        formatErrors.input5 = "Answer space 5 must be filled";
    }
    if (!userAnswers.input6) {
        validFormat = false;
        formatErrors.input6 = "Answer space 6 must be filled";
    }
	if (!userAnswers.input7) {
        validFormat = false;
        formatErrors.input7 = "Answer space 7 must be filled";
    }
	if (!userAnswers.input8) {
        validFormat = false;
        formatErrors.input8 = "Answer space 8 must be filled with a number";
    }
	if (!userAnswers.input9) {
        validFormat = false;
        formatErrors.input9 = "Answer space 9 must be filled";
    }
	if (!userAnswers.input10) {
        validFormat = false;
        formatErrors.input10 = "Answer space 10 must be filled";
    }

    if (!validFormat) {
        let errorMessage = "Please correct the following format errors:\n";
        for (const key in formatErrors) {
            errorMessage += `${key.substr(10)}: ${formatErrors[key]}\n`;
        }
        alert(errorMessage);
        return; // Stop further processing if format is invalid
    }

    // Compare the users inputs with the correct answers
    let correctCount = 0;
    for (const key in answers) {
        if (answers.hasOwnProperty(key) && userAnswers.hasOwnProperty(key)) {
            const acceptedAnswers = answers[key];
            const userAnswer = userAnswers[key];
            if (acceptedAnswers.includes(userAnswer)) {
                correctCount++;
            }
        }
    }

    // Calculate percentage and grade for questions
    const totalQuestions = Object.keys(answers).length;
    const percentage = (correctCount / totalQuestions) * 100;
    let grade;
    let comment;
    if (percentage >= 90) {
        grade = 'A';
        comment = "Great job! you got an amazing score :)";
    } else if (percentage >= 80) {
        grade = 'B';
        comment = "Good job! try again for a higher score or move on to other parts of our site";
    } else if (percentage >= 70) {
        grade = 'C';
        comment = "Good job! try again for a higher score or move on to other parts of our site";
    } else if (percentage >= 60) {
        grade = 'D';
        comment = "Good job! try again for a higher score or move on to other parts of our site";
    } else {
        grade = 'F';
        comment = "Don't worry! You can try the minigame as many times as you wish, or you can move to other parts of the site ";
    }

    // Construct message with user inputs and grade
    let message = `Your answers:\n`;
    for (const key in userAnswers) {
        if (userAnswers.hasOwnProperty(key)) {
            message += `${key.substr(10)}: ${userAnswers[key]}\n`;
        }
    }
    message += `\nYou answered ${correctCount} out of ${totalQuestions} questions correctly.\n Your final score in the minigame is ${grade}\n ${comment}`;

    // Display the message
    alert(message);
});