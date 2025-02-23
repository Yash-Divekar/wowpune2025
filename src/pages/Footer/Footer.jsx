import React from 'react'
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <>
        <section className='bg-black h-32 p-6'>
            <div className='flex flex-row gap-9 items-center text-white mx-10'>
                <h3 className='text-4xl font-semibold mr-10'>GDGOC Pune</h3>
                <p className='text-lg'>About GDGoC Program</p>
                <p className='text-lg'>FAQ</p>
                <p className='text-lg'>Code Of Coduct</p>
                <p className='text-lg'>Community Guidelines</p>

                <div className="flex gap-7 ml-auto mr-15">
                    <a href="mailto:contact@gdgocpune.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-2xl hover:text-gray-400 transition duration-300" />
                    </a>
                </div>
            </div>
            <p className='text-gray-500 flex justify-center items-center p-3'>@ 2025 GDGoC Pune. All Rights Reserved</p>
        </section>
    </>
  )
}
 
export default Footer