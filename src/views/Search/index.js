import { useState } from "react";
import SearchBox from "./components/SearchBox";
import data from '../../data/user.json'
import "./style.css"
import SearchResults from "./components/SearchBox/SearchResults";

export default function Search (){
    // constante de estado CSS de elementos en la parte superior
    const [isAtTop, setIsAtTop] = useState(false);
    // const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([]);
    // setResul(contendra el RESULTADO de map)
    // funcion para el botton CERRAR 
const handleCloSearch = () =>{
  setIsAtTop(false); 
  setResults([])
};
// funcion para el botto BUSCAR
const handleSearchClick = (searchText) =>{
        setIsAtTop(true);
        if(data?.length){

// convirtiendo el parametro searchTExt a que reciba minusculas = searchText<inus
            const searchTextMinus = searchText.toLowerCase();

         const filterData = data.filter((value) =>{
                return (
                    // devuelve e valor que cumplira las indicaciones de..
                    //  convierne a minuscula metodo de incluye este texto...
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus) 


                )
            });
            setResults(filterData);
        }
        
};

// const handleSearchClick = () =>{
//     //  cambiar el valor por defecto de salse a TRUE
//     setIsAtTop(!isAtTop);

// };

// const handleCloseClick = () =>{
//     setIsAtTop(!isAtTop);

// };
console.log(results)
    return(

    <div>
        {/* isAtTOP es un valor inicial de useState (false) por defecto */} 
        {/* aplicando CONDICIONALES A STYLOS */}
        {/* siempre va se class= .search */}
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
    
        <SearchBox  
        onSearch={handleSearchClick} 
        onClose={handleCloSearch} 
        isSearching={isAtTop}
        />
        
        <SearchResults results={results} isSearching={isAtTop}
        />
        </div>
        
    </div>
);

}