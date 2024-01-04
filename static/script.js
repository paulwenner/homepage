window.onload = () => {

    const correctbutton = document.querySelector("#Correct");
    const wrongbutton = document.querySelector("#Incorrect");

    correctbutton.addEventListener("click", () => {
        $('#quizModal').modal('hide');
    })

}


$(document).ready(function () {
    $('#quizModal').modal('show');
});

