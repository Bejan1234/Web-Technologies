// implementați o funcție de formatare a unui string care suportă parametrii numiți; 
//de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".

const words = "Un {substantiv} este {adjectiv}";

const formatString = (text, params) => {
  for (const key in params) {
    text = text.replace(`{${key}}`, params[key]);
  }
  return text;
};

console.log(formatString(words,{substantiv:'calut', adjectiv:'dragut'} ))