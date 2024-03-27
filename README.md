# FizzBuzz

## Testo della consegna

 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

 ## Svolgimento

- [x] creo variabile content e background
- [x] creo ciclo che va da 1 a 100 incluso, con contatore che si incrementa
- [X] se contatore è divisibile per 3 && anche per 5
    - content = FizzBuzz
    - background red
    altrimenti se è divisibile per 3
    - content = Fizz
    - background green
    altrimenti se è divisibile per 5
    - content = Buzz
    - background yellow
    altrimenti
    - content = contatore
    - background blue
- [X] creo elemento box
- [X] assegno al box il contenuto 
- [X] inserisco elemento box in pagina
