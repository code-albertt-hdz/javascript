const { get } = require("https");
const { resolve } = require("path");

const datos = [
	{
		"id" : 1,
		"title" : "Pelicula 1",
		"year" : 2008
	},
	{
		"id" : 2,
		"title" : "Pelicula 2",
		"year" : 2009
	},
	{
		"id" : 3,
		"title" : "Pelicula 3",
		"year" : 2010
	},
];

/*
const getDatos = () =>{
	return datos;
}
*/

const getDatos  = () => {
	return new Promise ((resolve, reject) =>{ // Retorna un objeto promesa
		if(datos.length === 0 ){
			reject(new Error("No existen datos"))//Devuelve errir con reject
		}
		setTimeout(() => {
			resolve(datos);//Resuelve los datos con resolve despues del tiempo establecido en setTimeout
		},1500)
	})	
}

/*
getDatos()
	.then((datos) => console.log(datos))//Obteniendo datos
	.catch(err => { ...})
*/
/*
const asyncFunction = async () => {	//Funcion de flecha asincronica
	try{//Intenta la ejecucion
		const data = await getDatos(); //Esperar la ejecucion de la funcion para obtener los datos
		console.log(data)
	}catch(err){//Cacha el error
		console.log(err)
	}
}
asyncFunction()//Llamar funcion
*/

/* #### Script del trabajo #### */

asyncFunc(this.id,row,tr).then((datos) => {//Obtenemos los datos con then
	buildTable(datos, row, tr);
})

/*const getFunc = async() => { //24/01/2023
	try{
		const datos = await asyncFunc(this.id,row,tr);//Obtenemos los datos
		buildTable(datos, row, tr);
	}catch(err){
		alerts(2);
		console.log(err)
	}
}*/
//getFunc()//Llamamos la función   

const asyncFunc = (v) => {
	return new Promise((resolve, reject) => {//Retorna un objeto de promesa
		axios.post('/PedidosEntregadosController/getCe','id='+v)
		.then((data) => {//Cuando se resulve, con then podemos llamar los datos con el argumento que recibe el callback
			if(data.data.length>0){
				resolve(data)
			}else{
				reject(alerts(2))
			}
		})
	})
}  