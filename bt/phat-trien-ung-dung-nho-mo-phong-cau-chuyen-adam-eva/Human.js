class Human{
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale() {
        return this.gender;
    }

    setGender(g){
        this.gender = g;
    }

    checkApple(apple){
        if (apple.isEmpty()){
            return false;
        }else{
            return true;
        }
    }

    eat(apple){
        if (this.checkApple(apple)){
            apple.decrease();
            let weight = this.weight + 1;
            this.setWeight(weight);
        }
    }

    say(str){
        console.log(str);
    }
    getName(){
    return this.name;
    }
    setName(str){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }

}

class Apple {
    constructor(weight) {
        this.weight = 10;
    }

    decrease(){
        this.weight -= 1;
    }

    getWeight(){
        return this.weight;
    }

    isEmpty(){
        if (this.getWeight()) {
            return false;
        }else{
            return true;
        }
    }

}