class User {
    static count = 0; // static property

    constructor(username) {
        this.username = username;
    }

    displayCount() {
        console.log(`Count is: ${User.count}`);
    }

    // static method
    static incrementCount() {
        ++User.count;
    }
}

const ashish = new User('ashish');
ashish.displayCount(); // 0

User.incrementCount();

const sachin = new User('sachin');
sachin.displayCount(); // 1

User.incrementCount();

const atul = new User('atul');
atul.displayCount();  // 2

// Expl: 'count' property of the User class is shared between all the instances of this class.