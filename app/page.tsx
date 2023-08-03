import Image from 'next/image'
import {IconMail, IconBrandInstagram, IconBrandDjango, IconBrandJavascript, IconCode, IconBrandHtml5, IconBrandNextjs, IconBrandCss3, IconUser, IconBrandReact, IconPalette, IconArrowUpRight, IconBrandTelegram, IconBrandGithub, IconBrandLinkedin, IconArrowRight, IconApi} from '@tabler/icons-react'

import ProjectCard from './ProjectCard'
import Neon from './Neon'

import heroVector from '../public/img/hero-vector.svg'
import aboutVector from '../public/img/about-vector.svg'
import contactVector from '../public/img/contact-vector.svg'

import db from "../db.json"


export default function Home() {
  const {person, projects} = db
  
  return (
    <main className="homePage">

      <section className="hero fix-width flex-v">

        <Image src={heroVector.src} alt='codding vector' priority width={400} height={400}/>

        <header className="head">
          <h1>{person.fullname}</h1>
          <p>
            I build accessible, inclusive products and digital experiences for the web
          </p>
        </header>

        <div className="socials">
          <div className="line"></div>
          <div className="links flex-v">
            {person.email     && <a href={`mailto:${person.email}`} target='_blank'><IconMail/></a>}
            {person.linkedin  && <a href={person.linkedin.url} target='_blank'><IconBrandLinkedin/></a>}
            {person.github    && <a href={person.github.url} target='_blank'><IconBrandGithub/></a>}
            {person.instagram && <a href={person.instagram.url} target='_blank'><IconBrandInstagram/></a>}
            {person.telegram  && <a href={person.telegram.url} target='_blank'><IconBrandTelegram/></a>}
          </div>
        </div>

        <Neon type='s' size='400px' color='pr' />

      </section>

      <section className="about fix-width">
        <div className="box">
            <div className="info flex-v">
              <div className="icon flex-h">
                <IconUser/>
              </div>
              <div className="content">
                <h1>
                  About Me
                </h1>
                <p>
                  a junior developer based in Iran.
                  I'm frontend focused and super Interested in backends.
                  passionate about crafting experiences that are engaging, accessible and user-centric.
                  I’m always curious to learn more when it comes to new technologies and creative coding.
                </p>
              </div>
              <a href={person.resume} target='_blank' className="btn btn-white flex-h"><p>My Resume</p><IconArrowRight size={16} stroke={3}/></a>
            </div>

            <div className="icons flex-h">
              <img src={aboutVector.src} alt="coding vector" />
            </div>
        </div>
        <Neon type='c' size='100px' color='ac' />
      </section>

      <section className="expertise fix-width">
        <Neon type='c' size='600px' color='ac' />

        <div className="head">
          <h1>
          <span className="sharp">#</span>My Expertise
          </h1>
        </div>

        <div className="wrapper">
        <div className="box flex-v">
          <div className="info flex-v">
            <div className="icon flex-h">
              <IconPalette stroke={2}/>
            </div>
            <div className="content">
              <h1>
                Frontend
              </h1>
              <p>
              I value simple content structure, clean design patterns, and thoughtful interactions.
              I also like to code things from scratch, the process of bringing ideas to life in the browser is so enjoyable.
              experienced in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>
          </div>

          <div className="icons-list flex-h">
            <IconBrandHtml5   stroke={1}/>
            <IconBrandCss3    stroke={1}/>
            <IconBrandJavascript    stroke={1}/>
            <IconBrandReact   stroke={1}/>
            <IconBrandNextjs  stroke={1}/>
          </div>
        </div>
        <div className="box flex-v">
          <div className="info flex-v">
            <div className="icon flex-h">
              <IconCode/>
            </div>
            <div className="content">
              <h1>
                Backend
              </h1>
              <p>
              passioned to researching and find new technologies to create successful implementations and high-quality solutions that address real-world business needs and improve customer experience.
              experienced in django, some JS freamworks and restAPI structures.
              </p>
            </div>
          </div>

          <div className="icons-list flex-h">
            <IconBrandDjango      stroke={1}/>
            <IconBrandJavascript  stroke={1}/>
            <IconApi              stroke={1}/>
          </div>
        </div>
        </div>
      </section>

      <section className="projects fix-width">
        <Neon type='s' size='200px' color='pr' />
        <div className="head">
          <h1>
          <span className="sharp">#</span>my latest Projects
          </h1>
        </div>

        <div className="list">
          {projects.map( project => (<ProjectCard key={project.id} img={project.img} url={project.url} />))}
        </div>

      </section>

      <section id='contact' className="contact fix-width">
        <div className="head">
            <h1>
                <span className="sharp">#</span>Get in touch
              </h1>
              <p>
                I'm interested in freelance and internship opportunities. However, if you have other request or question, don't hesitate to contact me.
              </p>
        </div>
        <img className='img' src={contactVector.src} alt="send mail" />
        <div className="socials flex-v list">
          {person.linkedin  && <a className="icon" href={person.linkedin.url} target='_blank'><span className="icon"><IconBrandLinkedin/></span>{person.linkedin.username}<span className='link-icon'><IconArrowUpRight/></span></a>}
          {person.github    && <a className="icon" href={person.github.url} target='_blank'><span className="icon"><IconBrandGithub/></span>{person.github.username}<span className='link-icon'><IconArrowUpRight/></span></a>}
          {person.instagram && <a className="icon" href={person.instagram.url} target='_blank'><span className="icon"><IconBrandInstagram/></span>{person.instagram.username}<span className='link-icon'><IconArrowUpRight/></span></a>}
          {person.telegram  && <a className="icon" href={person.telegram.url} target='_blank'><span className="icon"><IconBrandTelegram/></span>{person.telegram.username}<span className='link-icon'><IconArrowUpRight/></span></a>}
          {person.email     && <a className="icon" href={`mailto:${person.email}`} target='_blank'><span className="icon"><IconMail/></span>{person.email}<span className='link-icon'><IconArrowUpRight/></span></a>}

        </div>
      </section>

    </main>
  )
}
