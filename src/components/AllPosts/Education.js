import React from 'react'
import thumbnail from '../../assets/images/edu.jpg'
import user from '../../assets/images/user.jpg'

const Education = () => {
    const zIndexStyle = {
        // zIndex: "-99999"
    }
    return (
        <div className="col-md-8">
            <div className="card shadow-sm" style={zIndexStyle}>
                <img src={thumbnail} alt="" style={{ height: "300px",objectFit:"cover" }} />

                <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                        <h5><i className="fa-solid fa-microscope"></i> Education</h5>
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

                    <p className="card-title fs-5 fw-bold">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                    <p className="card-text lead">I've worked in a UX for the better part of a decade. From now on, I plan to rei...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">
                            <img src={user} alt="" style={{ borderRadius: "50%", width: "50px" }} />
                            Sarah West
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

export default Education