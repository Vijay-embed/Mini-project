const digital = document.querySelector(".clock");


    //clock
    function clock(){
        const date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        var text = "AM";
    
        if(hour>12){
            hour = hour - 12;
            text = "PM"
        }
        else if(hour == 0){
            hour = 12;
            text = "AM"
        }
       hour = hour<10?"0"+hour:hour;
       minutes = minutes<10?"0"+minutes:minutes;
       seconds = seconds<10?"0"+seconds:seconds;
        
       digital.innerHTML = (`${hour} : ${minutes} : ${seconds} ${text}`);
       
        }
    
        setInterval(clock,1000);




        
