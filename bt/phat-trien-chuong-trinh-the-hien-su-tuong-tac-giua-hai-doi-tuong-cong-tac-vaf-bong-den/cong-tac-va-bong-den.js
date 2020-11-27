class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = null;
    }

    connectToLamp(lamp){
        this.lamp = lamp;
    }

    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }

    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }

}

class Lamp {
    constructor() {
        this.status = false;
    }

    turnOff(){
        this.status = false;
    }

    turnOn(){
        this.status = true;
    }

}