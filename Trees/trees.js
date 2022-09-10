//Al inicio el arbol tiene un nodo, si tiene hijos seran dos, asi mismo, si sus hijos tienen hijos seran dos. Es decir, siempre que un hijo tenga hijos tendra solamente dos hijos (trabalenguas tu huevada)

//El nodo mayor siempre se ubicara a la derecha de su padre, si deseas ver mejor esto mira la imagen png llamada balance tree en la cual se podra observar como los nodos mayores se encuntran a la derecha. Con esto se pueden hacer estrategias de programacion

//Tambien existen unbalanced tree pero eso es muy complicado de explicar

//      15
//   6          25
// 1  15  20   175

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
