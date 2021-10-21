(function (global, factory) {
  
    if (typeof define === "function" && define.amd) {
      
      // AMD 
      define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
      
      //commonJS
      factory(exports);
    } else {
      
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      
      // 指派到全域
      global.logUmd = mod.exports;
    }
  
  })(this, function (exports) {
  
    function logUmd() {
      console.log("UMD 模組系統範例");
    }
  
    // 輸出模組內容
    exports.logUmd = logUmd;
  });