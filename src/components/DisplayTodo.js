

const DisplayTodo = (props) => {

    const deleteTodoFromChild = (id) => {
        props.deleteTodoInParent(id);
    }
    const listTodo = props.chilData;

    return (
        <div>

            <div style={{ 'color': 'red' }}>List Todo: </div>

            {listTodo && listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => deleteTodoFromChild(item.id)}>
                        {item.name}
                    </div>
                )
            })}

        </div>
    )
}

export default DisplayTodo;