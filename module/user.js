


export const getUser = (name,birthday) => (function (){
    var age = Math.floor((Date.now() - new Date(birthday).getTime())/1000/60/60/24/365);
    return {
        name,
        age: Math.floor(age),
        greeting: function greeting () {
            console.log(`Hello, it's ${name} here. I'm ${age} years old.`) 
        }
    }

})()

 