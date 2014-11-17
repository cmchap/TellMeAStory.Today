$(document).ready( function() {
    $(document).keydown(function(e) {
        switch(e.which) {
            case 32: // spacebar
            case 13: // enter
            case 39: // right
            case 40: // down
                $("#next").click();
                break;
            case 8:  //backspace
            case 37: //left
            case 38: //up
                $("#previous").click();
                break;
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    $("#ks").popover({
        html:       true,
        placement:  "top",
        trigger:    "click",
        title:      "Keyboard Shortcuts",
        content:    '<span class="ks"><b>Next:</b><br>spacebar<br>enter<br>down arrow<br>right arrow</span><span class="ks"><b>Previous:</b><br>delete<br>up arrow<br>left arrow</span>'
    });

    $("body").click().focus();

    var book = [];
    $.get("Alice-Sentences.txt", function(data){
        data = data.replace(/^/g, "/").replace(/\n/g, "\n/"); //insert / at beginning of each line
        data = data.replace(/ /g, "/"); //replace spaces with /
        data = data.replace(/`/g,"'"); //replace backticks with '
        data = data.split('\n'); //split on newlines
        book = data;
    });

    var counter = -1;

    $("#previous").click(function(){
        counter = (counter - 1);
        if (counter < 0) {
            window.history.pushState(null, "", "/");
            counter = -1;
        } else {
            window.history.pushState(null, "", book[counter]);
        }
    });

    $("#next").click(function(){
        counter = (counter + 1);
        if (counter > book.length) {
            counter = 0;
        }
        window.history.pushState(null, "", book[counter]);
    });
});

