import React from 'react'
import '../nav.css'
function NavBar(props) {
 

    return (
        <nav className="navbar navbar-expand-lg fixed-top mt-0 " style={{ backgroundColor: '#fdfef9' }} aria-label="Eighth navbar example">
            <div className="container p-3" >
                <h1 className="navbar-brand ms-lg-5" ><samp style={{ color: '#fe3a3d' }}>Manicka vasagar</samp> </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07"
                    aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" class='ls'>
                            <a className="nav-link" class='navitem' aria-current="page" onClick={()=>props.srcollById('home')} >Home</a>
                        </li>
                        <li className="nav-item" class='ls'>
                            <a className="nav-link" class='navitem' aria-current="page" onClick={()=>props.srcollById('skill')} >Skill</a>
                        </li>
                        <li className="nav-item" class='ls'>
                            <a className="nav-link" class='navitem' aria-current="page" onClick={()=>props.srcollById('education')}>Education</a>
                        </li>
                        <li className="nav-item" class='ls'>
                            <a className="nav-link" class='navitem' aria-current="page"onClick={()=>props.srcollById('experience')} >Experience</a>
                        </li>
                        <li className="nav-item" class='ls'>
                            <a className="nav-link" class='navitem' aria-current="page" onClick={()=>props.srcollById('contact')} >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar