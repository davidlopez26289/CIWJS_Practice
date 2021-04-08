// let student = {
//     name: "David",
//     height: "504",
//     id: 222,
//     color: "black"
// };

// for(let key in student){
//     // console.log(key);
//     console.log(student[key]);
// }
// let person = {}
// let info = prompt("What is your Name?");
// person["name"] = info;

// let createStudent = function(name,id){
//     return{
//         name,
//         id
//     };
// }

// let David = createStudent("David", "222");

// console.log(David);

// let Catheryn = {
//     grade1: 70,
//     grade2: 27,
//     grade3: 27,
//     grade4: 13,
//     grade5: 60,
//     grade6: 3,
//     grade7: 29,
//     grade8: 23,
//     grade9: 67,
//     grade10: 16,
//     grade11: 18,
//     grade12: 70,
//     grade13: 76,
//     grade14: 13,
//     grade15: 26,
//     grade16: 30,
//     grade17: 41,
//     grade18: 16,
//     grade19: 33,
//     grade20: 26,
//     grade21: 59,
//     grade22: 1,
//     grade23: 57,
//     grade24: 3,
//     grade25: 61,
//     grade26: 78,
//     grade27: 10,
//     grade28: 22,
//     grade29: 62,
//     grade30: 72,
//     grade31: 59,
//     grade32: 82,
//     grade33: 59,
//     grade34: 84,
//     grade35: 20,
//     grade36: 34,
//     grade37: 52,
//     grade38: 81,
//     grade39: 76,
//     grade40: 41,
//     grade41: 18,
//     grade42: 90,
//     grade43: 41,
//     grade44: 31,
//     grade45: 16,
//     grade46: 15,
//     grade47: 68,
//     grade48: 44,
//     grade49: 47,
//     grade50: 25,
//     grade51: 20,
//     grade52: 20,
//     grade53: 46,
//     grade54: 44,
//     grade55: 14,
//     grade56: 79,
//     grade57: 81,
//     grade58: 2,
//     grade59: 62,
//     grade60: 88,
//     grade61: 29,
//     grade62: 34,
//     grade63: 27,
//     grade64: 45,
//     grade65: 26,
//     grade66: 59,
//     grade67: 75,
//     grade68: 73,
//     grade69: 31,
//     grade70: 82,
//     grade71: 85,
//     grade72: 39,
//     grade73: 13,
//     grade74: 14,
//     grade75: 9,
//     grade76: 52,
//     grade77: 49,
//     grade78: 27,
//     grade79: 4,
//     grade80: 30,
//     grade81: 38,
//     grade82: 21,
//     grade83: 10,
//     grade84: 73,
//     grade85: 44,
//     grade86: 23,
//     grade87: 24,
//     grade88: 13,
//     grade89: 69,
//     grade90: 35,
//     grade91: 63,
//     grade92: 8,
//     grade93: 57,
//     grade94: 59,
//     grade95: 79,
//     grade96: 76,
//     grade97: 74,
//     grade98: 81,
//     grade99: 96,
//     grade100: 13  
// };
//  var total = 0;
// for(key in Catheryn){
//    total += Catheryn[key];     
// }
// var avg = total / 100;
// console.log(avg);

// function Student(name, id, gradelevel, currentgrade) {
//         this.name = name;
//         this.id = id;
//         this.gradelevel = gradelevel;
//         this.currentgrade = currentgrade;
//         this.admin = false;
//         this.graduate = function () {
//                 return this.gradelevel++;
//         }
//         this.whiteList = function(){
//                 this.admin = true;
//         }
//         this.setGrade = function(value) {
//                 this.currentGrade = value;
//         }
// };

// let David = new Student('David Lopez', 222, 12, 85);

// console.log(David);

class Rectangle {
        constructor(width, length){
            this.width = width;
            this.length = length;
        }
        get area(){
                return this.width * this.length;
        }
    }
    const rect1 = new Rectangle(10, 5);
    const rect2 = new Rectangle(6, 12);
    const rect3 = new Rectangle(15, 20);
    //how to access getter method
    const area = [rect1.area, rect2.area, rect3.area];

    class Circle {  
        set radius(radius){
            this._radius = radius;
            this.area = 3.14 * Math.pow(radius, 2);
            this.circumference = 2*(3.14)*radius;
      }
    }
    const circ = new Circle(); 