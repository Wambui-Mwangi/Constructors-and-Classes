//Question 1
class Car {     //class car with properties
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
    toggleAvailability() {     //toggle availability function 
        this.isAvailable = !this.isAvailable;
}
}
let car=new Car("Toyota","e10","2022",true) 
console.log(car);

 //2.
class Rental {   
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }

}


//Question2
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
      }
    }

class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
}
  addQuestion(question) {
    this.questions.push(question);
}
  nextQuestion() {
    this.currentQuestionIndex++;
}
  submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
      this.score++;
    }
      }
    }
    

  

