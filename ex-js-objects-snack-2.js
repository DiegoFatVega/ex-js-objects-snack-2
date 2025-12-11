//code Question 1

/* il primo console.log stampa 'Double Cheese Burger' e il secondo stampa la stessa ConstantSourceNode,
dato che gli oggetti sono dei reference type e non stiamo applicando dei metodi appropriati per creare
una copia di essi */

/* in quel codice non stiamo creando nessuna copia */ /* Correzione: 1 oggetto, la mia risposta si riferiva ad una copia, non all`oggetto */

//code Question 2

/* il primo console.log stampa "cheese". Qui possiamo vedere che è stato usato l`operatore spread per creare una
copia dell'oggetto, però non copia oggetti/array annidati */ /*correzione: stampa "Salad", dato che dopo la duplicazione viene sostituito il primo elemento in ingredients*/

/* dopo l`esecuzione di questo snippet, sono stati creati due oggetti: hamburger e secondBurger */

//code Question 3

/* In questo codice sono stati creati 3 oggetti: hamburger, secondBurger e thirdBurger, dato che è stato
utilizzato "structuredClone" come metodo per copiare gli oggetti */  /*correzione: 3 oggetti, uno hamburger, due maker e 3 restaurant, poi diventano 9 con secondburger e thirdburger*/


//code Question 4

/* il miglior metodo per clonare l`oggetto "chef" è utilizzare l'operatore "spread (...)", dato che l`oggetto non ha 
array/oggetti annidati e contiene al suo interno una funzione che con i metodi JSON e structuredClone non verrebe clonato */

/* il metodo migliore per clonare l`oggetto "restaurant" è lo "StructuredClone", dato che il metodo è in grado di copiare oggetti
complessi e mantiene invariabile lo stato della proprietà "Date". In caso contrario, se usassimo il JSON.PARSE quella proprietà
verrebbe convertita in una stringa */