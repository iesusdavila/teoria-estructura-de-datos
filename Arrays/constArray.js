class ModifiedArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    if (this.data[index]) {
      return this.data[index];
    } else {
      return new Error("Indice fuera del rango del Array");
    }
  }

  push(newValue) {
    if (Array.isArray(newValue)) {
      console.log("Error del cojudo: Modificar un array para agregar arrays");
    }
    if (ModifiedArray.isModifiedArray(newValue)) {
      this.data[this.length] = newValue.data; //newValue["data"]
    } else {
      this.data[this.length] = newValue;
    }
    this.length++;
    return this.data;
  }

  pushToStart(newValue) {
    this.shiftIndexStart();
    if (Array.isArray(newValue)) {
      console.log("Error del cojudo: Modificar un array para agregar arrays");
    }
    if (ModifiedArray.isModifiedArray(newValue)) {
      this.data[0] = newValue.data; //newValue["data"]
    } else {
      this.data[0] = newValue;
    }
    return this.data;
  }

  shiftIndexStart() {
    for (let p = this.length; p >= 0; p--) {
      this.data[p] = this.data[p - 1];
    }
    this.length++;
  }

  static isModifiedArray(object) {
    if (object instanceof ModifiedArray) {
      return true;
    } else {
      return false;
    }
  }

  pop() {
    const lastValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastValue;
  }

  delete(index) {
    const value = this.data[index];
    this.shiftIndex(index);
    return value;
  }

  popAtStart() {
    const initialValue = this.data[0];
    this.shiftIndex(0);
    return initialValue;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array1 = new ModifiedArray();
const edades = new ModifiedArray();

edades.push(22);
edades.push(20);
edades.push(23);

array1.push("Iesus");
array1.push("Chris");

array1.push({
  nombre: "Flor",
  edad: 23,
  carrera: "Ing. Quimica",
});

array1.push(["Rene", "Marli"]);
array1.push(edades);

//console.log(array1.get(2));

//console.log(ModifiedArray.isModifiedArray(edades));

//console.log(array1.pop());

// console.log(array1);

// console.log(array1.delete(1));

//console.log(array1.popAtStart());

// array1.pushToStart("Emmita");

// console.log(array1);

// array1.pushToStart("Maxito");

console.log(array1);
