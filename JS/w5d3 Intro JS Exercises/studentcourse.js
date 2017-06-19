function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
}

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    if (this.hasConflict(course)) {
      console.log("has conflict");
    } else {
      console.log("class enrolled!");
      this.courses.push(course);
      course.students.push(this);
    }
  } else {
    console.log("already enrolled")
  }
}

Student.prototype.courseLoad = function() {
  let load = {}
  this.courses.forEach( (course) => {
    if (load[course.department] === undefined) {
      load[course.department] = course.credits;
    } else {
      load[course.department] += course.credits;
    }
  });
  return load;
}

Student.prototype.hasConflict = function(secondCourse) {
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(secondCourse)) {
      console.log("has conflict");
      return true;
    }
  }
  console.log("no conflict");
  return false;
  // this.courses.forEach( (course) => {
  //   if (course.conflictsWith(secondCourse)) {
  //     console.log("yes conflict");
  //     return true;
  //   }
  // })
  // console.log("No conflict");
  // return false;
}

function Course(courseName, department, credits, days, timeBlock) {
  this.courseName = courseName;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.timeBlock = timeBlock;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function(other) {
  if (this.timeBlock !== other.timeBlock) { return false; }

  return this.days.some(day => other.days.indexOf(day) !== -1 );
  // if (this.timeBlock === secondCourse.timeBlock) {
  //   console.log("same timeblock");
  //   this.days.forEach ( (day) => {
  //     if (secondCourse.days.includes(day)) {
  //       console.log("same timeblock and same day");
  //       return true;
  //     }
  //   })
    // this.days.forEach( (day) => {
    //   if (secondCourse.days.includes(day)) {
    //     console.log("hello");
    //     return true;
    //   }
    // });

  // return false;
}


let student1 = new Student("Nigel", "Leffler");
let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
let course2 = new Course("201", "CS", 3, ["wed"], 1);
let course3 = new Course("301", "ENG", 3, ["tue"], 1);
let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
student1.enroll(course2);
console.log(student1.courseLoad());
console.log('should be true = ' + course1.conflictsWith(course2));
console.log('should be false = ' + course1.conflictsWith(course3));
console.log('should be false = ' + course1.conflictsWith(course4));
