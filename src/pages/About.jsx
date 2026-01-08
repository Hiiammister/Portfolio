import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Aditya</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Computer Science Student from UNC Charlotte, specialising in Artificial Intelligence and Gaming through 
          hands-on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                
              </div>
    
            </div>



          ))}


        </div>

      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
    <p className="mt-4 text-slate-500 max-w-2xl">
      A snapshot of my professional journey, highlighting roles where I built
      real-world software and transferable problem-solving skills.
    </p>

    <div className="relative mt-12 border-l border-slate-700 pl-8 space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline Dot */}
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500" />

          {/* Card */}
          <div className="rounded-xl bg-slate-900 p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className="text-lg font-semibold text-white">
                {exp.title}
              </h4>
              <span className="text-sm text-slate-400">
                {exp.date}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-400">
              {exp.company} • {exp.location}
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300 text-sm">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
        </div>
      </div>
    ))}
  </div>
</div>

      
      
    </section >
  )
}

export default About
