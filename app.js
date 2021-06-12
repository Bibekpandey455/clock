/*let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerH = time;
    setTimeout(clock, 1000);
  };
  
  clock();
  */
 let a;
 let date;
 let time;
 setInterval(() => {
     a=new Date();
     let hrs = a.getHours();
    let mins = a.getMinutes();
    let secs = a.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs}:${period}`;
     //time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
     date=a.toLocaleDateString();
     document.getElementById('time').innerHTML=time + " on " + date;
     
 }, 1000);