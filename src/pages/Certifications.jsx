import React from 'react'
import { certifications } from '../constants'
import { Link } from 'react-router-dom'

const Certifications = () => {
  return (
    <section className="max-container">
        <h1 className="head-text">
            My <span className="blue-gradient_text font-semibold drop-shadow">Certifications and Badges</span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
                Here are some of the certifications and badges I have earned through various courses and programs, showcasing my commitment to continuous learning and professional development in the field of technology.</p>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">


            {certifications.map((cert)=>(
                <div className="lg:w-[400px] w-full" key={cert.title}>
                    <div className="block-container w-64 h-64">
                        <div className={`btn-glow rounded-xl ${cert.theme}`}/>
                        <div className="btn-front rounded-xl flex justify-center items-center">
                            <img
                                src={cert.badgeUrl}
                                alt="Badge"
                                className="w-64 h-64 object-contain"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-sm font-poppins font-semibold mt-4">
                            {cert.title}
                        </h1>
                        <p className="mt-2 text-slate-500 ">
                            {cert.issuer}, {cert.date}
                        </p>
                        <div className="mt-5 flex items-center gap-2 font-poppins">
                            <Link
                                to={cert.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 text-sm"
                            >
                                Verify Certification    
                            </Link>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>

  )
}

export default Certifications
