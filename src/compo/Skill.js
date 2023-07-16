import React from 'react'
import skill from '../5484597.jpg'
function Skill() {
    return (
        <div style={{ margin: '5% 10%' }} id="skill">
            <h1 className='text-muted'>SKILL</h1>
            <div class="row  pt-3 pb-3">
                <div class="col-sm-12 text-center col-md-6 col-lg-6">
                    <img src={skill} width='100%'></img>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <h6>HTML & CSS</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '75%'}}>75%</div>
                    </div>
                    <h6>React JS</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '80%'}}>80%</div>
                    </div>
                    <h6>Node JS</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '70%'}}>70%</div>
                    </div>
                    <h6>PHP</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '85%'}}>85%</div>
                    </div>
                    <h6>MONGO-DB</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '65%'}}>65%</div>
                    </div>
                    <h6>SQL</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '75%'}}>75%</div>
                    </div>
                    <h6>AWS</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '25%'}}>25%</div>
                    </div>
                    <h6>Linux</h6>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '80%'}}>80%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill