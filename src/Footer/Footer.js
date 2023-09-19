import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';


const Footer = () => {
  return (
    <>
      <footer className='mt-5'>
        <div class="container">
          <div class="row pt-5">
            <div class="col-12 col-md-6">
              <div>
                <h4 class="fa fa-flag mb-3 "></h4>
              </div>
              <h5 className='text-white fw-bold mb-4'>Go make something awesome</h5>
              <p class="text-white">
                Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.
              </p>
              <div class="d-flex justify-content-start mt-5 mb-3 component">
                <a href="#" class=" text-decoration-none me-3 ">
                  License
                </a>
                <a href="#" class=" text-decoration-none me-3 ">
                  Terms
                </a>
                <a href="#" class=" text-decoration-none me-3 ">
                  Privacy
                </a>
                <a href="#" class=" text-decoration-none me-2 ">
                  Refunds
                </a>
              </div>
            </div>

            <div class="col-12 col-md-2 component ">
              <h5 class="text-black mb-3">Project</h5>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  Download
                </a>
              </div>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  All version
                </a>
              </div>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  Commission Icons
                </a>
              </div>
              <div>
                <a href="#" class=" text-decoration-none me-3 ">
                  Change log
                </a>
              </div>
            </div>
            <div class="col-12 col-md-2 quick-link">
              <h5 class="text-black">Community</h5>
              <div class="d-flex">
                <a class="text-white mb-2" href="index.html">
                  <i class="fa fa-angle-right pe-2"></i>Github
                </a>
              </div>
              <div class="d-flex">
                <a class="text-white mb-2" href="about.html">
                  <i class="fa fa-angle-right pe-2"></i>Icon Requests
                </a>
              </div>
              <div class="d-flex">
                <a class="text-white mb-2" href="gallery.html">
                  <i class="fa fa-angle-right pe-2"></i>Twitter
                </a>
              </div>
              <div class="d-flex">
                <a class="text-white mb-2" href="blog.html">
                  <i class="fa fa-angle-right pe-2"></i>Blog awesome
                </a>
              </div>

            </div>

            <div class="col-12 col-md-2 component">
              <h5 class="text-black">Help</h5>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  Support
                </a>

              </div>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  Trouble Shooting
                </a>

              </div>
              <div className='mb-2'>
                <a href="#" class=" text-decoration-none me-3 ">
                  Support
                </a>
              </div>
              <div>
                <a href="#" class=" text-decoration-none me-3 ">
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer
