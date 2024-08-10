// icon
import { IoStar, IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Spinner } from "flowbite-react";

// rect
import { useState, useEffect } from "react";
// react router dom
import { useNavigate } from "react-router-dom";

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


export default function Beauty() {
    // at hover image
    const [isHover, setIsHover] = useState(null);
    const navigate = useNavigate();
    const openProduct = (id) => {
        localStorage.getItem('email') ? (
            navigate(`/products/${id}`)
        ) : (
            navigate('/SignUp')
        );
    }
    const [products, setProducts] = useState(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        return savedProducts
    });
    const [Cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
        return savedCart;
    });
    const [Favorite, setFavorite] = useState(() => {
        const savedFavorite = JSON.parse(localStorage.getItem("Favorite")) || [];
        return savedFavorite;
    });
    // cart
    const handleAddToCart = (id) => {
        const email = localStorage.getItem('email');
        if (email) {
            const existingProduct = products.find((p) => p.id === id);
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
        } else {
            navigate('/SignUp');
        }
    }

    // favorite
    const handleFavoriteToggle = (id) => {
        const email = localStorage.getItem('email');
        if (email) {
            const existingProduct = products.find((p) => p.id === id);
            if (existingProduct) {
                if (localStorage.getItem("Favorite")) {
                    setFavorite(() => {
                        const productInFavorite = Favorite.find((p) => p.id === id);
                        console.log(Favorite)
                        if (productInFavorite) {
                            alert("Product already added to Favorite");
                        } else {
                            alert("Product added to Favorite successfully")
                            let updatedFavorite = [...Favorite, existingProduct];
                            localStorage.setItem("Favorite", JSON.stringify(updatedFavorite));
                            return updatedFavorite;
                        }
                    });
                } else {
                    alert("Product added to Favorite successfully")
                    localStorage.setItem("Favorite", JSON.stringify([existingProduct]));
                }
            } else {
                alert("Product not found in inventory");
            }
            window.location.reload();
        } else {
            navigate('/SignUp');
        }
    }

    if (!products) {
        return <div className='bg-zinc-900 text-white h-screen flex justify-center items-center text-4xl font-thin gap-2'>
            {Loading()}
            <p>Loading...</p>
        </div>
    }
    // Loading 
    function Loading() {
        return <Spinner aria-label="Default status example" />;
    }
    return (
        <div>
            <p className="flex justify-center items-start bg-black text-white p-5 ">Beauty Products</p>
            <div className="flex flex-wrap justify-center items-center gap-5 px-10 py-5 md:py-10 md:px-12 lg:px-20">
                {
                    products.filter(product => product.category === 'beauty').map((product, i) => (
                        <div>
                            <div key={i} className="flex-shrink-0 w-52 h-60 ">
                                <div className="bg-zinc-200 rounded-md flex justify-center items-center relative">
                                    <img src={product.images[0]} alt="" className="max-h-40"
                                        onMouseEnter={() => { setIsHover(i); }} onMouseLeave={() => { setIsHover(null) }} />
                                    <div onClick={() => { handleAddToCart(product.id); }} className={`absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center text-[10px] rounded-b-md ${isHover === i ? "" : "hidden"}`} onMouseEnter={() => { setIsHover(i); }} onMouseLeave={() => { setIsHover(null) }}>
                                        Add to cart
                                    </div>
                                    <div className="absolute space-y-2 top-2 right-2">
                                        <div onClick={() => handleFavoriteToggle(product.id)} className='p-0.5  rounded-full bg-white text-sm'><CiHeart /></div>
                                        <div></div>
                                        <div onClick={() => openProduct(product.id)} className='p-0.5  rounded-full bg-white text-sm'><IoEyeOutline /></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="text-sm grid gap-1">
                                    <p>{product.title}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-red-700">${product.price}</p>
                                    </div>
                                    <div className=" flex gap-1">
                                        {renderStars(product.rating)}

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}