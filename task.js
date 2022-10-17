function Student(name, gender, age) {
 
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let Andrey = new Student("Андрей", "муж", 19); 
let Ivan = new Student("Иван", "муж", 20);
let Petr = new Student("Петр", "муж", 21);

Student.prototype.setSubject = function (subjectName){
  this.subject = subjectName;
} 
Petr.setSubject("litra");
console.log(Petr);

Student.prototype.addMark = function (...arguments) {
//ранее мы нигде не задавали свойство marks для инстансов(экземпляров). Значит нам надо проверять, что свойство существует. 
//??? Почему если у нас не задано marks оно может существовать? Нам нужно объявить его, чтобы оно существовало? Как можно добавлять оценку в несуществующее свойство (в первом условии). 
  
  if(this.marks === undefined){ 
    let marks = [];
    marks.push(arguments);
    console.log(marks)
    // добавить первую оценку 
    } //зачем здесь else, у нас и при первом условии все оценки добавляются?
  
  // else {
    //for(let i = 0; i < arguments.length; i++){
    //  marks.push(arguments)
   // }
     
}

Petr.addMark(4, 3, 5);

Student.prototype.getAverage = function (...arguments){
  let average = 0;
  let lengthArguments = 0;
  let sum = 0;
  this.average = average;
    
  lengthArguments = arguments.length;
    
  // sum = arguments.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arguments.length; i++) {    
    sum += arguments[i];   
  }
  
  average = sum / lengthArguments;
  
  return average;
  }
Petr.getAverage(1, 3, 5);


Student.prototype.exclude = function (reason){
  
  this.reason = reason;
  
  delete Student.subject;//не получается удалить свойство, не понимаю, в чем моя ошибка...
 // delete Student.marks;
}
Petr.exclude("ilness");
console.log(Petr);