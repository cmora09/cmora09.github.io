$("body").css({
        backgroundColor: "#333",
        transition: "background-color 2s ease"
    }, 1000 );
$("body").addClass("text-light");

function changeBgColor(linkId){
    if(linkId == "home"){
        $("body").css({
            backgroundColor: "#333333",
            transition: "background-color 1.5s ease"
        }, 1000 );
        $('body').removeAttr("class").addClass("text-light");
    }else if(linkId == "about"){
        $("body").css({
            backgroundColor: "#2D0C3D",
            transition: "background-color 1.5s ease"
        }, 1000 );
        $('body').removeAttr("class").addClass("text-light");
    }else if(linkId == "work"){
        $("body").css({
            backgroundColor: "#002556",
            transition: "background-color 1.5s ease"
        }, 1000 );
        $('body').removeAttr("class").addClass("text-dark");
    }else if(linkId == "contact"){
        $("body").css({
            backgroundColor: "#C56411",
            transition: "background-color 1.5s ease"
        }, 1000 );
         $('body').removeAttr("class").addClass("text-light");
    }
}

var circle = anime ({
    targets: ['.loader'],
    rotate: '1turn',
    duration: 25000,
    loop: true,
    easing: 'linear'
});
var letter = anime ({
    targets: ['.brand-letter'],
    rotate: -360,
    duration: 25000,
    loop: true,
    easing: 'linear'
});