// Classes
class Person{
    // static method (Only store in the class)
    // Won't be inherited to the instance
    static species () {
        return "Homo Sapiens"
    } 

    static speciesSentense() {
        return `Humen are classified as ${this.species()}`
    }

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


// Extending from the Person's class
class Worker extends Person{
    constructor(firstName, lastName, job){
        super(firstName, lastName); // Referrring to the construtor from the extended Person (All initialization is set in the Perspm's constructor)
        this.job = job;
        this.hasJob = true;
    }

    setJob (job) {
        this.job = job;
    }
}