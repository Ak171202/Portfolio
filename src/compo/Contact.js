import React from 'react'

import edu from '../edu.jpg';
function Contact() {
    return (

        <footer class="text-center text-lg-start text-muted " id='contact'>

            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="https://www.instagram.com/manickavasagar_n/" target='_blank' class="me-4 link-secondary">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href=""   target='_blank' class="me-4 link-secondary">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/manickavasagarn"  target='_blank' class="me-4 link-secondary">
                        <i class="fab fa-github"></i>
                    </a>
                </div>

            </section>



            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-6 col-xl-6 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3 text-secondary"></i>Manickavasagar
                            </h6>
                            <p>
                                As a React and Node.js full-stack developer, I am dedicated to delivering high-quality web applications with a strong focus on user experience and functionality. With a solid foundation in front-end and back-end development, I bring a passion for clean code, efficient problem-solving, and continuous learning to every project
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-4  mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3 text-secondary"></i> Ns Nagar , Dindigul , TamilNadu , India</p>
                            <p>
                                <i class="fas fa-envelope me-3 text-secondary"></i>
                                manickavasagardgl@gmail.com
                            </p>
                            <p><i class="fas fa-phone me-3 text-secondary"></i> +91 97900 91069</p>
                        </div>

                    </div>

                </div>
            </section>



            <div class="text-center p-4" >
                Thanks For Looking Me ...
            </div>

        </footer>


    )
}

export default Contact