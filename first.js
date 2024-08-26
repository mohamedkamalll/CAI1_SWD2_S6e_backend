//Defualt export you dont need to tell the app which method you want to run 
// const f = function () {
//   console.log("hello world");
// };

// module.exports = f;

const foo = require('./foo')



const name = () =>{
     console.log("mohamed")
}


module.exports = {first :name}

module.exports.f = () =>{
     console.log(foo)
     console.log("hello")
}

module.exports.m = () =>{
     console.log("World")
}

