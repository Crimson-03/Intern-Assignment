import React from 'react'
import user from '../../assets/images/user.jpg'

const Job = () => {
    const zIndexStyle = {
        zIndex: "-99999"
    }
    return (
        <div className="col-md-8">
            <div className="card shadow-sm my-3" style={zIndexStyle}>
                <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                        <h5><i className="fa-solid fa-briefcase"></i> Job</h5>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/'>Edit</a></li>
                                <li><a className="dropdown-item" href='/'>Report</a></li>
                                <li><a className="dropdown-item" href='/'>Option 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="card-title fs-5 fw-bold">Software Developer</p>
                    <p className="card-text"><i className="fa-solid fa-briefcase me-2"></i>Innovacer Analytics Private Ltd. <span className='ms-5'><i className="fa-regular fa-map me-2"></i>Noida, India</span></p>
                    <div class="d-grid gap-2 my-2">
                        <button class="btn btn-outline-secondary" type="button">Visit Website</button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">
                            <img src={user} alt="" style={{ borderRadius: "50%", width: "50px" }} />
                            Joseph Gray
                        </div>
                        <small className="text-muted">
                            <i className="fa-solid fa-eye me-2"></i>
                            1.4k views
                            <i className="fa-solid fa-share-nodes ms-2 p-2" style={{ backgroundColor: "whitesmoke" }}></i>
                        </small>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm my-3" style={zIndexStyle}>
                <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                        <h5><i className="fa-solid fa-briefcase"></i> Job</h5>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/'>Edit</a></li>
                                <li><a className="dropdown-item" href='/'>Report</a></li>
                                <li><a className="dropdown-item" href='/'>Option 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="card-title fs-5 fw-bold">Software Developer</p>
                    <p className="card-text"><i className="fa-solid fa-briefcase me-2"></i>Innovacer Analytics Private Ltd. <span className='ms-5'><i className="fa-regular fa-map me-2"></i>Noida, India</span></p>
                    <div class="d-grid gap-2 my-2">
                        <button class="btn btn-outline-secondary" type="button">Visit Website</button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">
                            <img src={user} alt="" style={{ borderRadius: "50%", width: "50px" }} />
                            Ronal Jones
                        </div>
                        <small className="text-muted">
                            <i className="fa-solid fa-eye me-2"></i>
                            1.4k views
                            <i className="fa-solid fa-share-nodes ms-2 p-2" style={{ backgroundColor: "whitesmoke" }}></i>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job