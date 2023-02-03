# js-pro
 Proyecto del curso profesional de javascript de platzi

# Guia

## async
```html
<script async src="...">
```
este async permite cargar de forma paralela el script sin detener el procesamiento del DOM

## defer
```html
<script defer src="...">
```
carga el script al final del procesamiento del html

## variable en el scope global en la web
Esta se encuentra en el window.variableGlobal en la consola, aunque no es obligatorio al parecer

## Scope de funciones
Cuando la variable esta solo en el ambito de una funcion

## For y setTimeout
Al tener estos dos, si usamos como referencia la variable del for, debemos usarla con una funcion intermediaria. Esto es porque al retrasar la accion, la accion de setTimeout podria tener una variable del for posterior a la asignada, ya que funciona como referencia. si imprimimos los valores, estos serian todos el ultimo. por ello se encapsula en otra funcion que contenga en su interior el settimeout, ya que el paramentro de esta funcion es una copia del momento. o usar solo el let, ya que opera sobre el block scope y no en el global

```js
function printNumber() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {console.log(i)}, 100);
    }
}
printNumbers(); // 10, 10, 10, 10, 10, 10....
/////////////////////////////////////////////////////
function printNumber() {
    for (var i = 0; i < 10; i++) {
        function eventuallyPrintNumber(n) {
            setTimeout(function() {console.log(n)}, 100);
        }
        eventuallyPrintNumber(i);
    }
}
printNumbers(); // 1, 2, 3, 4....
//////////////////////////////////////////////////////
function printNumber() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {console.log(i)}, 100);
    }
}
printNumbers(); // 1, 2, 3, 4....
```


## Modulos
### module scope
Esto indica que es un modulo, que hace que el script se quede sus variables en solo el archivo. Esto define el tiempo de vida tambien.

En html se puede habilitar para forzar un archivo js con lo siguiente:
```html
<script type="module" src="">
```
Esto hace que solo quede dentro del ambito del archivo sus variable. Ademas, costara acceder desde la consola a las variables.

### Export
Para JS. En el archivo de la clase se usa el export. Es independiente del HTML.
```js
function MediaPlayer(config) {
    //...
}

export default MediaPlayer;
```

### Import
En el archivo donde se quiera utilizar
```js
import MediaPlayer from './MediaPlayer';

const player = new MediaPlayer(...);

button.onclick = () => player.togglePlay();
```

### Exportar una variable
```js
export const foo = "bar";
//
import {foo} from "./...";
```

## Tipos de Scope
- Global Scope
- Function Scope
- Block Scope
- Module Scope

