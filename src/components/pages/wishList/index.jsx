import { MdDelete } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { WlText, WlImage, WlTable, WlTableCol, WlEmpty } from "../../../styles/pages/wishlist-page";
import { Button } from "../../../styles/widgets/widgets"
import data from '../../../api/CartProducts.json'
import { useEffect, useState } from "react";
import Empty from '../../../assets/images/emptywishlist.jpg'
const WishList = () => {
    const [item, setItem] = useState(data)
    useEffect(() => {
        document.getElementById('wishlist').setAttribute("style", "color:hsla(328, 75%, 45%, 1) !important;");
    }, [])

    useEffect(() => {
        setItem(item)
    }, [item])

    return (
        <div className="container" style={{ backgroundColor: '#FFF9FD' }}>
            <div className="row container">
                <WlText className="col-2 m-2 container bg-white" display="none" >

                    <div className="mt-3">
                        <span className="row">
                            <FaUserCircle className="col" style={{ marginRight: '5px', width: '30px', height: '30px' }} />
                            <span className="col">
                                <p>Hello,</p>
                                <p className="mt-2">PurpleMart's customer</p>
                            </span>
                        </span>
                    </div>
                </WlText>
                <div className="col m-2 container bg-white" >
                    <div className="border-bottom pt-2 pb-2">
                        <h5 className="m-2">My Wishlist ({item.length}) </h5>
                    </div>
                    <div className="m-2 conatainer">
                        {item.length !== 0 ?
                            <WlTable>
                                <tbody>
                                    {
                                        item.map((product, i) => (

                                            <tr className="border-bottom" key={product.id}>
                                                <WlTableCol style={{ alignContent: 'flex-start' }}>
                                                    <WlImage src={product.url} alt="" />
                                                </WlTableCol>
                                                <WlTableCol style={{ verticalAlign: 'top' }}>
                                                    <WlText className="">
                                                        <p>{product.productName}</p>
                                                        <span >
                                                            <b style={{ letterSpacing: '3px', marginRight: '5px' }}>₹{product.price}</b>
                                                            <del className="text-secondary">₹{product.originalPrice}</del>
                                                        </span>
                                                    </WlText>
                                                </WlTableCol>
                                                <WlTableCol style={{ verticalAlign: 'top', textAlign: 'right' }}>
                                                    <WlText className="col-lg-1 col text-secondary" type="icon">
                                                        <MdDelete style={{ width: '30px', height: '30px' }}
                                                            onClick={() => {
                                                                let newItem = [...item]
                                                                newItem.splice(i, 1)
                                                                setItem(newItem)
                                                            }} />
                                                    </WlText>
                                                </WlTableCol>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </WlTable>
                            :
                            <div className="" style={{ flexDirection: 'column' }} >
                                <div className="text-center">
                                    <WlEmpty src={Empty} alt="" />
                                </div>
                                <div className="text-center">
                                    <WlText>Ooopps!!! Your wishlist is empty</WlText>
                                    <WlText>Explore more and shorlist some items.</WlText>
                                    <Button className="mt-3">Continue Shopping</Button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList;
