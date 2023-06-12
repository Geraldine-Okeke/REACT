function ListGroup(){
  let Towns =[
    'Nise',
    'Nibo',
    'Awka',
    'Ifite',
    'Agulu'
  ]
  
  const getMessage = ()=>{
  return (Towns.length === 0 && <p>No item in the list</p> )
  }
  
  
  return ( 
    <>
    <h1>My list</h1>
    {getMessage() }
  <ul className="list-group">
    {Towns.map((item, index)=> <li className="list-group-item" onClick={()=> console.log(item,index)}  key={item}>{item}</li>)}
</ul>
</>
  )
}

export default ListGroup