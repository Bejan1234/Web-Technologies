// scrieți o funcție care primește un array de obiecte și un string și returnează array-ul sortat după cheia specificată prin string.


function sorteazaDupaCheie(arr, cheie) {
    return arr.sort((a, b) => {
        if (a[cheie] < b[cheie]) return -1;
        if (a[cheie] > b[cheie]) return 1;
        return 0;
    });
}
arr = [
  { nume: "Ana", varsta: 25 },
  { nume: "Ion", varsta: 30 },
  { nume: "Maria", varsta: 20 }
]

cheie = "varsta"


console.log(sorteazaDupaCheie(arr,cheie));
