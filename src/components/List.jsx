import { Button, ListGroup } from "react-bootstrap"
import './List.scss'
import { useContext } from "react"
import { ListContext } from "../TodoListContext"
import { Link } from "react-router-dom"
const List = () => {
const {todos,setTodos} = useContext(ListContext)


const deleteHandler = (id)=>{

    const filterTodos = todos.filter(item => item.id!==id)

setTodos(filterTodos)
}

  return (
<ListGroup className="list">
{ todos && todos.map(item =><ListGroup.Item className="listItem" variant="success">
        <p>{item.text}</p>
        <div>
       <Link to={item.id} > <Button className='submitBtn' variant="dark">Edit</Button> </Link>
      <Button onClick={()=> deleteHandler(item.id)} className='cancelBtn' variant="danger">Delete</Button>
        </div>
   
      </ListGroup.Item>)}



</ListGroup>
  )
}

export default List