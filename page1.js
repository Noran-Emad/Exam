var firstName = document.getElementsByTagName("input")[0];
var lastName = document.getElementsByTagName("input")[1];
var email = document.getElementsByTagName("input")[2];
var password = document.getElementsByTagName("input")[3];
var password2 = document.getElementsByTagName("input")[4];

var emailSpan = document.getElementById("emailSpan");
var passSpan = document.getElementById("passSpan");
var pass2Span = document.getElementById("pass2Span");

var nameRegex = /^[a-zA-Z]+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passRegex = /^.{8,}$/;

$(".name").on("input", function (e) {
    if (!nameRegex.test($(this).val())) {
        e.preventDefault();
        $(this).next(".nameSpan").text("Please enter characters only");
        $(this).next(".nameSpan").css("display", 'inline');
        return false;
    } else {
        $(this).next(".nameSpan").css("display", 'none');
        return true;
    }
});


function checkEmail(e) {
    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        emailSpan.textContent = "Please enter a valid email";
        emailSpan.style.display = 'inline';
        return false;
    } else {
        emailSpan.style.display = 'none';
        return true;
    }
}
function checkPassword(e) {
    if (!passRegex.test(password.value)) {
        e.preventDefault();
        passSpan.textContent = "Password should be at least 8 characters long";
        passSpan.style.display = 'inline';
        return false;
    } else {
        passSpan.style.display = 'none';
    }
}
function checkPassword2(e) {
    if (password2.value != password.value) {
        e.preventDefault();
        pass2Span.textContent = "Passwords do not match";
        pass2Span.style.display = 'inline';
        return false;
    } else {
        pass2Span.style.display = 'none';
        checkInput(e);
    }
}
$("#signBtn").on("click", function (e) {
    e.preventDefault();

    $("input").each(function () {
        var input = $(this);
        var errorSpan = input.next(".errorSpan");

        if (input.val().trim() === "") {
            if (!errorSpan.length) {
                errorSpan = $("<span/>")
                    .addClass("errorSpan")
                    .css("display", 'inline')
                    .text("This field is required")
                input.after(errorSpan);
            }
        } else {
            errorSpan.remove();
        }
    });
});

$("input").on("input", function () {
    $(this).next(".errorSpan").css("display", 'none');
});