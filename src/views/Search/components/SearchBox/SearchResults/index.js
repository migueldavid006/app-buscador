import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}) {
  return (
    <div style={{
          width: "100%",
          padding:"0rem 2rem 0 rem 2rem",
          }}
    >
          {!results?.length &&  isSearching && <p>No existe resultads</p>}

            {results?.map((value) =>{
                  return(
                        //  <SearchResultsItem key={value.id} name={value.name} email={value.email} phone={value.phone}/>       
                        <SearchResultsItem key={value.id} {...value}/>       
                  
                        );
              })}

    </div>
  );
}
