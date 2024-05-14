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