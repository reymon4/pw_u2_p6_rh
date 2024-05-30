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
      studentsList: students
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
    addStudent(){
      this.studentsList.push({name: "New Student", lastName: "New Student"});
    }
  },
});
/* Nombre único de la app a través del numeral */
app.mount("#myApp");
