import img1 from '/task2/task/src/assets/section3img1.png';

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
          <div className="">
              <img 
                src={img1} 
                className="img-fluid" 
                alt="Description" 
                style={{ minHeight: '250px', maxHeight: '400px', width: '100%' }}
              />
          </div>
          </div>

          <div className="col-md-6 col-12 mt-4">
            <div className="gradient-text ">
              Dashboard Reports
            </div>
            <h5 style={{ color: 'rgb(68, 125, 188)' }}>
              Visualize your support operations in real-time.
              Track ticket status, analyze performance, and 
              identify trends with our intuitive dashboard.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
