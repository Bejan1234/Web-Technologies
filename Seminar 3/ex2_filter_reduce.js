//TO DO
// implementați o funcție care primește ca parametrii 
//un array de numere și un număr și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.


  const array = [ 1,2,3,4,5,6,7,8]
  const numar = 4;

  function sumaDivizibila(array,numar){
    let suma = 0;
    for(let x of array){
      if( x % numar == 0){
        suma += x;
      }
    }
     return suma;
  }
   console.log (sumaDivizibila(array,numar));