/* Es el archivo de configuración de Vue.js */
console.log(Vue);
const students = [
  { name: "Reymon", lastName: "Hidalgo" },
  { name: "Ocho", lastName: "Hidalgo" },
  { name: "Fifty", lastName: "Cent" },
  { name: "Morty", lastName: "Smith" },
  { name: "Goku", lastName: "Son" },
];

const app = Vue.createApp({
  //Option API con programación declarativa (El código JS) backtics
  /*   template: `
    <h1>Hello world from Vue.js </h1>
    <p>{{1+1}}</p> 

    <p>{{[1,2,3,4]}}</p>
    <p>{{true? "Verdadero": "Falso"}}</p>
    `, */
  //Option API de propiedades reactivas
  data() {
    return {
      nombre: "KING",
      message: "Reactive Propertie - Hello World",
      value: 7,
      studentsList: students,
      name: null,
      lastName: null,
    };
  },
  //Option API de métodos
  methods: {
    changeText() {
      this.message = "Changed Text";
    },
    plus() {
      this.value += 15;
    },
    addStudent() {
      console.log(this.name + " " + this.lastName);
      this.studentsList.push({ name: this.name, lastName: this.lastName });
      this.reset();
    },
    reset() {
      this.name = null;
      this.lastName = null;
    },
    /* Desestrucuramos "event" y obtenemos el charCode */
    addStudentByKey({ charCode }) {
      console.log("keypress:" + charCode);
      /* La línea siguiente se elimina por el tema de rendimiento. Y, se optimiza con el modificar de evento */
      /* Es decir: v-on:keypress.enter */
      //if(charCode==13){
      if (this.name !== null && this.apellido !== null) {
        this.addStudent();
      }
      // }
    },
  },
});
/* Nombre único de la app a través del numeral */
app.mount("#myApp");
