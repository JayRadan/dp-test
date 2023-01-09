import { Form,Button, FormControl } from "react-bootstrap"


import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext, useRef } from "react"
import { ListContext } from "../TodoListContext"


const EditTodo = () => {
const editInputValue = useRef()

const navigate = useNavigate()
    const {id} = useParams()
    const {todos,setTodos} =useContext(ListContext)
    const findTodo = todos.find(item => item.id ===id)
    console.log(todos);

const submitHandler = (e)=>{

e.preventDefault()
const editTodos = todos.map(item => item.id ===id ? {id,text:editInputValue.current.value} :item)
console.log(editTodos);
 setTodos(editTodos)
navigate('/todos')
}
  return (
    <Form onSubmit={submitHandler} className='form'>
    <FormControl style={{borderColor:'' ? "red":''}} ref={editInputValue} defaultValue={findTodo.text} type='text'></FormControl>
     <Button className='submitBtn' type='submit' variant="dark">Confirm</Button>
    <Link to={'/todos'} > <Button className='cancelBtn' variant="danger">Cancel</Button> </Link>

  </Form>
  )
}

export default EditTodo