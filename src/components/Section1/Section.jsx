import girl from '/task2/task/src/assets/Girl.png';

const Section = () => {
  return (
    <div className="container">
      <div className="row gy-5">
        <div className="col-12 col-md-6" style={{ marginTop: "100px" }}>
          <h1 style={{ color: 'rgb(68, 125, 188)', marginBottom: '50px', fontWeight: 'bold' }}>
            Your tickets are automated and accelerated
          </h1>
          <h3 style={{ color: 'black' }}>
            Streamline your IT operations with our <span style={{ color: 'rgb(68, 125, 188)' }}>powerful ticketing system.</span> Fast, efficient, and easy to use.
          </h3>
          <button
            type="button"
            className="btn btn-lg me-3"
            style={{
              backgroundColor: 'rgb(68, 125, 188)',
              borderColor: 'rgb(68, 125, 188)',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '0px',
              color: '#fff',
              width: '200px',
              marginTop: '30px'
            }}
          >
            Learn More
          </button>
        </div>

        <div className="col-12 col-md-6 d-none d-sm-block"> 
          <img src={girl} alt="Girl" className="img-fluid" /> 
        </div>
      </div>
    </div>
  );
};

export default Section;
