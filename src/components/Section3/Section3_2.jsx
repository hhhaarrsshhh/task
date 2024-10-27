import img1 from '../../assets/section3img1.png';

const Section3 = () => {
  return (
    <>
      <style>
        {`
          .gradient-text {
            background: linear-gradient(90deg, #3A6EA5 0%, #4592E3 100%);
            font-weight: bold;
            font-size: 2rem; 
            background-clip: text;
            color: transparent; /* Ensures the text color is hidden to show the gradient */
          }
        `}
      </style>
      <div className="container px-4" style={{ marginTop: '60px' }}>
        <h1 className="text-center gradient-text">What makes our tool stand out!</h1>
        <div className="row gx-5 align-items-center mt-5">
          <div className="col-md-6 col-12">
            <div className="mt-4">
              <div className="gradient-text">
              Create tickets automatically with AI              </div>
              <h5 style={{ color: 'rgb(68, 125, 188)' }}>
              Our advanced AI algorithms analyze
 incoming requests, extract key information,
 and automatically create comprehensive
 ticket descriptions. This not only saves time for
 your support team but also ensures accuracy 
and consistency in ticket creation.
              </h5>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4">
            <img 
              src={img1} 
              className="img-fluid" 
              alt="Dashboard Reports" 
              style={{ minHeight: '250px', maxHeight: '400px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
