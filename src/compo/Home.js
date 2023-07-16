import React from 'react'
import mypic from '../mypic2.png'
function Home() {
    return (
        <div style={{ margin: '5% 10%',marginTop:'10%' }} id='home'>
            <div class="row d-flex flex-row-reverse pt-3 pb-3" >
                <div class="col-sm-12 text-center col-md-6 col-lg-6">
                    <img style={{ border: '18px solid rgb(238 226 227)', borderRadius: '50%', backgroundColor: '#dae6f5' }} width='70%' src={mypic}></img>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div>
                        <h1 style={{
                            fontSize: '40px',
                            lineHeight: '56px'
                        }}>MANICKA VASAGAR</h1>
                    </div>
                    <p>Full stack Developer</p>
                    <p>Hello, I'm Manicka vasagar, a passionate and experienced React and Node.js full-stack developer. With a strong foundation in front-end and back-end development, I specialize in creating modern, scalable web applications that deliver exceptional user experiences.</p>
                    <p>
                        I have one years of hands-on experience in the software development industry, working on diverse projects that have honed my skills and allowed me to tackle various challenges. I thrive in dynamic environments, collaborating with cross-functional teams to deliver high-quality solutions that meet client requirements.</p>
                </div>
            </div>
        </div>
    )
}

export default Home