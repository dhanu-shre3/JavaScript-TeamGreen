/* On click View Query Form button */
function onclickViewQueryForm() {
    // variables		
    var name = document.getElementById('fullName');
    var email = document.getElementById('email');
    var number = document.getElementById('phoneName');
    var subject = document.getElementById('subject');
    var comment = document.getElementById("comment");


    validateFormOption(name, email, number, subject, comment);
}


// Validation of input fields 
function validateFormOption(name, email, number, subject, comment) {
    // variables
    var nameValue = name.value;
    var emailValue = email.value;
    var numberValue = number.value.replace(/[^0-9]/g, '');
    var subjectValue = subject.value;
    var commentValue = comment.value;


    // Validate Full Name
    if (nameValue.length < 1) {
        alert("Please full name MUST be more than 2 letters! ");
    }
    // Validate Email
    else if (emailValue.indexOf("@") == -1 || email.length < 6) {
        alert("Please Enter valid Email. ");
    }

    // Validate Phone Number
    else if (numberValue.length != 11) {
        alert("Please Enter an 11 digits Telephone Number. ");
    }

    // Validate select option
    else if (subjectValue == '') {
        alert('Please select a Subject. ');
    }
    // Character length
    else if (commentValue.length <= 10 || commentValue.length >= 300) {
        alert("Please Enter Less Than 300 Characters. ");

    } else {

        //
        document.getElementById('fullNameLabel').innerHTML = nameValue;
        document.getElementById('emailLabel').innerHTML = emailValue;
        document.getElementById('numberLabel').innerHTML = numberValue;
        document.getElementById('subjectLabel').innerHTML = subjectValue;
        document.getElementById('commentLabel').innerHTML = commentValue;

        // Hide the input field form and display the form preview
        document.getElementById("myForm").style.display = "none"
        document.getElementById("myFormPreview").style.display = "block"

        document.getElementById("queryDetail").style.display = "block";
        document.getElementById("viewQueryForm").style.display = "none";

    }
}

// Edit form
function onclickEditForm() {
    // Hide the input field form and display the form preview
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myFormPreview").style.display = "none"

    // Hide edit and submit buttons
    document.getElementById("queryDetail").style.display = "none";
    // Show "View Query" button(s)
    document.getElementById("viewQueryForm").style.display = "block";
}