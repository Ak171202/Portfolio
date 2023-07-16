import React from 'react'
import '../experience.css'
import edu from '../edu.jpg';
function Education() {
    return (
        <div style={{ margin: '5% 10%' }} id='education'>
            <h1 className='text-muted'>EDUCATION</h1>
            <div class="row  pt-3 pb-3">
                <div class="col-sm-12 text-center col-md-6 col-lg-6">
                    <div class="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                </div>
                                <span class="time">2020 - 2023</span>
                                <h5>Bachelor of Science in Computer Science</h5>
                                <p>The Gandhigram Rural Institute-Deemed to be University ,<br></br>Dindigul
                                </p>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                </div>
                                <span class="time">2019 - Present</span>
                                <h5>Relevant Coursework</h5>
                                <p>Web Development<br></br>
                                    JavaScript Fundamentals<br></br>
                                    Server-Side Development with Node.js<br></br>
                                    Front-End Frameworks<br></br>
                                    Database Management Systems<br></br>
                                    Full-Stack Web Development</p>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <img src={edu} width='100%'></img>
                </div>
            </div>
        </div>
    )
}

export default Education