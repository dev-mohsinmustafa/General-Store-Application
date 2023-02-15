import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCalendarEventFill } from "react-icons/bs";
const Nav = () => {
  return (
    <div className='nav'>
        <div className="container">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/"><img src="/images/logo.png" alt="" /></Link>
                </div>
                <div className="nav__right">
                    <Link to="/cart">
                        <div className="basket">
                       < BsFillCalendarEventFill className='cart-icon'/>
                       <span>4</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav