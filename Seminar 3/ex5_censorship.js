//implementați cenzurarea unui text printr-o funcție. Funcția primește un șir de caractere și un dicționar sub forma unui array.
// De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"] funcția va produce "javascript e**e minunat".


const mesage = "Javascript este minunat"
function cenzurare(text, dictionar){
  return text.split(" ")
  .map(cuvant => {
    if(dictionar.includes(cuvant)){
      if(cuvant.length < 2) return cuvant;
      return cuvant[0] + "*".repeat(cuvant.length-2)+ cuvant[cuvant.length-1];
    }
    return cuvant;
  })
  .join(" ");
}

console.log(cenzurare(mesage,'este'));
