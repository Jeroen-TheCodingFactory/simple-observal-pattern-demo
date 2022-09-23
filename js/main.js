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
    constructor(name, subscriber = null, htmlElementById) {
        this.name = name;
        this.subscriber = subscriber;
        this.subscriber.attach(this);
        this.htmlElementById = htmlElementById;
        this.init();
    }
    init(){
        this.render(this.subscriber.getState());
    }
    update(){
            this.render(this.subscriber.getState());
    }    
    render(value){
        this.htmlElementById.innerText = value;
    }
}

let number = 0;
let subscriber = new Subscriber(number);
let observer = new Observer("Observer 1",subscriber,document.getElementById("js--h2--1"));
let observer5 = new Observer("Observer 5",subscriber,document.getElementById("js--h2--5"));
let observer3 = new Observer("Observer 3",subscriber,document.getElementById("js--h2--3"));

let number2 = 10;
let subscriber2 = new Subscriber(number2);
let observer2 = new Observer("Observer 2",subscriber2,document.getElementById("js--h2--2"));
let observer4 = new Observer("Observer 4",subscriber2,document.getElementById("js--h2--4"));
let observer6 = new Observer("Observer 6",subscriber2,document.getElementById("js--h2--6"));

setInterval( () => {
    number += 1;
    subscriber.setState(number);
}, 1000)

setInterval( () => {
    number2 -= 1;
    subscriber2.setState(number2);
}, 1000)





























