const getHash = () => location.hash.slice(1).toLocaleLowerCase() || '/';

export default getHash;

//locations hash accede a la ubicacion de la URL y devuelve la parte de la URL que sigue el simbolo #

//slice(1) elimina el primer caracter de la cadena, que es el simbolo #

// toLocaleLowerCase() convierte la cadena a minusculas

// || '/' devuelve la cadena resultante o una barra diagonal si la cadena esta vacia