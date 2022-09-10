//El primero en entrar es el primero en salir, contrario al stack

//Se crea una clase Node para instanciar objetos y ahorrar codigo
class Node {
  //Recibe como parametro el valor
  constructor(value) {
    this.value = value;
    //Como se crea solo con un valor entonces su siguiente valor es next
    this.next = null;
  }
}

/*La clase Queues nos permite tener un control acerca del flujo de algo, lo primero en entrar es lo primero en salir. 
Como analogia se puede tomar la fila para ir al banco, las primeras personas que llegan son las primeras personas en ser atendidas.*/
class Queue {
  //Tiene 3 datos: la longitud, el primer nodo (first), ultimo nodo  (last)
  constructor() {
    this.first = null;
    this.last = null;
    //La longitud inicia en 0 porque para crearlos no necesitamos agregar elementos
    this.length = 0;
  }

  //Devuelve el primer nodo
  peek() {
    return this.first;
  }

  //Permite ingresar un nuevo nodo al final
  enqueue(value) {
    //Creamos una objeto de la clase Node
    const newNode = new Node(value);
    //Si la longitud del queues es 0 el nodo pasa a hacer el primer y ultimo nodo a la vez, mientras se espera que se ingresen nuevos nodos
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //El ultimo nodo su valor siguiente sera el nodo agregado
      this.last.next = newNode;
      //El ultimo nodo pasa a hacer el nodo agregado
      this.last = newNode;
    }
    //Como se agrega un nuevo nodo se aumenta la longitud del queues
    this.length++;

    return this;
  }

  //Permite eliminar el primer nodo
  dequeue() {
    //Si no hay nodos no se puede eliminar nada, por ende, se retornar un null
    if (!this.first) {
      return null;
    }
    //Si el primer nodo es igual al ultimo nodo, es decir, solo hay un nodo en el stack el ultimo nodo sera nulo
    if (this.first === this.last) {
      this.last = null;
    }
    //El primer nodo al ser elimina ahora el primer nodo pasa a hacer el valor siguiente del nodo que se encontraba primero antes de eliminarse
    this.first = this.first.next;
    //Como se elimina un nodo la longitud del queues decrece
    this.length--;

    return this;
  }
}

const myQueue = new Queue();
