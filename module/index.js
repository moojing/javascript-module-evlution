
require(['./user','jquery','./umd'], function (user,jquery,umd){

    var user1 = user.getUser('Mujing', '1995/01/04') 
    console.log('jquery',jquery)
    umd.logUmd() 
    // Other codes here 
});