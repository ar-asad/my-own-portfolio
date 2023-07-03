import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import '../../Home/Home/Home.css';
import emailjs from 'emailjs-com';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-hot-toast';

AOS.init();

const ContactMe = () => {

    const sendMail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message)

        // EmailJS parameters
        const serviceId = 'service_b2jjp47';
        const templateId = 'template_72r8duw';
        const userId = 'MKkL4kttQMsGJSP93';

        // Prepare the email template parameters
        const templateParams = {
            to_name: 'Asaduzzaman',
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                toast.success("Message send successfully");
                console.log(result.text);
                // ('Success!', response.status, response.text);
                // alert('Email sent!');
            })
            .catch((error) => {
                toast.error("Sorry fail to send message");
                console.log(error.text);
                // console.error('Error:', error);
                // alert('Email failed to send!');
            });
    };


    return (
        <div id='contact' className='lg:w-10/12 lg:mx-auto mt-14 lg:px-0 px-8 mb-10'>
            <div className=' text-start text-sky-100 mb-10'>
                <p data-aos="fade-left" className='lg:mb-2 sub-title'>say hello</p>
                <h1 data-aos="fade-right" className="text-2xl lg:text-3xl font-semibold mb-3">CONTACT</h1>
            </div>
            <div
                className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                <form
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    onSubmit={sendMail} className='lg:w-10/12 lg:mx-auto' >
                    <div>
                        <label
                            htmlFor="classname"
                            className="block text-sm font-medium text-amber-500 undefined"
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input type="text" placeholder='Insert your name' name='name' className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded text-sm shadow-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:shadow-cyan-500 focus:shadow-md mb-4 text-white" required />
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-amber-500 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email" placeholder='Insert your email' name='email' className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:shadow-cyan-500 focus:shadow-md mb-3 text-white" required />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-amber-500 undefined"
                            >
                                Message
                            </label>
                            <div className="flex flex-col items-start">
                                <textarea placeholder='Write your project' rows="4" type="text" name='message' className="textarea mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:shadow-cyan-500 focus:shadow-md  text-white" required ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="  mt-4">
                        <button type='submit' className="btn btn-warning btn-sm text-sky-100 font-semibold bg-amber-500 rounded-full  mb-4 mr-5 ">Send Message</button>
                    </div>
                </form>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className=' text-sky-100 border-l-4 border-amber-500'>
                    <div className='ms-16 flex flex-col gap-4'>
                        <p className='flex items-center'><HiOutlineMail className='w-10 h-10 bg-amber-500 rounded-full p-2 mr-3'></HiOutlineMail> asaduzzamanaj07@gmail.com</p>
                        <p className='flex items-center'><BsTelephoneInbound className='w-10 h-10 bg-amber-500 rounded-full p-3 mr-3'></BsTelephoneInbound>+8801757780929</p>
                        <p className='flex items-center'><ImLocation className='w-10 h-10 bg-amber-500 rounded-full p-2 mr-3'></ImLocation> Dinajpur, Rangpur, Bangladesh</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default ContactMe;











