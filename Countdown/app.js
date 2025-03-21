const days= document.querySelector("#days");
const hrs= document.querySelector("#hrs");
const min= document.querySelector("#min");
const sec= document.querySelector("#sec")


function countDown(){
        
    let currentYear = new Date().getFullYear();

    const newYear = new Date(`march 1  ${currentYear } 00:00:00`);
    
    const currentDate = new Date();
    let diff = newYear-currentDate;
    let day = (Math.floor(diff/1000/60/60/24));
    let hr = (Math.floor(diff/1000/60/60)%24);
    let mins = (Math.floor(diff/1000/60)%60);
    let secs = (Math.floor(diff/1000)%60);
 
    

    // console.log(`${Days} Days ${hr} Hours ${min} mins ${sec} sec`);

            days.innerHTML = day<10?"0"+day:day;   
            hrs.innerHTML = hr <10?"0"+hr:hr;
            min.innerHTML = mins <10?"0"+mins:mins;
            sec.innerHTML = secs <10?"0"+secs:secs;

}


    setInterval(countDown,1000);

  
  

   
    
    
    