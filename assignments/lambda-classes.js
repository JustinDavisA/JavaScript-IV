// CODE here for your Lambda Classes


class Person {
    constructor(personAtts) {
        this.name = personAtts.name;
        this.age = personAtts.age;
        this.location = personAtts.location;
        this.gender = personAtts.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.speciality = instructorAtts.speciality;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.previousBackground = instructorAtts.previousBackground;
        this.className = instructorAtts.className;
        this.favSubjects = instructorAtts.favSubjects;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAtts) {
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
    standUp(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    debugsCode(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }