// import React, { useState } from 'react';
// import '../components/css/Contact.css';
// import contactemail from '../components/img/contactemail.svg';
// import contactphone from '../components/img/contactphone.svg';
// import contacttime from '../components/img/contacttime.svg';
// import contactfacebook from '../components/img/contactfacebook.svg';
// import contactinstagram from '../components/img/contactinstagram.svg';
// import contacttwitter from '../components/img/foundertwitter.svg';
// import contactrobo from '../components/img/contactrobo.svg';
// import contactlinkedin from '../components/img/contactlinkedin.svg';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3001/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Reset form after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: '',
//         });
//         alert('Form submitted successfully!');
//       } else {
//         alert('Failed to submit form. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred while submitting the form. Please try again later.');
//     }
//   };

//   return (
//     <main className='contactmain'>
//       {/* <div> */}

//       <div className="contact-container">
//         <div className='contact-container1'>
//           <div className='contactusbold'>
//             <h2>Contact Us</h2>
//             <p>
//               Please fill out the form below if you have any question for us.we typically try to reach within 48 hours of the query
//             </p>
//           </div>
//           <div className='information'>
//             <h3>Information</h3>
//             <div>
//               <div>
//                 <img src={contactemail} alt="contactemail" />
//                 <p>readriches@gmail.com</p>
//               </div>
//               <div>
//                 <img src={contactphone} alt="contactphoneno" />
//                 <span>

//                 <p>+91-7017588100</p>
//                 <p style={{display:"block"}}>+91-7340283616</p>
//                 </span>
//               </div>
//               {/* <div>
//                 <img src={contacttime} alt="contacttime" />
//                 <p>Available</p>
//               </div> */}
//             </div>
//           </div>
//           <div className='follow'>
//             <h3>follow</h3>
//             <div>
//               <a href="https://www.facebook.com/readriches?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer">
//               <img src={contactfacebook} alt="contactfacebook" />
//               </a>
              
//               <a href="https://x.com/ReadRiches?t=RwnqDBwEFI5s4Twnx1KSMw&s=09" target="_blank" rel="noreferrer"
//               style={{
//                 borderRadius: "50%",
//                 backgroundColor: "#d8d8d8",
//                 padding: "10px",
//                 height: "40px",
//               }}
//               >
//               <img src={contacttwitter} alt="contacttwitter" width="20" />
//               </a>

//               <a href="https://www.instagram.com/readriches?igsh=MXY3ZnBmOWRjMWMwZA" target="_blank" rel="noreferrer">
//               <img src={contactinstagram} alt="contactinstagram" />
//               </a>

//               <a href="https://www.linkedin.com/company/read-riches/" target="_blank" rel="noreferrer"
//               style={{
//                 borderRadius: "50%",
//                 backgroundColor: "#d8d8d8",
//                 padding: "10px",
//                 height: "40px",
//               }}
//               >
//               <img src={contactlinkedin} alt="contactlinkedin" width="20" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className='contact-container2'>
//           <img src={contactrobo} alt="contactrobo" />
//         </div>
//       </div>
//       <div className='get_in_touch'>
//         <form onSubmit={handleSubmit}>
//           <p>Get in touch with us</p>
//           {/* <label htmlFor="name">Name:</label> */}
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             required
//           />

//           {/* <label htmlFor="email">Email:</label> */}
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />

//           {/* <label htmlFor="phone">Phone:</label> */}
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="phone"
//             required
//           />

//           {/* <label htmlFor="message">Message:</label> */}
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             maxLength={1000}
//             required
//           ></textarea>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className='get_in_touch_back'></div>
//       {/* </div> */}
//       <div className='contact_line_circle'>
//         <div className='contact_line'></div>
//         <div className='contact_circle'></div>
//       </div>
//     </main>
//   );
// };

// export default Contact;
