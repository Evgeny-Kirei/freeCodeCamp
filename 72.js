function number(score) {
    if (90 <= score <= 100) {
      return 'A';
    } else if (80 <= score < 90) {
      return 'B';
    } else if (70 <= score < 90) {
       return 'C';
    } else if (60 <= score < 90) {
       return 'D';
    } else (0 <= score < 60); {
      return 'F';
    }
  }
  number(60);
  console.log(number(30));