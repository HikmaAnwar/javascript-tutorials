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