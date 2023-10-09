import { useState } from "react";

const AddNewProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');
    const [isShơwDetail, setIsShơwDetail] = useState(true);

    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }

        let productList = localStorage.getItem("productList");


        if (productList) {
            let arr = JSON.parse(productList);
            arr.push((object))
            localStorage.setItem('productList', JSON.stringify(arr));

        } else {
            localStorage.setItem('productList', JSON.stringify([object]));

        }


        setName('');
        setPrice(0);
        setSize(0);
        setColor('');
        // console.log(">> check productList: ", JSON.parse(productList))
    }

    // const isShow = false;

    const handleHideShow = (status) => {
        // cách viết dài
        // let currentStatus = isShơwDetail
        // if (isShơwDetail == true) currentStatus = false;
        // if (isShơwDetail == false) currentStatus = true;

        // cách viết ngắn
        setIsShơwDetail(status)
    }



    return (
        <div>

            {isShơwDetail === true &&

                < fieldset >

                    <legend>Add A New Product</legend>

                    <div className="input-product">
                        <label>Name: </label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className="input-product">
                        <label>Price: </label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)} />
                    </div>


                    <div className="input-product">
                        <label>Size: </label>
                        <input value={size} type="text" onChange={(event) => setSize(event.target.value)} />
                    </div>

                    <div className="input-product">
                        <label>Color: </label>
                        <input value={color} type="text" onChange={(event) => setColor(event.target.value)} />
                    </div>

                    <br></br>

                    <div>
                        <button onClick={() => handleClickBtn()}> + Add New</button>
                    </div>

                </fieldset>

            }

            {isShơwDetail === true && <div onClick={() => handleHideShow(false)}>
                <button>Hide this form</button>

            </div>}

            {isShơwDetail === false && <div onClick={() => handleHideShow(true)}>
                <button>Show this form</button>
            </div>}

            <div>
                List Product:
                <div>{localStorage.getItem('productList')}</div>
            </div>


        </div >
    )
}

export default AddNewProduct;