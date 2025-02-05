let Navbar = () => {
    return (
        <>
            <section className="row py-3 justify-content-center">
                <div className="col-11">
                    <section className="row">
                        <div className="col-1 mt-2">
                            <i className="fa-solid fa-bars navicon"></i>
                        </div>
                        <div className="col d-flex justify-content-between">
                            <form className="d-flex" role="search">
                                <div className="input-group mb-3">
                                    <a href="#"><i className="fa-solid fa-magnifying-glass navinput rounded-start-5 ps-3 h-100" id="searchicon"></i></a>
                                    <input type="text" className="form-control navinput border-start-0 rounded-end-5" placeholder="Search" aria-label="Username" aria-describedby="searchicon" />
                                </div>
                            </form>
                            <div>
                                <i class="fa-solid fa-bell navicon me-3 mt-2"></i>
                                <i class="fa-solid fa-cart-shopping navicon"></i>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Navbar;