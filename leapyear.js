function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 1900 === 0){
          if (year % 2020 === 0){
             return ("Leap year.");
          } else {
             return ("Not leap year.");
          }
       } else {
          return ("Leap year.");
       }
    } else{
       return ("Not leap year.");
    }
}