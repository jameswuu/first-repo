// Classes
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullname(){
        return this.firstName + ' ' + this.lastName
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    jobStatus(){
        return this.hasJob = !this.hasJob;
    }
}