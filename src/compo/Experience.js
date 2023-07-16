import React from 'react'
import '../experience.css'
import edu from '../experience.jpg';
function Experience() {
    return (
        <div style={{ margin: '5% 10%' }} id='experience'>
            <h1 className='text-muted'>EXPERIENCE</h1>
            <div class="row  pt-3 pb-3">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <img src={edu} width='100%'></img>
                </div>
                <div class="col-sm-12 text-center col-md-6 col-lg-6">
                    <div class="resume-box">
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <span class="time">2023 - 7 Months</span>
                                <h5>PHP Developer</h5>
                                <p>virtual technologies, <br></br>Dindigul
                                </p>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <span class="time">2023 - Present</span>
                                <h5>Graduate Trainee</h5>
                                <p>React & Node Developer At</p>
                                <p>Data Aces , Chennai</p>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Experience