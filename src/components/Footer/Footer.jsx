import footerImg from '../../assets/trackfoot.png'

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-black" style={{ backgroundColor: '#fff' }}>
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <img src={footerImg} alt="Footer" />
                  <h2 className="fw-bold fs-5 mt-3">Start your 30 days free trial</h2> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum ut.</p>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <h5 className="fw-bold">Features</h5>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Budgeting</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Savings</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Accounts</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Secured Data</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <h5 className="fw-bold">Solutions</h5> 
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Financial</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Vario FinAI</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Security</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Fraud Detection</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <h5 className="fw-bold">Resources</h5> 
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Blog</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Community</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Resources</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Monitoring</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <h5 className="fw-bold">Social</h5> 
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Instagram &#8594;</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">LinkedIn &#8594;</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Twitter &#8594;</a></li>
                    <li className="mb-2"><a href="#!" className="text-black text-decoration-none">Facebookk &#8594;</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="text-left p-3" style={{ backgroundColor: '#fff' }}>
            © 2020 Copyright:
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
