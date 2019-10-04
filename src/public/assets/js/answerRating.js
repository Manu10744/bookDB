let answerButtons = $(".user-rating a");

answerButtons.on("click", (event) => {
    let clickedBtn = event.target;
    let ratingBox = $(clickedBtn).parent();

    if (!ratingBox.hasClass("expanded")) {
        $(ratingBox).append(
            "<div class='answer-box'><textarea></textarea>"
             + "<button>Post</button></div>"
        );

        ratingBox.addClass("expanded");
    }
})