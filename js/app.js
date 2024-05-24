/* Es el archivo de configuración de Vue.js */
console.log(Vue);

const app = Vue.createApp({
  //Option API con programación declarativa (El código JS) backtics
  template: `
    <h1>Hello world from Vue.js </h1>
    <p>{{1+1}}</p> 

    <p>{{[1,2,3,4]}}</p>
    <p>{{true? "Verdadero": "Falso"}}</p>
    `,
});
/* Nombre único de la app a través del numeral */
app.mount("#myApp");
