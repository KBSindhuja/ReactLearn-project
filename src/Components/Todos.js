// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todos(props) {
//console.log(typeof props)
  const [modalIsOpen , setModalIsOpen] = useState(false)
    function deleteHandler(){
        console.log("Clicked!")
        console.log(props.title)
      setModalIsOpen(true)
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
     <button className="btn" onClick={deleteHandler}> Delete </button> 
      </div>
      { modalIsOpen && < Modal onButtonClick={closeModalHandler}/>}
      { modalIsOpen && < Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}
export default Todos;
