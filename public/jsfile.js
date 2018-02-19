
var name=window.prompt("hello! please enter your name");
var message=document.getElementById("greeting");
message.innerHTML+=" "+name;
var num_days;
var enterdays=document.getElementById("enterDays");
enterdays.onclick=calculateDays;
function calculateDays(){
    var input_days=document.getElementById("days");
    num_days=input_days.value;
    var hours=num_days*24;
    var min=hours*60;
    var daysMessage=document.getElementById("daysMessage");
    if(num_days<=4){
        daysMessage.innerHTML="Short trips are always worth it!!";
    }
    else if(num_days<=7){
        daysMessage.innerHTML="Cool! You will be there for almost a week!";
    }
    else if(num_days>7){
        daysMessage.innerHTML="Woah! You have plenty of time to relax and have fun!";
    }
    var hoursMessage=document.getElementById("hoursMessage");
    hoursMessage.innerHTML="That means you will be staying for "+hours+" hours!!";
    var minutesMessage=document.getElementById("minutesMessage");
    minutesMessage.innerHTML="Which leads to "+min+" minutes!!";
    var timingNext=document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
    timingNext.onclick=run;
    function run(){
        var budgetSection=document.getElementById("budgetSection");
        budgetSection.removeAttribute("hidden");
    }
}
var enterBudget=document.getElementById("enterBudget");
enterBudget.onclick=result;
function result(){
    var daily_budget=document.getElementById("dailyBudget");
    var budget_val=daily_budget.value;
    var val_ruppee=budget_val*65;
    var per_day=val_ruppee/num_days;
    var tripExchangeMsg=document.getElementById("tripExchangeMsg");
    tripExchangeMsg.innerHTML="That means you will need "+ val_ruppee+" ruppees.!!";
    var dailyExchangeMsg=document.getElementById("dailyExchangeMsg");
    dailyExchangeMsg.innerHTML="Which means you can spend "+per_day+" in a day.";
}
var images=["images/vac1.jpg","images/vac2.jpg","images/vac3.jpg","images/vacation-final.jpg"];
var currentimage=0;
setInterval(changeImage,3000);
function changeImage(){
    currentimage++;
    if(currentimage> images.length-1){
        currentimage=0;
    }
    document.body.style.backgroundImage= "url("+images[currentimage]+")";
}