import { useState } from "react";
import "./style.css"
// COMPONENTE HIJO
export default function SearchBox ({onSearch, onClose,isSearching}){

    const [searchText, setSearchText] = useState("");




    // funcion que limpia el input, aplica seatch text y coloca string vacio
    const handleSearchClick =()=> {
        
        setSearchText("");
        onClose();
    }

    return(
    
        <div className="search-box">
            <h2 className="search-box-title">buscador de pesronakl </h2>
            <div className="search-box-buttons">

                 <label>
                    <input
                        value={searchText}
                        onChange={( {target : {value}}) => setSearchText(value)}
                        className="serach-box-input"

                    />
                 </label>
                 {/* dentro de  onClick={} se pasa la FUNCION sin ()  ==== onClick={onClose} */}
           
           {/* la funcion onSearchText (recibeArgumento) */}
            <button onClick={()=> onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
            {/* atributo (serachTExt) es un estado que se modifica con su setSearchText */}
          {isSearching &&  <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>} 

            {/* la funcion handleSearchClick esta definida en este componente
            y aplica el modificador de estado de serachText
            y ejecuta el onClose() */}
            </div>
             

        </div>
    );
}