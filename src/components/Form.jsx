
import { Form ,FormControl ,Button} from 'react-bootstrap';
import './Form.scss'
import List from './List';
import { useContext, useRef, useState } from 'react';
import { ListContext } from '../TodoListContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';





const FormTodo = () => {
    const{todos, setTodos} = useContext(ListContext)
    const [isInputEmpty,setIsInputEmpty] =useState(false)
    const id = uuidv4()
    console.log(todos)

const inputTodo = useRef()




    const submitHandler =(e)=>{
e.preventDefault()
if(!inputTodo.current.value){
 setIsInputEmpty(true)
 return
}
 setTodos([{id,text:inputTodo.current.value},...todos])
 setIsInputEmpty(false)




    }
  return (
 
    <Form onSubmit={submitHandler}  className='form'>
      <FormControl style={{borderColor:isInputEmpty ? "red":''}} ref={inputTodo} type='text'></FormControl>
      <Button className='submitBtn' type='submit' variant="dark">Add</Button>
     <Link to={'/'}> <Button className='cancelBtn' variant="danger">Cancel</Button> </Link>
      <List />
    </Form>
 
  

  );
};

export default FormTodo;
