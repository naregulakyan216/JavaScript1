let sum = 60000;
let text;
if(sum>=50000){
    text="zexch 40%";
}
else if(sum>=20000){
    text="zexch 10%";
}
else{
    text="zexch chka";
}
document.getElementById("discount").innerHTML=text;

//  *********************

// let light = red;
// let traffic;
// switch(light){
//     case red:
//         traffic="stop";
//     break;
//     case yellow:
//         traffic="get ready";
//      break;
//      case green:
//         traffic="let's go";
//      break;      
// }
// document.getElementById("light").innerHTML=traffic + " " + light;


// Right version of switch statement for traffic light
let light = "red";
let traffic;
switch(light){
  case "red":
    traffic = "stop";
    break;
  case "yellow":
    traffic = "get ready";
    break;
  case "green":
    traffic = "let's go";
    break;
}
document.getElementById("light").innerHTML=traffic + " " + light;


//  *********************
let week = new Date() .getDay();
let day;
let text1;
switch(week){
    case 0:
       day = "Sunday";
       text1 = "Day off";
     break;
    case 1:
        day = "Mondey";
        text1 = "Working day";
     break;
    case 2:
        day = "Tuesday" ;
        text1 = "Working day";
    break;
    case 3:
        day = "Wednesday";
        text1 = "Working day";
    break;
    case 4:
        day = "Thursday";
        text1 = "Working day";
     break;
    case 5:
        day = "Friday";
        text1 = "Working day" ;
     break;
     case 6:
        day = "Saturday";
        text1 = "Day off" ;
     break;            
}
document.getElementById("week").innerHTML=day + " " + text1;


//  *********************

let play = 500;
let text2;
if(play >= -100){
    text2 = "Beginner";
} 
else if(play>=-500){
    text2="Professional";
}
else if(play>=+501){
    text2 = "Legend";
}
document.getElementById("play").innerHTML=text2;

// Right version of if statement for play levels (play & text2 change to playy & text22)
let playy = 500;
let text22;
if (playy <= 100) {
  text22 = "Beginner";
} else if (playy <= 500) {
  text22 = "Professional";
} else {
  text22 = "Legend";
}

document.getElementById("play").innerHTML = text22;


//  *********************
let subject = "Math";
let duration;
switch(subject){
    case "Math":
    case "Physics":
        duration = "90 minute";
    break;
    case "History":
    case "English":
        duration = "45 minute";
     break;  
}
document.getElementById("subject").innerHTML=subject + " " + duration;


//  *********************
let attendance = 80;
let homeWorkDonw= true;
let text3;
if(attendance>=75 && homeWorkDonw){
    text3 = "Allowed for examination";
}
 else if(attendance>=80 && !homeWorkDonw){
    text3 = "All homework must be handed in.";
}
else{
    text3 = "submit again";
}
document.getElementById("exam").innerHTML=attendance + " " + homeWorkDonw + " " + text3;

// Right version of if statement for home work (attendance & homeWorkDonw change to attendancee & homeWorkDonww to avoid conflict with previous code)
let attendancee = 80;
let homeWorkDonww = true;
let text33;
if (attendancee >= 75 && homeWorkDonww) {
  text33 = "Allowed for examination";
} else if (attendancee >= 80 && !homeWorkDonww) {
  text33 = "All homework must be handed in.";
} else {
  text33 = "submit again";
}

//  *********************
let month = new Date() .getMonth();
let season;
switch(month){
    case 12:
    case 1:
    case 2:
        season = "Winder";
    break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer"  ;
       break;
    case 9:
    case 10:
    case 11:
        season = "Autumn"   
        break;
}
document.getElementById("month").innerHTML=month + " " + season

// Right version of switch statement for seasons (month & season change to monthh & seasoon to avoid conflict with previous code)
let monthh = new Date().getMonth(); // 0 = January, 11 = December
let seasonn;
switch(monthh){
  case 11: case 0: case 1:
    seasonn = "Winter";
    break;
  case 2: case 3: case 4:
    seasonn = "Spring";
    break;
  case 5: case 6: case 7:
    seasonn = "Summer";
    break;
  case 8: case 9: case 10:
    seasonn = "Autumn";
    break;
}