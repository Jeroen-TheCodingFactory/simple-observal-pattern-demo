class Subscriber {
    constructor(state = 1) {
        this.observers = [];
        this.state = state;
    }
    attach(observer){
        this.observer.push(observer);
    }
    setState(state){
        this.state = state;
        this.notifyAllObservers();
    }
    notifyAllObservers(){
        this.observers.forEach(observer => {
            observer.update();
        })
    }

    getState(){
        return this.state;
    }

    attach(observer){
        this.observers.push(observer);
    }
}

class Observer {
    constructor(name, subscriber = null) {
        this.name = name;
        this.subscriber = subscriber;
        this.subscriber.attach(this);
        console.log(this.name + " original value is: " + this.subscriber.getState());
    }
    update(){
        console.log(this.name + " the value now is: " + this.subscriber.getState());
    }
    
}

let number = 0;
let subscriber = new Subscriber(number);

for(let i = 1; i <= 1000; i++){
    let observer = new Observer(i,subscriber);
}

setInterval( () => {
    number += 1;
    subscriber.setState(number);
}, 1000)





























