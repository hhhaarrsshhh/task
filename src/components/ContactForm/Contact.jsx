import img1 from '../../assets/ContactImg.png'
import { useState } from 'react';

const Section3 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { name, email, phone, message });
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

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
        <h1 className="text-left gradient-text fs-1 display-1">Contact Us!</h1>
        
        <div className="row gx-5 align-items-center mt-5">
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name*</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Work Email*</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number*</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Company Name*</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="4" 
                    placeholder="Enter your message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
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
                  Submit
                </button>             
              </form>
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 ">
            <img
              src={img1}
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
