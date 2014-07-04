
(function(gaindaGlobal) {
 
 var Gainda = {

    requiredModules: ['base','graphics','controls','fxml','web','media','swing','swt'],

    isModuleSupported : function(moduleName) {
      for (var i in this.requiredModules)
        if (this.requiredModules[i] == moduleName)
          return true;
        return false;
    },

    run : function( modules, executer ) {
      for (var i in modules) {
        var module = modules[i];
        if(true == this.isModuleSupported(module)) {
          load("fx:" + module + ".js")
        }
      }
        executer($STAGE);
    }

 };

print(gaindaGlobal)
  if (typeof gaindaGlobal.Gainda == 'undefined') 
    gaindaGlobal.Gainda = Gainda;
})(typeof window === 'undefined' ? this : window);