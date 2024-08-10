// react router dom
import { useNavigate } from "react-router-dom";
// rect
import { useState, useEffect } from "react";
// icon
import { IoStar, IoEyeOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

export default function Liked() {
    // at hover image
    const [isHover, setIsHover] = useState(null);

    const [Favorite, setFavorite] = useState(() => {
        const savedFavorite = JSON.parse(localStorage.getItem("Favorite")) || [];
        return savedFavorite;
    });
    const [Cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
        return savedCart;
    });
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <IoStar
                    key={i}
                    className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                />
            );
        }
        return stars;
    };
    // react router dom
    const navigate = useNavigate();
    const openProduct = (id) => {
        localStorage.getItem('email') ? (
            navigate(`/products/${id}`)
        ) : (
            navigate('/SignUp')
        );
    }

    useEffect(() => {
        localStorage.setItem("Favorite", JSON.stringify(Favorite));
    }, [Favorite])
    // handle remove item
    const handleRemoveItem = (id) => {
        setFavorite((prevFavorite) => prevFavorite.filter((item) => item.id !== id));
        window.location.reload();
    };
    // cart
    const handleAddToCart = (id) => {
        const existingProduct = savedProducts.find((p) => p.id === id);
        if (existingProduct) {
            if (localStorage.getItem("Cart")) {
                setCart(() => {
                    const productInCart = Cart.find((p) => p.id === id);
                    let updatedCart;

                    if (productInCart) {
                        updatedCart = Cart.map((item) =>
                            item.id === id ? { ...item, count: item.count + 1 } : item
                        );
                    } else {
                        updatedCart = [...Cart, { ...existingProduct, count: 1 }];
                    }
                    localStorage.setItem("Cart", JSON.stringify(updatedCart));
                    return updatedCart;
                });
                alert("Product added to Cart successfully")
            } else {
                alert("Product added to Cart successfully")
                localStorage.setItem("Cart", JSON.stringify([{ ...existingProduct, count: 1 }]));
            }
        } else {
            alert("Product not found in inventory");
        }
        window.location.reload();
    }

    return (
        <div className="px-10 py-10 md:py-20 md:px-12 lg:px-20 space-y-10">
            <div className="space-y-10">
                <p>Wishlist ({localStorage.getItem("Favorite") ? (JSON.parse(localStorage.getItem("Favorite")).length) : "0"})</p>
                <div className="flex gap-5 flex-wrap justify-center">
                    {
                        // check if Favorite exist in local storage
                        localStorage.getItem("Favorite") ? (
                            Favorite.map((product, i) => {
                                // console.log("y")
                                return (
                                    <div className="relative">
                                        <div key={i} className="flex-shrink-0 w-40 space-y-1 ">
                                            <div>
                                                <div className="bg-zinc-200 rounded-md relative flex justify-center items-center">
                                                    <img src={product.images[0]} alt="" className="max-h-32" />
                                                </div>
                                                <div onClick={() => handleAddToCart(product.id)} className={` bg-black text-white p-2 text-center text-[10px] rounded-b-md flex justify-center items-center gap-2`}>
                                                    <FaCartShopping />
                                                    Add to cart
                                                </div>
                                            </div>
                                            <div className="text-xs grid gap-1" >
                                                <p>{product.title}</p>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-red-600">${product.price}</p>
                                                </div>
                                                <div className=" flex gap-1">
                                                    {renderStars(product.rating)}

                                                </div>
                                            </div>

                                        </div>
                                        <div onClick={() => handleRemoveItem(product.id)} className="absolute top-2 right-2 text-xs bg-white p-1 rounded-full"><CiTrash />
                                        </div>
                                    </div>
                                )

                            })

                        ) : (
                            <p>No products in your wishlist</p>
                        )
                        // loop through Favorite 
                    }
                </div>
            </div>
            <div className="space-y-5">
                <div className="flex gap-3 items-center">
                    <div className="bg-red-700 w-4 h-7 rounded-sm"></div>
                    <p className="text-xs font-medium">Just For You</p>
                </div>
                <div className="flex gap-5 overflow-x-scroll overflow-y-hidden  h-64">
                    {
                        savedProducts.filter((product) => product.rating > 3.5).map((product, i) => {
                            return (
                                <div className="relative">
                                    <div key={i} className="flex-shrink-0 w-40 space-y-1 ">
                                        <div>
                                            <div className="bg-zinc-200 rounded-md relative flex justify-center items-center">
                                                <img src={product.images[0]} alt="" className="max-h-32" />
                                            </div>
                                            <div onClick={() => handleAddToCart(product.id)} className={` bg-black text-white p-2 text-center text-[10px] rounded-b-md flex justify-center items-center gap-2`}>
                                                <FaCartShopping />
                                                Add to cart
                                            </div>
                                        </div>
                                        <div className="text-xs grid gap-1" >
                                            <p>{product.title}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-red-600">${product.price}</p>
                                            </div>
                                            <div className=" flex gap-1">
                                                {renderStars(product.rating)}

                                            </div>
                                        </div>

                                    </div>
                                    <div onClick={() => openProduct(product.id)} className="absolute top-2 right-2 text-xs bg-white p-1 rounded-full"><IoEyeOutline />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}