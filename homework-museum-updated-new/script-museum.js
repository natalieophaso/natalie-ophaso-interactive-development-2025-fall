showtime();
function showtime(){
    var date - new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var h = date.getHours();
    var session = "AM";

    if (h >= 12){
        session = "PM"
    }

    if(h == 0){
        session = "PM"
    }

    if(h > 12){
        h = h - 12;
    }
    
}
