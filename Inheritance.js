
//Inheritance in JavaScript.....

class Animal{
    color="black";

    alive(){
        console.log("Still alive");
    }
}


class Dog extends Animal{

    name="Jimmy";
    
    sleep(){
        console.log("Yes he is sleeping Now : ");
    }
}
class Fish extends Animal{
    name="AngelFish";

    swim(){
        console.log("yes is Swimming now : ");
    }
}
class Cow extends Animal{
    name="Acer";

    roam(){
        console.log("yes is Roaming now : ");
    }
}

let dog=new Dog();
let fish=new Fish();
let cow=new Cow();
dog.alive();
console.log(dog.color);
fish.alive();
console.log(fish.color);
cow.alive();    