import React from 'react'
import example from '../example.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <div>
                <div className="container__nav">
                    <div className="logo">
                        <h2>Farmino</h2>
                    </div>
                    <ul className="collect">
                        <li className="item"><Link exact to="/" >Home</Link></li>
                        <li className="item"><Link exact to="/about" >About</Link></li>
                        <li className="item"><Link exact to="/services" >Services</Link></li>
                        <li className="item"><Link exact to="/gallery">Gallery</Link></li>
                        <li className="item"><Link exact to="/contact">Contact</Link></li>
                    </ul>
                    <div className="search">
                        <input />
                    </div>
                </div>
                <img src={example} className="app-logo" alt="logo" />
            </div>
            <div className="section">
                <div className="section__onePart">
                    <ul className="colletion">
                        <li className="item1"><Link exact to="/" >Home</Link></li>
                        <li className="item1"><Link exact to="/about" >About</Link></li>
                        <li className="item1"><Link exact to="/services" >Blog</Link></li>
                        <li className="item1"><Link exact to="/gallery">Single Post</Link></li>
                    </ul>
                    <h2>Minimalist tranding in modern agriculture</h2>
                    <div className="section__info">
                        <p><i>25 Aug 2020</i></p>
                        <p>by Merkulove</p>
                        <p>in Farm</p>

                    </div><br /><br />
                    <div className="section__document">
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quidem minus sint eius nesciunt in saepe rem placeat obcaecati  numquam cumque veritatis, eum ipsam tempora eligendi.
                        </span><br /><br />
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam iste possimus, ex tempore at similique nesciunt amet, deleniti, placeat eveniet perferendis molestiae dicta suscipit. Ea temporibus architecto .
                        </span>
                    </div>
                    <div className="order">
                        <ol>
                            <li>Dolor sit amet consectetur</li>
                            <li>Amet consectetur adipisicing elit</li>
                            <li>Dolor sit amet consectetur elit</li>
                        </ol>
                        <ul>
                            <li>   Dolor sit amet consectetur</li>
                            <li>   Amet consectetur adipisicing elit</li>
                            <li>   Dolor sit amet consectetur elit</li>
                        </ul>
                    </div>

                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quidem minus sint eius nesciunt in saepe rem placeat obcaecati  numquam cumque veritatis, eum ipsam tempora eligendi.
                        </span><br /><br />
                        <img src={example} className="app__logo" alt="logo" />
                    </div>
                    <div>

                        <div className="section__second">
                            <div className="part">
                                <img src={example} className="app_logo" alt="logo" />
                            </div>
                            <div className="second__part">
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam iste possimus, ex tempore at similique nesciunt amet, deleniti, placeat eveniet perferendis molestiae dicta suscipit. Ea temporibus architecto .
                                </span>
                                <span> Polina Podolski</span>
                                <span><i>Customer</i></span>
                            </div>

                        </div>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam iste possimus, ex tempore at similique nesciunt amet, similique nesciunt amet, deleniti, placeat eveniet perferendis molestiae dicta suscipit.
                        </span><br /><br />
                        <div>
                            <div className="section__th">
                                <img src={example} className="logo_app" alt="logo" />
                                <div className="three">
                                    <p>Etiam molestie felis eu ante eleifend,  dolor, sit amet faucibus libero sapien eu risus.  iaculis diam nisi, vel elementum arcu dignissim placerat tellus, eleifend molestie nibh eleifend ut turpis.
                                    </p>
                                    <p>Fusce fermentum mauris id gravida eleifend.  dolor, sit amet faucibus libero sapien eu risus.  , consectetur adipiscing elit.
                                    </p>
                                    <p>Nulla egestas diam elit, et aliquam odio viverra sodales. Maecenas rutrum, metus placerat  sapien eu risus.  iaculis diam nisi, vel elementum arcu faucibus vel.
                                    </p>
                                    <p>Nulla egestas diam elit, et  dolor, sit amet faucibus libero sapien eu risus. Quisque ullamcorper gravida felis.
                                    </p>

                                </div>
                            </div>
                            <br />
                            <p>Nulla egestas diam elit, et aliquam odio  dolor, sit amet faucibus libero sapien eu risus.  iaculis diam nisi, vel elementum arcu faucibus vel. viverra sodales. Maecenas rutrum, metus placerat finibus ornare, velit turpis  felis.
                            </p>
                            <div className="btn_info">
                                <button><p>Farm</p></button>
                                <button><p>Organic</p></button>
                                <button><p>Food</p></button>
                                <button><p>Restaurants</p></button>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="post">
                                <h2>Post Comments</h2>
                                <div className="acc">
                                    <img src={example} className="ap-logo" alt="logo" />
                                    <div className="post_comment">
                                        <div className="account">
                                            <p>Polina Podolski</p>
                                            <p><i>25 aug 2020</i></p>
                                        </div>
                                        <p>Aenean mollis imperdiet leo et vehicula. Fusce fermentum mauris id gravida eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo suscipit massa, ac eleifend sem lobortis sit amet. Curabitur condimentum vehicula eros, quis sollicitudin ligula malesuada sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add">
                                <h2>Add Comment</h2>
                                <input type="text" placeholder="name" className="name" />
                                <input type="email" placeholder="email" className="email" />
                                <input type="text" placeholder="Message" className="message" />
                                <button></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="footer__onePart">
                    <h2>Farmino</h2>
                    <p>Donec placerat, metus sed consectetur viverra, dolor nisl egestas ligula, ac gravida turpis orci eget quam. Aliquam nulla nisi, accumsan id sapien varius, egestas vehicula di
                    </p>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <br />
                    <span>Merkulove © Farmino Template All rights reserved Copyrights 2020</span>
                </div>
                <div className="footer__secondPart">
                    <h2>Be informed!</h2>
                    <h3>Sign up for newsletter</h3>
                    <p>Donec placerat, metus sed consectetur viverra, dolor nisl egestas ligula, ac gravida turpis</p>
                    <input type="email" placeholder="email" className="email-footer" />
                    <button>Submit Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
