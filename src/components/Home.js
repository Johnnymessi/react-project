//  I. Hook component
import React, { useState } from "react";
import _ from 'lodash';
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {

    const [todo, setTodo] = useState('');
    const [listTodo, setListTodo] = useState([
        { id: 'MKEY 1', name: 'MKEY MONEY' },
        { id: 'MKEY 2', name: 'MKEY CAR' },
        { id: 'MKEY 3', name: 'MKEY LOVER' },
    ]);

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // DOM EVENTS
    const handleClickBtn = () => {

        if (!todo) {
            alert('Todo name is not empty');
            return;
        }

        let todoId = randomIntFromInterval(4, 9999999)
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }



        // cập nhật thêm dữ liệu 
        // spread operator ...
        // Cách viết ngắn
        // setListTodo([...listTodo, todoItem]);

        // Cách viết dài
        // npm install --save-exact lodash@4.17.21 --force
        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
        setTodo("");
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        // filter là hàm giúp thao tác với mảng - đầu vào là mảng và đầu ra trả ra mảng mới
        currentTodoList = currentTodoList.filter(item => item.id !== id);

        // currentTodoList = currentTodoList.filter(item => {
        //     if (item.id !== id) return item;
        // })

        setListTodo(currentTodoList)
    }

    const myInfor = { channel: 'MKEY IT', age: 20 }
    // props, state: Object(key: value)

    return (

        <div>

            <AddTodo

                todo={todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}


            />


            <DisplayTodo
                childData={listTodo}
                name={"Eric"}
                myInfor={myInfor}
                deleteTodoInParent={handleDeleteTodo}
            />




        </div >
    )

}
export default Home;


// import React from "react";

// II. Class component
// class ToddList extends React.Component {

//     // khai báo state
//     state = {
//         name: 'MKEY',
//         // channel: 'MKEY IT'
//     }


//     render() {
//         return (
//             <div>

//                 <label>Name</label>

//                 <input type="text"
//                     // gán lại giá trị cho state

//                     onChange={(event) => this.setState({ name: event.target.value })}

//                 ></input>

//                 <br></br>
//                 Hello name = {this.state.name}

//             </div>
//         )
//     }
// }

// export default ToddList;

