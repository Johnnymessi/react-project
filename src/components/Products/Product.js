import './Product.scss';
import nuochoa1 from '../../assets/images/nuochoa1.jpg';
import nuochoa2 from '../../assets/images/nuochoa2.jpg';
import nuochoa3 from '../../assets/images/nuochoa3.jpg';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';


//react-image-lightbox

const images = [
    nuochoa1,
    nuochoa2,
    nuochoa3
];

const Product = () => {

    const [currentUpImg, setCurrentUpImg] = useState(nuochoa3);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickPreviewImg = () => {
        setIsOpen(true);
        //js find array
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index);
        setIsOpen(true);
    }

    return (

        <div>

            <div className="product-container">
                <div className="content-left">

                    <div className='img-up'>
                        <img width={750} height={500} src={currentUpImg} onClick={() => handleClickPreviewImg()} />
                    </div>

                    <div className='img-down'>
                        <div className='img-small'>
                            <img width={100} height={100} src={nuochoa3} onClick={() => setCurrentUpImg(nuochoa3)}
                                className={currentUpImg === nuochoa3 ? "active" : ""}>

                            </img>
                        </div>

                        <div className='img-small'>
                            <img width={100} height={100} src={nuochoa2} onClick={() => setCurrentUpImg(nuochoa2)}
                                className={currentUpImg === nuochoa2 ? "active" : ""}>

                            </img>
                        </div>

                        <div className='img-small'>
                            <img width={100} height={100} src={nuochoa1} onClick={() => setCurrentUpImg(nuochoa1)}
                                className={currentUpImg === nuochoa1 ? "active" : ""}>

                            </img>
                        </div>

                    </div>
                </div>

                <div className="content-right">
                    <div className='title'>Nước hoa chiết Dior</div>
                    <div className='price'>3.999.000đ</div>
                    <div className='size'>Dung tích: 12ml</div>

                    <div className='action'>
                        <label>Số lượng</label>
                        <input type='number' min={1} className='quantity' />
                        <button className='buy'>Chọn mua</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    // onCloseRequest={() => this.setState({ isOpen: false })}
                    onCloseRequest={() => setIsOpen(false)}

                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        // this.setState({
                        //     photoIndex: (photoIndex + images.length - 1) % images.length,
                        // })
                    }

                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)
                        // this.setState({
                        //     photoIndex: (photoIndex + 1) % images.length,
                        // })
                    }

                // animationDisabled={true}
                // animationDuration={200}
                />
            )}

        </div>

    )
}

export default Product