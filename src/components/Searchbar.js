import React from'react';
import logo from '../images/logo1.jpg'
function Searchbar(){
    return(
        <>
        <div className='row com mt-4'>
            <div className='col-md-2 '>
                
                 <img src={logo} height={100}/>
            </div>
            <div className='col-md-5 '>
            <input type="text" placeholder='search' className="form-control dis" style={{ borderRadius: "30px 30px 30px 30px"}}  ></input>

            </div>
            <div className='col-md-2 '>
            <p className='mb-2  ' > <i class="fa-solid fa-shop"></i> Become a Seller</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2 ' > <i class="fa-regular fa-user"></i> Ishu</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa-solid fa-cart-shopping"></i>Cart</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa-solid fa-ellipsis-vertical"></i>  </p>
            </div>
        </div>
        </>
        );
    }
    export default Searchbar;
