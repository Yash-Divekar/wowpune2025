import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from './Question.json';
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="p-12 bg-green-200">
            <h3 className="ml-10 mt-4 p-2 h-12 w-36 bg-green-500 text-white rounded-full text-center text-2xl">
                FAQ's
            </h3>

            <h2 className="text-orange-400 text-[100px] font-semibold">Got Any Questions?</h2>
            <span className="ml-4 text-xl">Find answers to the most asked questions about GDSC WOW Pune event</span>

            <div className="flex flex-col md:flex-col items-center justify-center mt-5 w-full">
                <ul className="w-[90%] max-w-[1200px] mx-auto">
                    {Question["FAQ"].map((Item, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-3"
                            initial={false}
                        >
                            {/* Question Box with conditional border radius */}
                            <motion.div 
                                className={`flex bg-white p-5 w-full outline justify-between cursor-pointer text-xl font-semibold ${
                                    openIndex === index ? 'rounded-t-xl' : 'rounded-xl'
                                }`}
                                onClick={() => toggleDropdown(index)}
                                whileHover={{ backgroundColor: "#f8f8f8" }}
                                whileTap={{ scale: 0.995 }}
                            >
                                <h4 className="px-5">{Item["Question"]}</h4>
                                <motion.span 
                                    className="mr-5"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▼
                                </motion.span>
                            </motion.div>

                            {/* Answer Box */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="bg-gray-200 rounded-b-xl w-full outline outline-t-0 overflow-hidden"
                                    >
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="p-5 ml-5"
                                        >
                                            <p>{Item["Answer"]}</p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center mt-10 justify-'>
                <p className=' text-lg'>Have more Question?</p>
                <a href="mailto:yashdivekar19@gmail.com" className='text-xl bg-green-500 py-3 px-7 rounded-full font-semibold'>Contact Us</a>

                <div className='w-[80%] bg-slate-200 h-64 mt-10 rounded-3xl outline p-6'>
                    <h3 className='text-4xl font-semibold my-3'>Keep in touch with GDGoC Pune for latest annoucements</h3>
                    <spam className="text-xl" >Stake out #WOWPune for the latest updates and news.</spam> 
                    <div className='flex flex-row gap-5 justify-end items-center mt-5'>
                        <div className="flex gap-7 ml-auto mr-15 text-black">
                                            <a href="mailto:contact@gdgocpune.com" target="_blank" rel="noopener noreferrer">
                                            <FaEnvelope className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className=" text-2xl hover:text-gray-600 transition duration-300 hover:scale-[1.5]" />
                                            </a>
                                        </div>
                                        <img src="/Logo/Main_wow_logo.svg" alt=""  className='w-[20%]'/>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default FAQ;