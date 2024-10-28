import img2 from '../../assets/section4img.png';

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
            color: transparent;
          }
        `}
      </style>
      <div className="container px-4" style={{ marginTop: '60px' }}>
        <h1 className="text-md-center text-start gradient-text fs-1 display-1">What makes our tool special?</h1>
        <div className="text-md-center text-start fs-5 fw-semibold">
          T-rack has empowered over 7,500 organizations by delivering<br />
          customer-driven knowledge management solutions. Here’s why we stand out
        </div>
        <div className="row gx-5 align-items-center mt-5">
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div className="mt-4">
              <ul className="fs-5 fw-normal">
                <li><span style={{ color: "rgb(68, 125, 188)" }}>Customer-Centric Development:</span> We build features based on your feedback and needs.</li>
                <li><span style={{ color: "rgb(68, 125, 188)" }}>Seamless User Experience:</span> Our platform is designed to be intuitive and easy to use, reducing onboarding time.</li>
                <li><span style={{ color: "rgb(68, 125, 188)" }}>Scalable Solutions:</span> Whether you're a small team or a large enterprise, we scale with your growth.</li>
                <li><span style={{ color: "rgb(68, 125, 188)" }}>Continuous Improvement:</span> We regularly update our platform to ensure it meets the highest standards.</li>
                <li><span style={{ color: "rgb(68, 125, 188)" }}>Reliable Support:</span> Our dedicated support team is here to assist you every step of the way.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 mt-4">
            <img
              src={img2}
              className="img-fluid border bg-light border-3"
              alt="Dashboard Reports"
              style={{ minHeight: '250px', maxHeight: '400px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
