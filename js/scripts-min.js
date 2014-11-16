/*jshint devel:true */
$(document).ready( function() {
    var book = [];
    $.get("data/Alice-sentences.txt", function(data){
        data = data.replace(/^/g, "/").replace(/\n/g, "\n/");
        // console.log("Insert first /: "+data);
        data = data.replace(/ /g, "/");
        // console.log("replace spaces with /: "+data);
        data = data.replace(/`/g,"'");
        // console.log("replace backticks: "+data);
        data = data.split('\n');
        // console.log("Split: "+data);
        book = data;
    });
    var counter = 0;

    $("#next").click(function(){
        window.history.pushState(null, "", book[counter]);
        //console.log(book[counter]);
        counter = (counter + 1) % book.length; // increment the counter & reset to 0 when it reaches the length of the array
    });
});

