



const Carts = ({ carts, setCarts }) => {
    console.log(carts);
    const checkoutHandler = () => {
        setCarts([])
    }
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const rmvBtnHandler = (cartsCard) => {
        console.log(cartsCard);
        const filterCartsElements = carts.filter(c => c.id !== cartsCard.id)
        setCarts(filterCartsElements)


    }





    return (
        <div>
            <div className=' space-y-7'>
                <div className='space-y-1.5 space-y-2 text-center'>
                    <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                    <p className='text-lg font-semibold opacity-70'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold text-green-900 underline text-center'>YOUR CARTS HERE</h1>

                    <div className='px-52 py-8 shadow-2xl rounded-lg mb-3.5 space-y-2 mt-5'>
                        {
                            carts.length == 0 &&
                            <div className="text-center lg:text-5xl font-extrabold opacity-70 m-48">
                                <h1>Your Cart is Empty</h1>
                            </div>
                        }
                        {
                            carts.map((cartsCard) => (
                                <div className='border p-4 rounded-lg bg-amber-50'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center space-x-3 text-2xl font-semibold'>
                                            <img src={cartsCard.img} alt="" />
                                            <div>
                                                <h1>{cartsCard.name}</h1>
                                                <p className='opacity-60'>{cartsCard.price}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => rmvBtnHandler(cartsCard)} className='border border-red-600 rounded-full h-fit  px-2.5 text-lg font-semibold text-red-600'>Remove</button>

                                    </div>

                                </div>
                            ))
                        }
                        <div className='flex mt-4 justify-between bg-violet-500 text-white text-3xl font-bold px-9 py-6 rounded-lg'>
                            <div>Total:</div>
                            <div>${totalPrice}</div>
                        </div>

                        <button onClick={checkoutHandler} className='flex mt-4  justify-between bg-green-500 text-white mt text-3xl font-bold px-9 py-6 rounded-full'>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;