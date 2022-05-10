

function Modal(props){
    return <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick = {props.onButtonClick}>Confirm</button>
        <button className="btn" onClick = {props.onButtonClick}>Cancel</button>
    </div>
}

export default Modal;