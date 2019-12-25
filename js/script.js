
let food = Math.floor(Math.random() * (105 - 55)) + 55;
let clean = Math.floor(Math.random() * (105 - 55)) + 55;
let happines = Math.floor(Math.random() * (105 - 55)) + 55;
let health =  Math.floor(Math.random() * (105 - 55)) + 55;
let social =  Math.floor(Math.random() * (105 - 55)) + 55;
let money =  Math.floor(Math.random() * (105 - 55)) + 55;
let level = 0;
let score = 0;

function Restart(){
   score = 0;
   food = Math.floor(Math.random() * (105 - 55)) + 55;
   clean = Math.floor(Math.random() * (105 - 55)) + 55;
   happines = Math.floor(Math.random() * (105 - 55)) + 55;
   health =  Math.floor(Math.random() * (105 - 55)) + 55;
   social =  Math.floor(Math.random() * (105 - 55)) + 55;
   money =  Math.floor(Math.random() * (105 - 55)) + 55;
   document.getElementById('die_events').style.display = 'none';
  if(level === 1){
    tamagochi.easylevel();
  }
  if(level === 2){
    tamagochi.hardlevel();
  }
  if(level === 3){
    tamagochi.ninja();
  }
}
function chooseAnother(){
  score = 0;
  food = Math.floor(Math.random() * (105 - 55)) + 55;
  clean = Math.floor(Math.random() * (105 - 55)) + 55;
  happines = Math.floor(Math.random() * (105 - 55)) + 55;
  health =  Math.floor(Math.random() * (105 - 55)) + 55;
  social =  Math.floor(Math.random() * (105 - 55)) + 55;
  money =  Math.floor(Math.random() * (105 - 55)) + 55;
  document.getElementById('levels').style.display = 'block';
  document.getElementById('main').style.display = 'none';
  document.getElementById('die_events').style.display = 'none';
}
function Refresh(){
  document.getElementById('food').style.width = food + 'px';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('happines').style.width = happines + 'px';
  document.getElementById('health').style.width = health + 'px';
  document.getElementById('social').style.width = social + 'px';
  document.getElementById('money').style.width = money + 'px';

  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('happines').innerHTML = happines + '%';
  document.getElementById('health').innerHTML = health + '%';
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('money').innerHTML = money + '%';
}

class Tamagochi {
  constructor(food,clean,happines,bonus) {
    this.food = food;
    this.clean = clean;
    this.happines = happines;
  }
  hardlevel(){
    document.getElementById('main').style.display = 'block';
    function Chek(){
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(loop);
        clearInterval(chek);
      }
    }
    document.getElementById('levels').style.display = 'none';
    level = 2;
     function Loop(time = 5){
      food = food - parseInt(time);
      clean = clean - parseInt(time);
      happines = happines - parseInt(time);
      health = health - parseInt(time);
      social = social - parseInt(time);
      money = money - parseInt(time);
      Refresh();
    }
    let loop = setInterval(Loop,5000);
    let chek = setInterval(Chek,1000);
    function Timer(){
      score++;
      document.getElementById('scoree').innerHTML = 'Your Score: ' + score;
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(timer);
        document.getElementById('die_events').style.display = 'block';
      }
    }
    function Bonus(){
      let help = Math.floor(Math.random() * (7 - 1)) + 1;

      if(help == 1){
        food += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 2){
        clean += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 3){
        happines += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 4){
        social += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 5){
        health += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 6){
        money += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(bonus);
      }
      Refresh();
    }
    let bonus = setInterval(Bonus,60000);
    let timer = setInterval(Timer,1000);
    Loop();
    Timer();
  }

   easylevel(){
    document.getElementById('main').style.display = 'block';
    function Chek(){
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(loop);
        clearInterval(chek);
      }
    }
    document.getElementById('levels').style.display = 'none';
    level = 1;
    function Loop(time = 3){
      food = food - parseInt(time);
      clean = clean - parseInt(time);
      happines = happines - parseInt(time);
      health = health - parseInt(time);
      social = social - parseInt(time);
      money = money - parseInt(time);
      Refresh();
    }
    let loop = setInterval(Loop,5000);
    let chek = setInterval(Chek,1000);
    function Timer(){
      score++;
      document.getElementById('scoree').innerHTML = 'Your Score: ' + score;
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(timer);
        document.getElementById('die_events').style.display = 'block';
      }
    }
    function Bonus(){
      let help = Math.floor(Math.random() * (7 - 1)) + 1;

      if(help == 1){
        food += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 2){
        clean += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 3){
        happines += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 4){
        social += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 5){
        health += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(help == 6){
        money += Math.floor(Math.random() * (50 - 10)) + 10;
      }
      if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
        clearInterval(bonus);
      }
      Refresh();
    }
    let bonus = setInterval(Bonus,60000);
    let timer = setInterval(Timer,1000);
    Loop();
    Timer();
  }
  ninja(){
   document.getElementById('main').style.display = 'block';
   function Chek(){
     if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
       clearInterval(loop);
       clearInterval(chek);
     }
   }
   document.getElementById('levels').style.display = 'none';
   level = 3;
   function Loop(time = 7){
     food = food - parseInt(time);
     clean = clean - parseInt(time);
     happines = happines - parseInt(time);
     health = health - parseInt(time);
     social = social - parseInt(time);
     money = money - parseInt(time);
     Refresh();
   }
   let loop = setInterval(Loop,7000);
   let chek = setInterval(Chek,1000);
   function Timer(){
     score++;
     document.getElementById('scoree').innerHTML = 'Your Score: ' + score;
     if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
       clearInterval(timer);
       document.getElementById('die_events').style.display = 'block';
     }
   }
   function Bonus(){
     let help = Math.floor(Math.random() * (7 - 1)) + 1;

     if(help == 1){
       food += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(help == 2){
       clean += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(help == 3){
       happines += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(help == 4){
       social += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(help == 5){
       health += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(help == 6){
       money += Math.floor(Math.random() * (50 - 10)) + 10;
     }
     if(food <= 0 || clean <= 0 || happines <= 0 || health <= 0 || social <= 0 || money <=0){
       clearInterval(bonus);
     }
     Refresh();
   }
   let bonus = setInterval(Bonus,60000);
   let timer = setInterval(Timer,1000);
   Loop();
   Timer();
 }
  Feed(){
    if(food >= 70 && level === 1){
      food = 100;
    }
    else if(food >= 40 && level === 2){
      food = 70;
    }
    else{
      food += 30;
    }
    if( clean <= 20){
      clean = 0;
    }
    else{
      clean = clean - 20;
    }
    Refresh();
  }
  Wash(){
    if(clean >= 60  && level === 1){
      clean = 100;
    }
    else if( clean >= 30  && level === 2){
      clean = 70;
    }
    else{
      clean += 40;
    }
    if( happines <= 20){
      happines = 0;
    }
    else{
      happines = happines - 20;
    }
    Refresh();
  }
  Run(){
    if(happines >= 85  && level === 1){
      happines = 100;
    }
    else if(happines >= 55  && level === 2){
      happines = 70;
    }
    else{
      happines += 15;
    }
    if( food <= 20){
      food = 0;
    }
    else{
      food = food - 20;
    }
    Refresh();
  }
 visitDoc(){
   if(health >= 70  && level === 1){
     health = 100;
   }
   else if(health >= 40  && level === 2){
     health = 70;
   }
   else{
     health += 15;
   }
   if( money <= 20){
     money = 0;
   }
   else{
     money = money - 20;
   }
   Refresh();
 }
 goBar(){
   if(social >= 60  && level === 1){
     social = 100;
   }
   else if(social >= 30  && level === 2){
     social = 70;
   }
   else{
     social += 40;
   }
   if(food >= 90 && level === 1){
     food = 100;
   }
   else if(food >= 60 && level === 2){
     food = 70;
   }
   else{
     food += 10;
   }
   if( money <= 20){
     money = 0;
   }
   else{
     money = money - 20;
   }
   if( health <= 10){
     health = 0;
   }
   else{
     health = health - 10;
   }
   Refresh();
 }
 goWork(){
   if(money >= 50  && level === 1){
     money = 100;
   }
   else if(money >= 20  && level === 2){
     money = 70;
   }
   else{
     money += 50;
   }
   if( health <= 10){
     health = 0;
   }
   else{
     health = health - 10;
   }
   if( food <= 10){
     food = 0;
   }
   else{
     food = food - 10;
   }
   if( social <= 20){
     social = 0;
   }
   else{
     social = social - 20;
   }
   Refresh();
  }
  buyFood(){
    if(food >= 80  && level === 1){
      food = 100;
    }
    else if(food >= 50  && level === 2){
      food = 70;
    }
    else{
      food += 20;
    }
    if(money <= 20){
      money = 0;
    }
    else{
      money = money - 20;
    }
    Refresh();
  }
  startBusin(){
    money += 100;
    happines += 100;
    health = health - 100;
    social += 20;
    Refresh();
  }
 }

let tamagochi =  new Tamagochi(food,clean,happines);
document.querySelector('#hard').addEventListener('click', function () {
   tamagochi.hardlevel();
})
document.querySelector('#easy').addEventListener('click', function () {
   tamagochi.easylevel();
})
document.querySelector('#ninja').addEventListener('click', function () {
   tamagochi.ninja();
})
document.querySelector('#feed').addEventListener('click', function () {
   tamagochi.Feed();
})
document.querySelector('#wash').addEventListener('click', function () {
   tamagochi.Wash();
})
document.querySelector('#run').addEventListener('click', function () {
   tamagochi.Run();
})
document.querySelector('#visitDoc').addEventListener('click', function () {
   tamagochi.visitDoc();
})
document.querySelector('#goBar').addEventListener('click', function () {
   tamagochi.goBar();
})
document.querySelector('#goWork').addEventListener('click', function () {
   tamagochi.goWork();
})
document.querySelector('#buyFood').addEventListener('click', function () {
   tamagochi.buyFood();
})
document.querySelector('#startBusin').addEventListener('click', function () {
   tamagochi.startBusin();
})
