// Function Constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

    this.setFirstName = function(firstName) {
        this.firstName = firstName;
    }

    this.setLastName = function(lastName) {
        this.lastName = lastName;
    }

    this.jobStatus = function(){
        return this.hasJob = !this.hasJob;
    }
}




