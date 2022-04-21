
export default function SearchResultsItem({name, email, phone}) {
  return (

    <div
    style={{
        backgroundColor:
         "grey", marginTop: "1rem",
          marginBottom:"1rem", padding: 10,
           width:"100%",
             display:"flex"
           , flexDirection:"row"
         }}
   
    >
    
      <p>{name}</p> 
      <p>{email}</p> 
      <p>{phone}</p> 
      

  </div>  
    );
}
