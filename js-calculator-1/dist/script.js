let displayBox = document.querySelector('.display')
let operators = ['+','-','*','/','%','.']

function showdisplay(x){
  let current = displayBox.innerHTML;
  let lastIndex = current[current.length-1]
  
  if(displayBox.innerHTML == 0){
    return displayBox.innerHTML = x;
  }else if(operators.includes(x) && operators.includes(lastIndex)){
    return displaybox.innerHTML = `${current.substring(0,current.length-1)}${x}`
  }
  return displayBox.innerHTML += x;
}

function reset(){
  displayBox.innerHTML = 0
}

function calculate(){
  let current = displayBox.innerHTML;
  displayBox.innerHTML = eval(current)
}

function clearLast(){
  let current = displayBox.innerHTML;
  if(current.length == 1){
    displayBox.innerHTML = 0
  }else{
     displayBox.innerHTML = current.substring(0,current.length-1)
  }

}