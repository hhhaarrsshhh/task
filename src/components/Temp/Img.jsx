import im1 from '/task2/task/src/assets/eleganza.f380c3061daff31748a7 2.png';
import im2 from '/task2/task/src/assets/gr.png';
import im3 from '/task2/task/src/assets/Rectangle.png';

const Img = () => {
  return (
    <div className='col position-relative text-center'>
                                                    {/* background */}
      <img 
        src={im3} 
        alt="Background Description" 
        style={{
          width: '30%', 
          position: 'absolute',
          zIndex: '-1',  
          opacity: '1.5',  
          maxWidth: '400px', 
          minWidth: '240px'   
        }}
      />
      
                                                       {/* two image*/}
      <div className="d-flex flex-column align-items-center mt-5" style={{marginLeft:"250px"}}>
        <img 
          src={im1} 
          alt="Description of image 1" 
          className="img-fluid" 
          style={{ 
            width: '35%', 
            maxWidth: '400px', 
            minWidth: '180px' ,
            
          }} 
        />
        <img 
          src={im2} 
          alt="Description of image 2" 
          className="img-fluid mt-3" 
          style={{ 
            width: '35%', 
            maxWidth: '400px', 
            minWidth: '180px' 
          }} 
        />
      </div>
    </div>
  );
}

export default Img;
