import { MdDelete } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { WlText, WlImage, WlTable, WlTableCol, WlEmpty } from "../../../styles/pages/wishlist-page";
import { Button } from "../../../styles/widgets/widgets"
import { useEffect, useState } from "react";
import Empty from '../../../assets/images/emptywishlist.jpg'
import { retriveDetails } from "../../../services/storage/details";
import { ApiPostService } from "../../../services/api/api-services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router";
import Loading from "../../utils/loader";
const WishList = () => {
    const [item, setItem] = useState(["initial"])
    const [visible, setVisible] = useState(true)
    const [page, setPage] = useState(2)
    let history = useHistory()
    useEffect(() => {
        fetchAll()
        setVisible(false)
    }, [])

    async function fetchAll() {
        let user = await retriveDetails()
        let res = await ApiPostService(process.env.REACT_APP_WISHLIST + "/" + user.id + "/" + 1 + "/")
        setItem(res.data)
    }
    async function DeleteWishList(i, id) {
        let user = await retriveDetails()
        await ApiPostService(process.env.REACT_APP_REMOVE_WISHLIST_URL + "/" + user.id + "/" + id + "/")
        let newItem = [...item]
        newItem.splice(i, 1)
        setItem(newItem)
        toast("removed successfully", { style: { background: "#F1797B", textAlign: 'center', color: "#ffffff" } })
    }
    return (
        <div className="" style={{ backgroundColor: '#FFF9FD' }}>
            <div className="row container-fluid">
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
                        <h5 className="m-2">My Wishlist
                            ({item.length})
                        </h5>
                    </div>
                    {
                        visible &&
                        <Loading />
                    }

                    <div className="m-2 conatainer">
                        {item.length !== 0 && item[0] !== "initial" &&
                            <>
                                <WlTable>
                                    <tbody>
                                        {
                                            item.map((product, i) => (

                                                <tr className="border-bottom" key={product.id}>
                                                    <WlTableCol style={{ alignContent: 'flex-start' }}>
                                                        <WlImage src={product.image} alt="" />
                                                    </WlTableCol>
                                                    <WlTableCol style={{ verticalAlign: 'top', width: '80%' }}>
                                                        <WlText className="">
                                                            <p>{product.name}</p>
                                                            <span >
                                                                <b style={{ letterSpacing: '3px', marginRight: '5px' }}>₹{product.buyingPrice}</b>
                                                                <del className="text-secondary">₹{product.originalPrice}</del>
                                                            </span>
                                                            {
                                                                product.unitInStock > 0 ?
                                                                    <p className="text-success mt-3">In stock</p>
                                                                    :
                                                                    <p className="text-danger">Out of stock</p>
                                                            }
                                                        </WlText>
                                                    </WlTableCol>
                                                    <WlTableCol style={{ verticalAlign: 'top' }}>
                                                        <WlText className="col-lg-1 col text-secondary" type="icon">
                                                            <MdDelete style={{ width: '30px', height: '30px' }}
                                                                onClick={() => DeleteWishList(i, product.id)} />
                                                            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar rtl={false} pauseOnFocusLoss pauseOnHover />
                                                        </WlText>

                                                    </WlTableCol>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </WlTable>

                                <div className="d-flex justify-content-center m-4">
                                    <button className="text-primary border-0" onClick={async () => {
                                        let user = await retriveDetails()
                                        let res = await ApiPostService(process.env.REACT_APP_WISHLIST + "/" + user.id + "/" + page + "/")
                                        if (res.data.length === 0)
                                            toast("No more wishlist you added", { style: { background: "#79f1b9", textAlign: 'center', color: "#000000" } })
                                        else {
                                            setPage(page + 1)
                                            setItem(it => [...it, ...res.data])
                                        }
                                    }}>Load more...</button>
                                </div>
                            </>
                        }{
                            item.length === 0 && item[0] !== "initial" &&
                            <div className="" style={{ flexDirection: 'column' }} >
                                <div className="text-center">
                                    <WlEmpty src={Empty} alt="" />
                                </div>
                                <div className="text-center">
                                    <WlText>Ooopps!!! Your wishlist is empty</WlText>
                                    <WlText>Explore more and shorlist some items.</WlText>
                                    <Button className="mt-3" onClick={() => history.push('/')}>Continue Shopping</Button>
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
