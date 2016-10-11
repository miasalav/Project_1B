/* var thisObject = {

}
var anotherObject = new Object();
var thirdObject = {
    name: "Mia",
    email: "miasalaveria@gmail.com",
    id: 1
};

console.log("thirdObject's name property=" + thirdObject.name);
anotherObject.color="red";
anotherObject.length=4;
console.log("anotherObject's color =" + anotherObject.color);

thisObject.height=181;
thisObject["awesome"]=true;
console.log("this object's awesomeness is" + thisObject.awesome);

if(thisObject["awesome"]==true){
    console.log("you're awesome");
};

*/

var fourthObject = {
    firstName:"Mia",
    lastName: "Salaveria",
    jump: function(howhigh){
        console.log("I jumped" + howhigh + "high");
    }
};

console.log("fourthObject's name is" + fourthObject.name);
console.log("fourthObject's lastname is" + fourthObject["lastName"]);

fourthObject.jump(5);

function Student(firstName, lastName){
    this.firstName= firstName;
    this.lastName= lastName;
}

Student.prototype.jump=function(){
    console.log("I jumped");
}

var mia = new Student("Mia", "Salaveria");
console.log(mia.lastName);
mia.jump();