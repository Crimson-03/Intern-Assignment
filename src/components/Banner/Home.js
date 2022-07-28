import React from 'react'
import banner from '../../assets/images/banner.jpg'
import AllPosts from '../AllPosts/AllPosts'
import Article from '../AllPosts/Article'
import Education from '../AllPosts/Education'
import Event from '../AllPosts/Event'
import Job from '../AllPosts/Job'

const Home = () => {
    const myStyle = {
        display: "inline - block",
        padding: "10px",
        margin: '0'
    }
    return (
        <>
            <div className="container-fluid" style={{
                background: `url(${banner})`,
                height: "440px",
                backgroundSize: "100%, cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="row pt-5">
                    <div className="col-md-8 col-lg-6 text-white pt-5 ps-5">
                        <div id="banner-title" className='pt-5 ps-5'  style={myStyle}>
                            <h1 className='mt-5 pt-5'>Computer Engineering</h1>
                            <p>142,765 Engineers follow this</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-3 px-5">
                <div className="row">
                    <nav className='bg-light col-xl-8' style={{ position: "sticky", top: "9%" }}>
                        <div className="nav nav-tabs mr-auto" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-allposts-tab" data-bs-toggle="tab" data-bs-target="#nav-allposts" type="button" role="tab" aria-controls="nav-allposts" aria-selected="true">All Posts(32)</button>
                            <button className="nav-link" id="nav-article-tab" data-bs-toggle="tab" data-bs-target="#nav-article" type="button" role="tab" aria-controls="nav-article" aria-selected="false">Article</button>
                            <button className="nav-link" id="nav-event-tab" data-bs-toggle="tab" data-bs-target="#nav-event" type="button" role="tab" aria-controls="nav-event" aria-selected="false">Event</button>
                            <button className="nav-link" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Education</button>
                            <button className="nav-link" id="nav-job-tab" data-bs-toggle="tab" data-bs-target="#nav-job" type="button" role="tab" aria-controls="nav-job" aria-selected="false">Job</button>
                        </div>
                    </nav>
                    <div className="text-end col-xl-4">
                        <button type="button" className="btn btn-secondary me-2">Write a Post</button>
                        <button type="button" className="btn btn-primary">Join Group</button>
                    </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-allposts" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <AllPosts />
                    </div>
                    <div className="tab-pane fade my-5" id="nav-article" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <Article />
                    </div>
                    <div className="tab-pane fade my-5" id="nav-event" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                        <Event />
                    </div>
                    <div className="tab-pane fade my-5" id="nav-education" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                        <Education />
                    </div>
                    <div className="tab-pane fade my-5" id="nav-job" role="tabpanel" aria-labelledby="nav-job-tab" tabIndex="0">
                        <Job />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home