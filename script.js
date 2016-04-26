// http://pixelcog.github.io/parallax.js/ Using parallax effect from this site!!

//used stackoverflow for the fade in function (http://jsfiddle.net/bGsa3/6/) with my notes
$(document).ready(function(){	
        $("body").hide();
        $("body").fadeIn(750);
	
    $(function () {
    var greeting = "Chris Mora";
    var welcome = $(".welcome");
    var count = 0;
    //set interval used to perform this function according to the milliseconds given. 125 in this case.
    var i = setInterval(function () {
    	// if function acts as a stopping mechanism once the count as exceeded the length of greeting. 
    	// It won't crash the the browser but the greeting will continue to fade in.
        if (count >= greeting.length) {
            clearInterval(i);
            welcome.text(greeting);
        } 
        else {
        	//this turns the text in the var greeting into text that can be put on to the html page.
            $('<span>').text(greeting[count]).
            appendTo(welcome).hide().fadeIn(300);
            count ++;
        }
    	}, 125);
	});
    $(".pimg").on("hover", function(){
        
    });
});