//Lo ultimo en entrar es lo primero en salir - LIFO

//Se crea una clase Node para instanciar objetos y ahorrar codigo
class Node {
  //Recibe como parametro el valor
  constructor(value) {
    this.value = value;
    //Como se crea solo con un valor entonces su siguiente valor es next
    this.next = null;
  }
}

/*La clase Stack nos permite tener un control acerca del flujo de algo, lo primero en entrar es lo ultimo en salir. 
Como analogia se puede tomar los platos debido a que si se tiene una columna de platos los primeros platos que coloquemos seran los ultimos en salir, mientras que los ultimos platos que coloquemos seran los primeros en salir*/
class Stack {
  //Tiene 3 datos: la longitud, el nodo superior (top), nodo inferior (bottom)
  constructor() {
    this.top = null;
    this.bottom = null;
    //La longitud inicia en 0 porque para crearlos no necesitamos agregar elementos
    this.length = 0;
  }

  //Devuelve el nodo superior
  peek() {
    return this.top;
  }

  //Permite ingresar un nuevo nodo
  push(value) {
    //Creamos una objeto de la clase Node
    const newNode = new Node(value);
    //Si la longitud del stack es 0 el nodo pasa a hacer el nodo superior e inferior a la vez, mientras se espera que se ingresen nuevos nodos
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //Crea un puntero hacia el nodo superior
      const holdingPointer = this.top;
      //El nodo nuevo sera el nodo superior. Como colocar un nuevo plato sobre la columna de platos
      this.top = newNode;
      //El nodo que antes era superior ahora pasa a estar abajo del nuevo nodo. El plato que antes estaba arriba ahora pasa a estar abajo del nuevo plato que se coloco
      this.top.next = holdingPointer;
    }

    //Incrementa la longitud del stack
    this.length++;

    return this;
  }

  //Elimina el nodo superior
  pop() {
    //Si no hay nodos no se puede eliminar nada, por ende, se retornar un null
    if (!this.top) {
      return null;
    }
    //Si el nodo superior es igual al nodo inferior, es decir, solo hay un nodo en el stack el nodo inferior sera nulo
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //El nodo que estaba abajo del nodo superior ahora pasa a hacer el nodo superior. Es como si eliminamos el plato que estaba arriba, ahora el plato que se encontraba abajo pasara a ser el plato superior
    this.top = this.top.next;
    //Como se elimina un nodo la longitud del stack disminuye
    this.length--;

    return this;
  }
}

const myStack = new Stack();
