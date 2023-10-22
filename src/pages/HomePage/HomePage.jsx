import heroImg from '../../assets/images/kottu-main.png'
import about1Img from '../../assets/images/about-1.jpg'
import about2Img from '../../assets/images/about-2.jpg'
import about3Img from '../../assets/images/about-3.jpg'
import about4Img from '../../assets/images/about-4.jpg'
import menu1Img1 from '../../assets/images/black-tea.png'
import menu1Img2 from '../../assets/images/chai-tea.png'
import menu1Img3 from '../../assets/images/ginger-tea.png'
import menu1Img4 from '../../assets/images/herble-tea.png'
import menu2Img1 from '../../assets/images/chinese-noodles.png'
import menu2Img2 from '../../assets/images/dum-biriyani.png'
import menu2Img3 from '../../assets/images/egg-hoppers.png'
import menu2Img4 from '../../assets/images/egg-roti.png'
import menu2Img5 from '../../assets/images/fried-rice.png'
import menu2Img6 from '../../assets/images/hoppers.png'
import menu2Img7 from '../../assets/images/kottu 3.png'
import menu2Img8 from '../../assets/images/kottu.png'
import menu2Img9 from '../../assets/images/KOTTU2.png'
import menu2Img10 from '../../assets/images/lumprais.png'
import menu2Img11 from '../../assets/images/momos.png'
import menu2Img12 from '../../assets/images/momos2.png'
import menu2Img13 from '../../assets/images/mutton-rolls.png'
import menu2Img14 from '../../assets/images/patties.png'
import menu2Img15 from '../../assets/images/puri.png'
import menu2Img16 from '../../assets/images/shawarma.png'
import menu2Img from '../../assets/images/menu-2.jpg'
import menu3Img from '../../assets/images/menu-3.jpg'
import menu4Img from '../../assets/images/menu-4.jpg'
import menu5Img from '../../assets/images/menu-5.jpg'
import menu6Img from '../../assets/images/menu-6.jpg'
import menu7Img from '../../assets/images/menu-7.jpg'
import menu8Img from '../../assets/images/menu-8.jpg'
import team1Img from '../../assets/images/team-1.jpg'
import team2Img from '../../assets/images/team-2.jpg'
import team3Img from '../../assets/images/team-3.jpg'
import team4Img from '../../assets/images/team-4.jpg'
import testimonial1Img from '../../assets/images/testimonial-1.jpg'
import testimonial2Img from '../../assets/images/testimonial-2.jpg'
import testimonial3Img from '../../assets/images/testimonial-3.jpg'
import testimonial4Img from '../../assets/images/testimonial-4.jpg'
import foodAlergy from '../../assets/images/food-alergy.jpg'
import qr from '../../assets/images/qr.jpg'
import '../../assets/styles/style.css'
import Receipt from '../../pages/Receipt'
import Foods from '../../pages/Foods'



function HomePage() {

    return (
        
            <div className="container-xxl bg-white p-0">
        
        {/*<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
             <div className="spinner-border text-primary" style={{width: '3rem;', height: '3rem;'}} role="status">
                <span className="sr-only">Loading...</span>
            </div> 
        </div>*/}
        


    
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="header_kottu m-0"><i className="fa fa-utensils me-3"></i>ROYAL KOTTU</h1>
                     
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="menu.html" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {/* <a href="" className="btn btn-primary py-2 px-4">Book A Table</a> */}
                </div>
            </nav>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            {/* <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a> */}
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src={heroImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       


        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                    <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    {/* <small className="text-body">Special</small> */}
                                    <h6 className="mt-n1 mb-0">Meals</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3" data-bs-toggle="pill" href="#tab-1">
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    {/* <small className="text-body">Popular</small> */}
                                    <h6 className="mt-n1 mb-0">Beverages</h6>
                                </div>
                            </a>
                        </li>
                        
                        {/* <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu1Img1} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Black Tea</span>
                                                <span className="text-primary">£0.5</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu1Img2} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chai Tea</span>
                                                <span className="text-primary">£2</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu1Img3} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Ginger Tea</span>
                                                <span className="text-primary">£0.5</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu1Img4} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Herble Tea</span>
                                                <span className="text-primary">£0.5</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-6">
                                    <Receipt image={menu1Img1} title={"Black Tea"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Receipt image={menu1Img2}  title={"Chai Tea"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Receipt image={menu1Img3}  title={"Ginger Tea"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Receipt image={menu1Img4}  title={"Herble Tea"}/>
                                </div>
                                 {/* <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu5Img} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu6Img} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu7Img} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu8Img} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Burger</span>
                                                <span className="text-primary">$115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {/* <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img1} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chinese Noodles</span>
                                                <span className="text-primary">£5.99</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img2} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Dum Biriyani</span>
                                                <span className="text-primary">£7.99</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img3} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Egg Hoppers</span>
                                                <span className="text-primary">£2.5</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img4} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Egg Roti</span>
                                                <span className="text-primary">£3</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img5} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Fried Rice</span>
                                                <span className="text-primary">£4.99</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img6} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Hoppers</span>
                                                <span className="text-primary">£1.5</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img7} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Kottu</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img8} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Kottu</span>
                                                <span className="text-primary">£4.99</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                            
                        
                            
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img9} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Kottu</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img10} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Lumprais</span>
                                                <span className="text-primary">£14.99</span> *
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img11} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Momos</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img12} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Momos</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img13} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Mutton Rolls</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img14} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Patties</span>
                                                <span className="text-primary">£0.50</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img15} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Puri</span>
                                                <span className="text-primary">£4.49</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={menu2Img16} alt="" style={{"width": "80px"}}/>
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Shawarma</span>
                                                <span className="text-primary">£115</span>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-lg-6">
                                    <Foods image={menu2Img1}  title={"Chinese Noodles"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img2}  title={"Dum Biriyani"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img3}  title={"Egg Hoppers"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img4}  title={"Egg Roti"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img5}  title={"Fried Rice"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img6}  title={"Hoppers"}/>
                                </div>
                                
                                <div className="col-lg-6">
                                    <Foods image={menu2Img8}  title={"Hoppers"}/>
                                </div>
                                
                                <div className="col-lg-6">
                                    <Foods image={menu2Img10}  title={"Lumprais"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img11}  title={"Momos"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img12}  title={"Momos"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img13}  title={"Mutton Rolls"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img14}  title={"Patties"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img15}  title={"Puri"}/>
                                </div>
                                <div className="col-lg-6">
                                    <Foods image={menu2Img16}  title={"Shawarma"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h5>Our Story</h5>
                                <p>The story of ROYAL KOTTU began when a group of dedicated food enthusiasts came together with a shared dream – to redefine the way people experience food. Founded by MR.Chamara , our journey is a tale of culinary exploration, innovation, and a commitment to delivering flavors that leave an indelible mark.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                <h5>Our Food Philosophy</h5>
                                <p>Our culinary philosophy is simple yet profound: we believe in using the freshest, 
                                    locally sourced ingredients to craft dishes that ignite the senses. Every dish that 
                                    leaves our kitchen is a work of art, a masterpiece of taste, texture, and presentation that tells a story of its own.
                                    Indian and Sri Lankan methods mainly using for our culinary service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                <h5>Our Menu</h5>
                                <p>Our menu is a celebration of diverse cuisines from India and Sri Lanka, carefully curated to satisfy every palate. Whether you're a fan of classic comfort food or crave bold, exotic flavors, you'll find something to delight your taste buds at ROYAL KOTTU. Our chefs continually experiment with new ingredients and techniques to bring you dishes that are as exciting as they are delicious.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>Our Team</h5>
                                <p>Behind every exceptional dining experience at ROYAL KOTTU is a dedicated team of culinary artists and hospitality experts. From our talented chefs who craft each dish with love and precision to our friendly and knowledgeable servers who make you feel at home, our team is the backbone of our success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


        
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1Img}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about2Img} style={{'marginTop': '25%'}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3Img}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4Img}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">WELCOME TO ROYAL KOTTU – WHERE FOOD MEETD PASSION At ROYAL KOTTU</h1>
                        <p className="mb-4">We are culinary artisans driven by a deep passion for creating extraordinary dining experiences. 
Located in the Hatfield AL10 9AY, we going  testament to the belief that 
great food has the power to bring people together and create lasting memories.</p>
                        {/* <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> */}
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">20+</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="mb-0">Food Items</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        
        


       
        {/* <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="video">
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 className="text-white mb-4">Book A Table Online</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label htmlFor="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="select1">
                                          <option value="1">People 1</option>
                                          <option value="2">People 2</option>
                                          <option value="3">People 3</option>
                                        </select>
                                        <label htmlFor="select1">No Of People</label>
                                      </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Special Request" id="message" style={{"height": "100px"}}></textarea>
                                        <label htmlFor="message">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


        
        {/* <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team1Img} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team2Img} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team3Img} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team4Img} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        


        
        {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial1Img} style={{"width": "50px", "height": "50px"}}/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial2Img} style={{"width": "50px", "height": "50px"}}/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial3Img} style={{"width": "50px", "height": "50px"}}/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial4Img} style={{"width": "50px", "height": "50px"}}/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
         
            <div className="border border-3 border-primary">
                <img className="img-fluid" src={foodAlergy} alt=""/>
            </div>
        

        
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary  text-primary fw-normal mb-4">Our Services</h4>
                        
                        <p className="mb-2">Catering For Wedding Parties</p>
                        <p className="mb-2">Catering For Family Events</p>
                        <p className="mb-2">Catering For Birthday Parties</p>
                        <p className="mb-2">Catering For Other Events</p>
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary  text-primary fw-normal mb-4">Reach Us</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Mosquito Way, Hatfeild, Hertfordshire, AL10 9 AY, </p>
                        <p className="mb-2">United Kingdom</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+44 7377 603975</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+44 7361 434890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>royalkottu@gmail.com</p>
                        <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="https://twitter.com/lchamahatfield"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/royalkottu.uk"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/lchama_hatfield/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/royalkottu.uk"><i className="fab fa-google"></i></a>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary  text-primary fw-normal mb-4">Opening</h4>
                        <p className="mb-2">Monday: 09AM - 09PM</p>
                        <p className="mb-2">Tuesday: 09AM - 09PM</p>
                        <p className="mb-2">Wednesday: 09AM - 09PM</p>
                        <p className="mb-2">Tursday: 09AM - 09PM</p>
                        <p className="mb-2">Friday: 09AM - 09PM</p>
                        <p className="mb-2">Saturday: 09AM - 09PM</p>
                        <p className="mb-2">Sunday: 09AM - 09PM</p>
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary  text-primary fw-normal mb-4">Privacy and Policies</h4>
                        
                            <div className="text-center">
                                <img className="flex-shrink-0 img-fluid rounded img-fluid" src={qr} alt="" style={{"width": "80px"}}/>
                            </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Evan Tech</a>, All Right Reserved. 
							 <a className="border-bottom" href="https://htmlcodex.com"></a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/* <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="https://twitter.com/lchamahatfield"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/royalkottu.uk"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/lchama_hatfield/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/royalkottu.uk"><i className="fab fa-google"></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
        
        
    );
}

export default HomePage;