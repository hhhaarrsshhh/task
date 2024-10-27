import Img from '../Temp/Img'
const Section2 = () => {
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
        <h1 className="text-center gradient-text " style={{fontWeight:"bold"}}>Our Customer Success Stories</h1>
        
        <div className="row gx-5 align-items-center">
          
          <div className="col-md-6 col-12 d-flex justify-content-center order-1 order-md-2 " style={{ paddingBottom: "50px",paddingRight:"250px" }}>
            <Img />
          </div>

          {/* text*/}
          <div className="col-md-6 col-12 mb-4 order-2 order-md-1 text-left text-md-start">
  <h4 className="text-dark fs-5 fs-sm-4"> 
    Affy Cloud expertise transformed our real estate website, elevating user experience and driving sales.
    Their optimized solutions are the perfect fit for our growing business!
  </h4>
  <br />
  <h4 className="text-dark fs-5 fs-sm-4"> 
    Faster response times, Improved ticket resolution rates, Enhanced team collaboration, Data-driven decision making.
  </h4>
</div>


        </div>
      </div>
    </>
  );
}

export default Section2;
