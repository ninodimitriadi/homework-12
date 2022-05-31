function getting_width(){
    square = document.getElementById("square")
    let width = 100;
    id = setInterval(frame, 1);
    function frame() {
      if (width == 1000) {
        clearInterval(id)
      } else {
        width += 1; 
        square.style.backgroundColor = "aqua"
        square.style.width = width + "px"; 
      }
    }
}
function getting_thin(){
    square = document.getElementById("square")
    let width = 1000;
    const id = setInterval(frame, 1);
    function frame() {
        if (width == 100) {
            clearInterval(id)
          } else {
            width -= 1;
            square.style.width = width + 'px'; 
            square.style.backgroundColor = "red"
          }
    }
}
function getting_thin(){
    square = document.getElementById("square")
    let width = 1000;
    const id = setInterval(frame, 1);
    function frame() {
        if (width == 100) {
            clearInterval(id)
          } else {
            width -= 1;
            square.style.width = width + 'px'; 
            square.style.backgroundColor = "red"
          }
    }
}function getting_taller(){
    square = document.getElementById("square")
    let height = 100;
    id = setInterval(frame, 1);
    function frame() {
      if (height == 500) {
        clearInterval(id)
      } else {
        height += 1; 
        square.style.backgroundColor = "aqua"
        square.style.height = height + "px"; 
      }
    }
}
function getting_shorter(){
    square = document.getElementById("square")
    let height = 500;
    const id = setInterval(frame, 1);
    function frame() {
        if (height == 100) {
            clearInterval(id)
          } else {
            height -= 1;
            square.style.height = height + 'px'; 
            square.style.backgroundColor = "red"
          }
    }
}
function f1(e){
    code = e.keyCode

    if (code == 39){  
        getting_width()
    }
    else if (code == 37){
        getting_thin()
    }
    else if (code == 40){
        getting_taller()
    }
    else if (code == 38){
        getting_shorter()
    }
}
function go_rigth(){
    setTimeout(function (){
        square = document.getElementById("square2")
        square.style.right = 0 + "px";
    }, 100)
}
function go_left(){
    setTimeout(function (){
        square = document.getElementById("square2")
        square.style.left = 0 + "px";
    }, 100)
}
function go_down(){
    setTimeout(function (){
        square = document.getElementById("square2")
        square.style.bottom = 0 + "px";
    }, 100)
}
function go_up(){
    setTimeout(function (){
        square = document.getElementById("square2")
        square.style.top = 0 + "px";
    }, 100)
}
function f2(e){
    code = e.keyCode
    console.log(code)

    if (code == 39){  
        go_rigth()
    }
    else if (code == 37){
        go_left()
    }
    else if (code == 40){
        go_down()
    }
    else if (code == 38){
        go_up()
    }
}
function f4(event){
  var cursore = document.getElementById("cursore");
  addEventListener("mousemove", 
            function(e){
              x = e.clientX;
              y = e.clientY;
              cursore.style.left = x + "px";
              cursore.style.right = x + "px";
              cursore.style.top = y + "px";
              cursore.style.bottom = y + "px";
  });
}

function oneclick() {
  sq = document.getElementById("lilsquare")
  sq.classList.add("oneclick")
}

function doubleclick() {
  sq = document.getElementById("lilsquare")
  sq.classList.add("doubleclick")
}


function f6(e){
  let ball = document.getElementById("img");

  // addEventListener('load', () => {
  //   ball.style.position = "absolute";
  //   ball.style.top = 0;
  //   ball.style.left = 0;
  // })

  addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft' :
        ball.style.left = ball.style.left - 10 + "px";
        break;
      case 'ArrowRight' :
        ball.style.right = parseInt(ball.style.right) - 10 + "px";
        break;
      case 'ArrowUp' :
        ball.style.up = parseInt(ball.style.top) - 10 + "px";
        break;
      case 'ArrowDown' :
        ball.style.bottom = parseInt(ball.style.bottom) - 10 + "px";
        break;
    }
  })
}
