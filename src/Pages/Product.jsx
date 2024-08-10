// react
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// react router dom
import { useParams } from 'react-router-dom'
// Icon
import { IoStar, IoEyeOutline } from "react-icons/io5";
import { Spinner } from "flowbite-react";
import { CiHeart } from "react-icons/ci";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

// react router dom
import { useNavigate } from "react-router-dom";


export default function Product() {
    const [isHover, setIsHover] = useState(null);
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [Favorite, setFavorite] = useState(() => {
        const savedFavorite = JSON.parse(localStorage.getItem("Favorite")) || [];
        return savedFavorite;
    });
    const [Cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
        return savedCart;
    });
    const [Count, setCount] = useState(0);
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, [id]);
    const fetchProduct = async () => {
        try {
            const savedProducts = JSON.parse(localStorage.getItem("products"));
            if (savedProducts) {
                const product = savedProducts.find((p) => p.id === parseInt(id));
                setProduct(product);
                setCount(product.count);
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    if (!product) {
        return <div className='bg-zinc-900 text-white h-screen flex justify-center items-center text-4xl font-thin gap-2'>
            {Loading()}
            <p>Loading...</p>
        </div>
    }
    // render Stars
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

    // time
    const DateComponent = ({ timestamp }) => {
        const date = new Date(timestamp);
        const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');

        return (
            <div>
                <p>{formattedDate}</p>
            </div>
        );
    };

    // Loading 
    function Loading() {
        return <Spinner aria-label="Default status example" />;
    }

    // count
    const handleIncrement = () => {
        setCount(Count + 1);
        product.count++;
    }
    const handleDecrement = () => {
        if (Count > 1) {
            setCount(Count - 1);
            product.count--;
        }
    }

    // Add to cart
    // useEffect(() => {
    //     localStorage.setItem("Cart", JSON.stringify(Cart));
    //     alert("Product added to Cart successfully")
    // }, [Cart]);

    // cart
    const handleAddToCart = () => {
        const existingProduct = savedProducts.find((p) => p.id === product.id);
        if (existingProduct) {
            if (localStorage.getItem("Cart")) {
                setCart(() => {
                    const productInCart = Cart.find((p) => p.id === product.id);
                    let updatedCart;

                    if (productInCart) {
                        updatedCart = Cart.map((item) =>
                            item.id === product.id ? { ...item, count: item.count + Count } : item
                        );
                    } else {
                        updatedCart = [...Cart, { ...existingProduct, count: Count }];
                    }
                    localStorage.setItem("Cart", JSON.stringify(updatedCart));
                    return updatedCart;
                });
                alert("Product added to Cart successfully")
            } else {
                alert("Product added to Cart successfully")
                localStorage.setItem("Cart", JSON.stringify([{ ...existingProduct, count: Count }]));
            }
        } else {
            alert("Product not found in inventory");
        }
        window.location.reload();
    }
    // favorite
    const handleFavoriteToggle = () => {
        const existingProduct = savedProducts.find((p) => p.id === product.id);
        if (existingProduct) {
            if (localStorage.getItem("Favorite")) {
                setFavorite(() => {
                    const productInFavorite = Favorite.find((p) => p.id === product.id);
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
    }
    const handleFavoriteToggle2 = (id) => {
        const existingProduct = savedProducts.find((p) => p.id === id);
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
    }

    const openProduct = (id) => {
        console.log(id)
        localStorage.getItem('email') ? (
            navigate(`/products/${id}`)
        ) : (
            navigate('/SignUp')
        );
    }
    // console.log(product);
    return (
        <div>
            {
                <div className="px-10 py-5 md:py-10 md:px-12 lg:px-20">
                    <div className='space-y-10'>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className={`flex items-center gap-5 overflow-x-scroll ${product.images.length === 1 ? "justify-center" : ""}`}>
                                {product.images.map((img, i) => {
                                    return (
                                        <img key={i} src={img} alt={product.title} width="100%" className='bg-zinc-100 p-2 w-1/2 max-h-52' />
                                    )
                                })}
                            </div>
                            <div className='space-y-5'>
                                <div className='space-y-5'>
                                    <div className='space-y-2 text-2xl'>
                                        <h1 className='font-bold'>{product.title}</h1>
                                        <div className=" flex items-center gap-3 text-sm">
                                            <div className=" flex items-center gap-1">
                                                {renderStars(product.rating)}
                                            </div>
                                            <div className='flex gap-2'>
                                                <div className='text-xs'>({product.reviews.length} Reviews)</div>
                                                <div className='text-xs'>|</div>
                                                <div className='text-xs text-emerald-400'>{product.availabilityStatus}</div>

                                            </div>

                                        </div>
                                        <p>${product.price}</p>
                                    </div>
                                    <p className='text-sm'>{product.description}</p>
                                </div>
                                <hr />
                                <div className='space-y-5'>
                                    <div className='flex justify-between items-cente'>
                                        <div className='flex items-center'>
                                            <div className='p-1 border-2 border-black h-10 flex justify-center items-center rounded-s-md px-2' onClick={handleDecrement}><FaRegWindowMinimize />
                                            </div>
                                            <div className='border-black border-y-2 h-10 flex justify-center items-center w-16'>
                                                {Count}
                                            </div>
                                            <div className='p-1 border-2 rounded-e-md flex justify-center items-center h-10 px-2 bg-red-600 border-red-600 text-white' onClick={handleIncrement}><FaPlus />
                                            </div>
                                        </div>
                                        <div className='border text-white bg-red-600 py-2 px-10 rounded-md'>
                                            <button onClick={handleAddToCart}>Buy Now</button>
                                        </div>
                                        <div onClick={handleFavoriteToggle} className='p-1 border rounded-md border-black w-10 h-10 flex justify-center items-center text-xl'><CiHeart /></div>
                                    </div>
                                    <div className='border border-black rounded-md'>
                                        <div className='px-5 py-2 flex items-center gap-5 border-b border-black'>
                                            <FaShippingFast className='text-3xl' />
                                            <div className='space-y-1'>
                                                <p className='font-bold'>Shipping and Delivery</p>
                                                <p>{product.shippingInformation}</p>
                                            </div>
                                        </div>
                                        <div className='px-5 py-2 flex items-center gap-5'>
                                            <GiReturnArrow className='text-3xl' />
                                            <div className='space-y-1'>
                                                <p className='font-bold'>   Return Policy</p>
                                                <p>{product.returnPolicy}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='grid gap-5 md:grid-cols-2'>
                            <div className='md:border-r-2 md:pr-5 space-y-3 text-zinc-700'>
                                <h2 className='font-bold text-xl text-black'>Product Specifications</h2>
                                <div className='space-y-1'>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Category</div>
                                        <div>{product.category}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Brand</div>
                                        <div>{product.brand}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Warranty</div>
                                        <div>{product.warrantyInformation}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Weight</div>
                                        <div>{product.weight}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Width</div>
                                        <div>{product.dimensions.width}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Height</div>
                                        <div>{product.dimensions.height}</div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='font-bold'>Depth</div>
                                        <div>{product.dimensions.depth}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:pl-5 space-y-3 text-zinc-700'>
                                <h2 className='font-bold text-xl text-black'>Reviews</h2>
                                <div className='flex flex-wrap gap-2'>
                                    {product.reviews.map((review, i) => {
                                        return (
                                            <div key={i} className='border rounded-md p-5 text-[10px] '>
                                                <div className=''>
                                                    <div className=' flex gap-2 items-center'>
                                                        <div>{review.reviewerName}</div>
                                                        <div className='flex gap-1'>
                                                            {renderStars(review.rating)}
                                                        </div>
                                                    </div>
                                                    {<DateComponent timestamp={review.date} />}
                                                </div>
                                                <div className='font-bold text-base'>{review.comment}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className='py-5 space-y-3'>
                        <div className="flex gap-3 items-center">
                            <div className="bg-red-700 w-4 h-7 rounded-md"></div>
                            <p className="text-red-700 text-xs font-bold">Related Products</p>
                        </div>
                        <div className="flex gap-5 overflow-x-scroll overflow-y-hidden  h-64">
                            {
                                savedProducts.filter((productRelated) => productRelated.category === product.category && productRelated.id !== product.id)
                                    .map((productRelated, i) => {
                                        return (
                                            <div>
                                                <div key={i} className="flex-shrink-0 w-52 h-60 ">
                                                    <div className="bg-zinc-200 rounded-md flex justify-center items-center relative">
                                                        <img src={productRelated.images[0]} alt="" className="max-h-40"
                                                            onMouseEnter={() => { setIsHover(i); }} onMouseLeave={() => { setIsHover(null) }} />
                                                        <div className={`absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center text-[10px] rounded-b-md ${isHover === i ? "" : "hidden"}`} onMouseEnter={() => { setIsHover(i); }} onMouseLeave={() => { setIsHover(null) }}>
                                                            Add to cart
                                                        </div>
                                                        <div className="absolute space-y-2 top-2 right-2">
                                                            <div onClick={() => handleFavoriteToggle2(productRelated.id)} className='p-0.5  rounded-full bg-white text-sm'><CiHeart /></div>
                                                            <div></div>
                                                            <div onClick={() => openProduct(productRelated.id)} className='p-0.5  rounded-full bg-white text-sm'><IoEyeOutline /></div>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm grid gap-1">
                                                        <p>{productRelated.title}</p>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-red-700">${productRelated.price}</p>
                                                        </div>
                                                        <div className=" flex gap-1">
                                                            {renderStars(productRelated.rating)}

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })

                            }
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}