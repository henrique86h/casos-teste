function somar(a, b) {
    if ((typeof a != 'number') || (typeof b != 'number')) {
       return "Os parâmetros devem ser números"
    }else{
  
    return a + b
  }
}
  
  module.exports = somar