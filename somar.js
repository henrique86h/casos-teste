function somar(a, b) {

    a = parseFloat(a);
    b = parseFloat(b);


    if ((isFinite(a) == false) || (isFinite(b) == false)) {
      return "Os parâmetros devem ser números"
       
    }else{
  
      return a + b
  }
}
  
  module.exports = somar