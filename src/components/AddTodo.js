const AddTodo = (props) => {

    // Cách viết ngắn
    const { todo, setTodo, handleClickBtn } = props;


    //Cách viết dài
    // const todo = props.todo;
    // const setTodo = props.setTodo;
    // const handleClickBtn = props.handleClickBtn;

    return (
        <div>

            <label>Todo's Name</label>
            <br></br>
            {/* gán lại giá trị cho state */}

            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} />

            <button type="submit" onClick={() => handleClickBtn()}>Submit</button>
            <br></br>


        </div>
    )
}

export default AddTodo;