const Navbar = () =>{
    return(
        <div className="flex justify-evenly text-lg mt-10 mb-60" >
            <div>
                <h1 className="text-amber-400">FoodHouse</h1>
            </div>
            <a href="#">HOME</a>
            <a href="#">RESTAURANT</a>
            <a href="#">SERVICES</a>
            <a href="#">CART</a>
            <a href="#">Sign In</a>
        </div>
    )
}

export default Navbar;