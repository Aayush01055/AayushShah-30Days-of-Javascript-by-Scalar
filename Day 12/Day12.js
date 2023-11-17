function clock()
{
    var now=new Date();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();

    hours =hours<10?"0"+hours:hours;
    minutes =minutes<10?"0"+minutes:minutes;
    seconds =seconds<10?"0"+seconds:seconds;

    var time=hours+":"+minutes+":"+seconds;
    console.log(time);
}

setInterval(clock,1000);