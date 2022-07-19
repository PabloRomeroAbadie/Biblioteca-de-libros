//store es la convencion de nombre que le vamos a asignar a un archivo que nos permita manejar el estado de nuestra aplicacion, en este caso usaremos un hook pero store es como comunmente le vamos a llamar cuando el archivo tiene toda la info para manejar un estado de forma global.
import { createContext, useContext, useState } from 'react';

//creamos un contexto que necesitamos para este estado, para definir como estar integrado
const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {}
});

const Store = ({children}) => {
    //A pesar de que usare useContext para manejar el estado, sigo necesitando useState y useEffect para manejar el ciclo de vida de este componente
    const [items, setItems] = useState([]);

    function createItem(item){
        //hago una copia y luego agrego un item
        const temp = [...items];
        temp.push(item);

        setItems(temp)
    }

    function getItem(id){
        //obtengo el elemento
        const item = items.find(item => item.id === id);
        return item;
    }

    function updateItem(item){
        const index = items.find(i => i.id === item.id);
        const temp = [...items];
        //actualizo el elemento en esa posicion
        temp[index] = {...item};
    }

    return (
        <AppContext.Provider value={{
            //con esto estamos haciendo accesible a cualquier componente dentro de nuestra aplicacion no solamente a nuestro useState items sino a las funciones tambien.
            items,
            createItem,
            getItem,
            updateItem,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default Store;

export function useAppContext(){
    return useContext(AppContext)
}