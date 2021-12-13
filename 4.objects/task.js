function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let anna = new Student('Anna', 'female', 32);
let serg = new Student('Serg', 'male', 37);
let alex = new Student('Alex', 'male', 35);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...newmarks) {
  if(this.marks === undefined){ 
    this.marks = [...newmarks]; 
    } else {
      this.marks.push(...newmarks);
    }
}

Student.prototype.getAverage = function () {
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    const length = this.marks.length;
    return sum / length;
  };

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};

// ваш код для остальных методов