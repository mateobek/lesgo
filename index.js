/*function remChar(str, ind){
    let arr = [];

    arr = str.split('');
    for(let i = 0; i < arr.length; i++ ){
        if(i == ind){
            arr.splice(i, 1);
        }
    }
    return arr.join(" ");
}
console.log(remChar("Otorinolaringologija", 4));
*/

/*function swapStr(str){
    let arr = [];
    if(str.length >= 1){
        let temp = [];
        arr = str.split('');
        temp += arr.pop();
        temp += arr.shift();
        temp.split('');
        arr.unshift(temp[0]);
        arr.push(temp[1]); 
        return arr;
    }
    else{
        console.log('Write a longer string');
    }
}

console.log(swapStr('Jaysus'));
*/


/*
                Add the first char to front and end of a given string 

function addChar(str){
    let arr = [];
    arr = str.split('');
    arr.push(arr[0]);
    arr.unshift(arr[0]);
    return arr;
}
console.log(addChar('Banana'));

*/
/*
function multipleOf(a){
    if(a < 0){
        console.log("Provide a positive number");
    }
    else if(a % 3 === 0){
        console.log("The given number is a multiple of three");
    }
    else if(a % 7 ===0){
        console.log('The given number is a multiple of seven');
    }
    else{
        console.log('The given number is neither a multiple of three nor seven');
    }
}
multipleOf(60);
*/
/*
function start_spec_str(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));
*/



/*

                     //////   Count vowels  ///////

function vowelCount(str){
    let arr = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    arr = str.toLowerCase().split('');
    console.log(arr);
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(arr[i] === vowels[j]){
                count+=1;
            }
        }
    }
    return count;
}

console.log(vowelCount('Banana'));
console.log(vowelCount('Krv'));
console.log(vowelCount('Adidas'));
*/
/*
function draw()
  {
    var canvas = document.getElementById('circle');
    if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d'); 
        var X = canvas.width / 2;
        var Y = canvas.height / 4;
        var R = 50;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.closePath();

        

        ctx.moveTo(205,32);
        ctx.lineTo(300,100);
        ctx.lineTo(395, 32);
        ctx.lineTo(300, 55);
        ctx.closePath();

        ctx.moveTo(300,55);
        ctx.lineTo(300, 100);
        ctx.lineTo(300, 350);
        ctx.lineTo(400,300);
        ctx.moveTo(200,300);
        ctx.lineTo(300,470);
       


        ctx.moveTo(400, 30);
        ctx.lineTo(470, 250);
        ctx.lineTo(400,300);
        ctx.lineTo(300,250);
        ctx.lineTo(200,300);
        ctx.lineTo(130,250);
        ctx.lineTo(200,30);
        ctx.closePath();

        ctx.moveTo(470,250);
        ctx.lineTo(300,470);
        ctx.lineTo(130, 250);
        ctx.closePath();

        ctx.moveTo(400,300);
        ctx.lineTo(300,350);
        ctx.lineTo(200, 300);
        ctx.lineTo(300,470);
        ctx.closePath();


        ctx.moveTo(300, 100);
        ctx.lineTo(350, 150);
        ctx.lineTo(300, 200);
        ctx.lineTo(250, 150);
        ctx.closePath();
        
        ctx.moveTo(325, 125);
        ctx.lineTo(325, 175);
        ctx.lineTo(275,175);
        ctx.lineTo(275, 125);
        ctx.closePath();
        
        ctx.moveTo(300, 125);
        ctx.lineTo(325, 150);
        ctx.lineTo(300, 175);
        ctx.lineTo(275, 150);
        ctx.closePath();

        ctx.moveTo(314, 140);
        ctx.lineTo(314, 160);
        ctx.lineTo(287, 160);
        ctx.lineTo(287, 140);
        ctx.closePath();

        ctx.moveTo(300, 140);
        ctx.lineTo(311, 150);
        ctx.lineTo(300, 160);
        ctx.lineTo(290,150);
        ctx.closePath();

       ctx.moveTo(260,420);
       ctx.bezierCurveTo(200, 500, 400, 500, 340,420);
       
        
        

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000';
        ctx.stroke();

        
    }
};

window.onload = function() {
    draw();
  };

*/
/*
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

for(let i = 0; i < library.length; i++){
    let book = library[i].title + ' by ' + library[i].author;
    if(library[i].readingStatus){
        console.log("Already read " + book);
    } else{
        console.log("You still haven't read " + book);
    }

}

*/
/*
let Cylinder = {
    height: 10,
    radius: 5
};
let h = Cylinder.height, r = Cylinder.radius;

function volOfCyl(h , r){
    return (Math.PI * (r * r) * h);
}

console.log(volOfCyl(h, r).toFixed(4));
*/
/*
function circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI + this.radius * this.radius;
    };

    this.perimeter = function(){
        return 2*Math.PI*this.radius;
    };
}

let c = new circle(3);
console.log('Area = ', c.area().toFixed(2));
console.log('perimeter = ', c.perimeter().toFixed(2));
*/


/// čača ///

"use strict";

const report = [];
function Artikal(){}
                //// f za nova pica ////
function Beverage(name, desc, price, amMil){
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.amMil = amMil;
};
                //// f za novu hranu ////
function Food(name, desc, price, amCal){
    this.name = name,
    this.desc = desc,
    this.price = price,
    this.amCal = amCal;
};
                //// f za ispis racuna ////
function receipt(typeOfProduct, product, ammount){
    let sumPrice = 0;
    if(!typeOfProduct){
        return false;
    } else{
        sumPrice = product.price * ammount;
        report.push(sumPrice);
    }
    return sumPrice;
}
                //// cafe objekt - open - close ////
let cafeBar = {
    open: false,
    cafeOpen: function(){
        if(!this.open){
            console.log('The Bar is closed, opening now.');
            this.open = true;
        } else {
            console.log('The Bar is already open.');
        }
    },
    cafeClose: function(){
        if(this.open){
            console.log('The Bar is closing now.');
            this.open = false;
        } else {
            console.log('The Bar is already closed.');
        }
    }
};
                //// objekt ljudi za vl, kon, gost ////
let People = {
    vlasnik:{
        ime: 'Caca',
        prezime: 'Cacic',
        getReport: function(arr){
            let suma = 0;
            for(let i = 0; i < arr.length; i++){
                suma += arr[i];
            }
            return ('Danasnja zarada: ' + suma);
        }
    },
    konobar:{
        Mico:{
            ime: 'Mislav',
            prezime: 'Bago'
        },
        Pajser:{
            ime: 'Paka',
            prezime: 'Program'
        },
    },
    gost: function(ime, prezime){
        this.ime = ime;
        this.prezime = prezime;
    }
};

Food.prototype = Object.create(Artikal.prototype);
Food.prototype.constructor = Food;

Beverage.prototype = Object.create(Artikal.prototype);
Beverage.prototype.constructor = Beverage ;

let cocaCola = new Beverage('CocaCola', 'Gazirano', 15, 200);
let krafna = new Food('Krafna', 'Cokolada', 5, 400);

console.log(cafeBar.cafeOpen());
receipt(Food, krafna, 2);
receipt(Beverage, cocaCola, 3);
receipt(Food, krafna, 1);
receipt(Beverage, cocaCola, 5);
console.log(People.vlasnik.getReport(report));
