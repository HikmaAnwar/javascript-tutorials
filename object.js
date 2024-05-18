var myCar = new Object();
myCar.make = "ford";
myCar.model = "mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"])

myCar["do i like?"] = "i hate my car.";
console.log(myCar["do i like?"]);

function showProps(obj, objName) {
    var result ="";
    for(var i in obj){
        // obj.hasOwnProperty() is used to filter
        // out properties from the objects protyoe chain
        if(obj.hasOwnProperty(i)) {
            result += objName + "." + i + "=" + obj[i] + "\n";

        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));

// creation: object intializzer
var myHonda = {
    color: "red", wheels: 4, engine: {
        cylinder: 4, size: 2.2}
    };

    // creation: constructer fuction
    function car(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    var yourCar = new car( "chevy", "malibu",1993);
    var anotherCar = new car("mazda", "miata", 1990);
    console.log(yourCar.model);
    yourCar.color = "black";
    console.log(yourCar.color);

    // creation Object.create
    var Animal = {
        type: "Invertebrates",
        displayType: function(){
            console.log(this.type);
        }
    }

    var animal1 = Object.create(Animal);
    animal1.displayType();

    var fish = Object.create(Animal);
    fish.type = "Fishes";
    fish.displayType();

    
// object: part2 
//  using Objects for lookups
var alpha ={
    1:"z",
    2:"y",
    3:"x",
    4:"w"
};
console.log(alpha[3]);


// remove object properties

let dishes = {
    plates: 8,
    cups: 10,
    forks:39,
    bowls: 15
};


delete dishes.cups;
console.log(dishes);

// testing objects for properties

console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

// accesssing and modifying nested objects

var ourStorage ={
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

// generate an array of all objects keys

console.log(Object.keys(ourStorage));

// object.keys(obj)
// object.values(obj)
// object.enteries(obj)
// create an iterable object from the object

let westeros = {
    cerse: 'lannister',
    arya: 'stark',
    jon: 'snow',
    brienne: 'tarth',
    jorah: 'grey'
}
// for(let prop of arr)
    // foreach() filter() map() reduce()

let keys = Object.keys(westeros);
console.log('keys ' , keys);

let vals = Object.values(westeros);
console.log('vals ', vals);

// both key and value

let enteries = Object.entries(westeros);
console.log('enteries', enteries);