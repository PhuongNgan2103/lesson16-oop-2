class Human{
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale(){
        if (this.gender.toLowerCase() === 'male'){
            return true;
        }
        return false;
    }

    setGender(gender){
        this.gender = gender;
    }

    checkApple(){
        if (apple.isEmpty){
            return false;
        }
        return true;
    }

    eat(apple){
        if (this.checkApple(apple)){
            this.increaseWeight(2);
            apple.decrease(1);
        }else {
            this.say("con gi đau ma an : '>")
        }
    }

    say(content){
        alert(content);
    }

    increaseWeight(value){
        this.weight += value;
    }

    getWeight(){
        return this.weight;
    }

}

class apple {
    constructor(weight) {
        this.weight = weight;
    }

    decrease(value){
        this.weight -= value;
    }

    getWeight(){
        return this.weight;
    }

    isEmpty(){
        if (this.weight > 0){
            return false;
        }
        return true;
    }

}