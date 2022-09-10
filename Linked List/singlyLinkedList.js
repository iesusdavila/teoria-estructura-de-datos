// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

/*Informacion general de una  linked list (lista enlazada): En cada nodo estara el valor y la referencia, la referencia significa el lugar a donde ira despues. No es como un arreglo porque es:

-Dinamico: Cada vez que se agrega un nuevo elemento no se vuelve a crear como si pasa en los arreglos

-Acceso secuencial: Para ingresar a un elemento de la lista enlazada se tiene que recorrer toda la lista, en los arreglos podemos ingresar a cualquier valor de forma aleatoria sin la necesidad de pasar por todo el arreglo

-No es contiguo: Los elementos no estan uno detras de otro sino que los elementos estan ubicados de forma aleatoria en lugares de memoria vacios, en los arreglos los elementos estan ubicados uno tras de otro

-Ocupa mucha memoria: Ocupa mucha memoria porque se tiene que colocar tanto el valor como la referencia, en los arreglos solo se coloca el valor

mas informacion: https://levelup.gitconnected.com/array-vs-linked-list-data-structure-c5c0ff405f16 */

/*Clase que nos permitira instanciar nodos para linked list */
class Node {
  constructor(value) {
    //No puede iniciar instanciar vacio
    this.value = value; //El valor sera igual al valor ingresado
    this.next = null; //El valor siguiente es nulo porque solo se puede ingresar de uno en uno
  }
}

/*Clase que nos permitira instanciar linked list */
class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value, //El valor sera igual al valor ingresado
      next: null, //El valor siguiente es nulo porque solo fue ingresado un valor
    };
    this.tail = this.head; //La raiz es igual a la cabecera porque solo se tiene un nodo, a medida que se vayan añadiendo nuevos nodos la raiz ira cambiando
    this.length = 1; //Inicia la longitud del linked list en uno porque se crea al inicio una linked list con un nodo
  }

  //Permite colocar nodos al final del linked list
  append(value) {
    //Se crea un objeto Nodo con el valor ingresado
    const newNode = new Node(value);
    //El siguiente nodo de nuestra linked list ahora sera nuestro nuevo valor
    this.tail.next = newNode;
    //El nuevo nodo ingresado sera la raiz del linked list debido a que sera colocado al ultimo
    this.tail = newNode;
    //La longitud del linked list aumenta en uno
    this.length++;

    return this;
  }

  //Permite colocar nodos al inicio del linked list
  prepend(value) {
    //Se crea un objeto Nodo con el valor ingresado
    const newNode = new Node(value);
    //Como el nodo ingresado estara al inicio entonces el siguiente nodo sera el nodo que estaba previamente al inicio (la cabecera)
    newNode.next = this.head;
    //La cabecera sera el nuevo nodo ingresado
    this.head = newNode;
    //La longitud del linked list aumenta en uno
    this.length++;
  }

  //Permite colocar nodos en cualquier posicion del linked list
  /*Procedimiento que se llevara a cabo:

  1.- Leer el puntero de la posicion del nodo anterior a donde lo queremos colocar usando un metodo creado llamado getIndex, es decir, si se quiere colocar un nuevo nodo en la posicion 3, entonces se leera el puntero del nodo 2.

  2.- Crearemos un puntero el cual apuntara a la misma referencia del puntero del paso anterior. Siguiendo el mismo ejemplo anterior, se creara un puntero que apunte a la misma referencia del nodo 2.

  Explicacion del paso 2: Si se le asigna la referencia del puntero del nodo que se encuentra en la posicion anterior a la posicion donde vamos a añadir nuestro nodo, entonces el nodo que se encuentra despues de donde vamos a añadir nuestro nodo sera eliminado de la memoria por el Garbage Collector de JavaScript. Usando el ejemplo anterior, si la referencia del nodo 2 pasa al nuevo nodo, entonces el nodo que estaba ubicado en la posicion del nuevo nodo sera eliminado porque ya no cuenta con una referencia hacia el.

  3.- El valor siguiente (firstPointer.next) del nodo que se encuentra en la posicion anterior a nuestro nodo agregado, sera el nuevo nodo.

  4.- El valor siguiente (newNode.next) del nodo creado sera el puntero que se creo en el paso 2 para que haga referencia al nodo que se encontraba en la posicion donde colocamos nuestro nodo.

  Explicacion del paso 3 y 4: Con el paso 2 se asegura que el paso 3 y 4 funcionen correctamente debido a que si no se realiza el paso 2 en cuanto se realice el paso 3 el nodo que se encontraba en la posicion donde estara nuestro nuevo nodo sera eliminado. El paso 4 nos aseguramos que el puntero creado en el paso 2 se asigne al valor siguiente de nuestro nodo creado para respetar la cronologia.

  */
  insert(index, value) {
    //Si la posicion donde sera ingresada supera la longitud de nuestro linked list se lo agrega al final
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      //Si la posicion es 0 entonces se hace uso del metodo prepend para ubicar el nodo al inicio del linked list
      return this.prepend(value);
    } else {
      //Se crea un objeto Nodo con el valor ingresado
      const newNode = new Node(value);
      //Leer el puntero de la posicion anterior
      const firstPointer = this.getIndex(index - 1);
      //Creamos un puntero que apunte a la misma referencia del nodo anterior
      const holdingPointer = firstPointer.next;
      //El valor siguiente del nodo anterior sera igual al nodo agregado
      firstPointer.next = newNode;
      //El valor siguiente del nodo agregado sera igual al puntero que se creo (holdingPointer)
      newNode.next = holdingPointer;
      //La longitud del linked list aumenta en uno
      this.length++;

      return this;
    }
  }

  //Permite obtener cierto nodo a partir de la posicion
  getIndex(index) {
    //El linked list inicia en la posicion 0
    let counter = 0;
    //La cabecera (o primero nodo) sera el nodo que se vaya iterando
    let currentNode = this.head;

    //Ejecutar un while mientras el contador sea diferente al indice buscado
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    //Se devuelve el nodo encontrado a partir del indice
    return currentNode;
  }
}

let myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList);

myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.append(10);

myLinkedList.prepend(17);

console.log(myLinkedList);
