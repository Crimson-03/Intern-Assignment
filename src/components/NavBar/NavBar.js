import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ATG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex mx-auto" role="search">
                        <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalToggleLabel">Create Account</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className='form-control' placeholder='Email' aria-label='Email' />
                                        </div>
                                        <div className="col-12">
                                            <input type="password" className='form-control' placeholder='Password' aria-label='Password' />
                                        </div>
                                        <div className="col-12">
                                            <input type="password" className='form-control' placeholder='Confirm Password' aria-label='CPassword' />
                                        </div>
                                        <div class="d-grid gap-2 my-2">
                                            <button class="btn btn-primary rounded-pill" type="button">Create Account</button>
                                            <button class="btn btn-outline-secondary rounded-pill" type="button">Sign Up with Facebook</button>
                                            <button class="btn btn-outline-secondary rounded-pill" type="button">Sign Up with Foofle</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Already Have an Account, Sign In!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalToggleLabel2">Sign In</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control" placeholder='Password' id="exampleInputPassword1" />
                                        </div>
                                        <div class="d-grid gap-2 my-2">
                                            <button class="btn btn-primary rounded-pill" type="button">Sign In</button>
                                            <button class="btn btn-outline-secondary " type="button">Sign Up with Facebook</button>
                                            <button class="btn btn-outline-secondary " type="button">Sign Up with Foofle</button>
                                            <button class="btn btn-outline-secondary " type="button">Forgot Password</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Don't have an Account, Create new for free!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create Account</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar