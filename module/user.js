


define(function () {

    var User = (function () {
        var getAge = (name,birthday) => Math.floor((Date.now() - new Date(birthday).getTime()) / 1000 / 60 / 60 / 24 / 365);
        return {
            getAge,
            greeting: function greeting(name,age) {
                console.log(`Hello, it's ${name} here. I'm ${age} years old.`)
            }
        }

    })()

    return User
});