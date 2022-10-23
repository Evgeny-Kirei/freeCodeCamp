function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
  case 1:
     answer ='apple';
      break;
  case 'a':
     answer ='apple';
      break;
  case 'b':
     answer = 'bird';
      break;
  case 'c':
      answer ='cat';
      break;
  case 'd':
      answer ='stuff';
      break;
  case 4:
     answer ='stuff';
      break;
    default:
     answer = 'hello'
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);