let answerButtons = $(".user-rating a");

answerButtons.on("click", (event) => {
    let clickedBtn = event.target;
    let ratingBox = $(clickedBtn).parent();

    if (!ratingBox.hasClass("expanded")) {
        $(ratingBox).append(
            "<div class='answer-box'>"
            + "<form class='answer-form'>"
            + "<input class='answer-input' type='text' name='author' placeholder='Your Name...'>"
            + "<textarea></textarea>"
            + "<button type='submit'>Post</button>"
            + "</form>"
            + "</div>"
        );

        ratingBox.addClass("expanded");
    }
})