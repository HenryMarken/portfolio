import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import design from "../public/design.png";
import Image from "next/image"
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from "react";
import {Progress} from "flowbite-react"



export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "" }>
      <Head>
        <title>Henry Marken</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-900 px-20 md:px-30 lg:px-50">

        <section className="min-h-screen">
         
         {/* NavBar */}
          <nav className="py-10 mb-12 flex justify-between"> 
            <div className="flex justify-center dark:text-white">
              <h1 className="font-burtons pr-5 mt-1 ">HM</h1>    
              <a href="#skills" className="px-5 text-xl">Skills</a> 
              <a href="#projects" className="px-5 text-xl">Projects</a>
              <a href="#contact" className="px-5 text-xl">Contact</a>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick ={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white"/>
              </li>
              <li><a className="bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-blue-600 hover:to-black text-white px-4 py-2 rounded-md ml-8" href="Resume.pdf" target="_blank">Resume</a></li>
            </ul>
          </nav>

          {/* Introduction */}
          <div className="text-center p-10 "> 
            <h2 className="text-5xl py-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-medium md:text-6xl">Henry Marken</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Electrical Engineer and Self-Taught Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Hi, I am an QC Test E.I.T at Profire Energy who graduated from the Unviversity of Alberta wtih a BSc in Electircal and Computer Engineering. I am a highly-motivated, self taught web developer seeking to launch my career in web development</p>
          </div>
          
          <div className="relative mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96">
            <img src="profilepic.png" className="mt-2"></img>
          </div>

          <div className="flex text-5xl justify-center gap-16 py-3 mt-20 text-gray-600 dark:text-white">
            <a href="https://github.com/HenryMarken" target="_blank">
              <AiFillGithub/>
            </a>
            <a href="https://www.linkedin.com/in/henry-marken/" target="_blank">
              <AiFillLinkedin/>
            </a>
            <AiFillYoutube/>
          </div>
        </section>
        
        {/* Skills */}
        <section>
        <div className="dark:text-white">
            <h3 id="skills" className="text-3xl py-1 text-center">Skills</h3>
            <p className="text-md py-2 leading-8  text-center md:text-xl max-w-xl mx-auto ">
              Since the beginning of my journey as a freelance designer developer, I've done remote work for consulted for a collaborated with talanted people to create digital products for both business and consumer use.
            </p>
          </div>
          <div className="lg:flex lg:grow gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:text-white grow">
              <img src="programming.png" className="max-w-xs h-auto mx-auto scale-50 lg:scale-75"></img>
              <h3 className="text-lg font-medium pb-2"> Programming Languages</h3>
              <div className="text-xl  text-left">
                  Javascript
              </div>
              <Progress progress={75}  size="xl"/>
              <div className="text-xl  text-left">
                  HTML
              </div>
              <Progress progress={90}  size="xl"/>
              <div className="text-xl  text-left">
                  CSS
              </div>
              <Progress progress={90}  size="xl"/>
              <div className="text-xl  text-left">
                  Python
              </div>
              <Progress progress={70}  size="xl"/>
              <div className="text-xl  text-left">
                  C
              </div>
              <Progress progress={80}  size="xl"/>
              <div className="text-xl  text-left">
                  C++
              </div>
              <Progress progress={70}  size="xl"/>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:text-white grow">
            <img src="framework.png" className="max-w-xs h-auto mx-auto scale-50 lg:scale-75"></img>
              <h3 className="text-lg font-medium pb-2">Frameworks and Dev Tools</h3>
              <div className="text-xl  text-left">
                  Node
              </div>
              <Progress progress={75}  size="xl"/>
              <div className="text-xl  text-left">
                  React
              </div>
              <Progress progress={90}  size="xl"/>
              <div className="text-xl  text-left">
                  Express
              </div>
              <Progress progress={90}  size="xl"/>
              <div className="text-xl  text-left">
                  Pandas
              </div>
              <Progress progress={70}  size="xl"/>
              <div className="text-xl  text-left">
                  MongoDB
              </div>
              <Progress progress={80}  size="xl"/>
              <div className="text-xl  text-left">
                  Bootstrap
              </div>
              <Progress progress={70}  size="xl"/>
              <div className="text-xl  text-left">
                  Tailwind CSS
              </div>
              <Progress progress={70}  size="xl"/>
              <div className="text-xl  text-left">
                  Bootstrap
              </div>
              <Progress progress={70}  size="xl"/>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white text-center">
            <h3 id="projects" className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 md:text-xl max-w-xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ex impedit perspiciatis saepe consectetur debitis. Iusto pariatur ut, deserunt veniam dolore repellat unde odio? Soluta atque ad officiis aspernatur?
            </p>
            
          </div>
          <div className=" flex flex-col gap-10 py-10 text-center lg:flex-row lg:flex-wrap dark:text-white">
            <div className="basis-1/3 flex-1">
              <h2 className="text-xl font-bold ">PhotoFinder</h2>
              <a href="https://photofinder.onrender.com/" target="_blank" rel="noreferrer">           
                <Image src={project1} className="rounded-lg object-cover grayscale blur-sm duration-200 hover:grayscale-0 hover:blur-none" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 mt-20">
              <h2 className="text-xl font-bold">Fantasy League Drafter</h2>
              <a href="https://github.com/HenryMarken/FantasyLeague" target="_blank" rel="noreferrer">
                <Image src={project2} className="rounded-lg object-cover grayscale blur-sm duration-200 hover:grayscale-0 hover:blur-none" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/2 flex-1 max-w-screen-lg mx-auto mt-20">
              <h2 className="text-xl font-bold">iPhone Gimbal</h2>
              <a href="https://github.com/josheen/GimbalProject" target="_blank" rel="noreferrer">  
                <Image src={project3} className="rounded-lg object-cover grayscale blur-sm duration-200 hover:grayscale-0 hover:blur-none" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact and Location */}
        <section id="contact" class="text-center">
          <div className="flex flex-col gap-10 py-10 text-center lg:flex-row lg:flex-wrap  dark:text-white">
            {/* Contact Form */}
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 lg:max-w-screen-lg dark:text-white grow">
              <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
              <form>
                <div className="form-group mb-6">
                  <h2 className="text-left">Name</h2>
                  <input type="text" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700  " id="exampleInput7" />
                </div>
                <div className="form-group mb-6">
                  <h2 className="text-left">Email</h2>
                  <input type="email" className="md:h-16 form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 " id="exampleInput8"/>
                </div>
                <div className="form-group mb-6">
                  <h2 className="text-left">Message</h2>
                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:border-slate-700 " id="exampleFormControlTextarea13" rows="10"></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck87" checked/>
                  <label className="form-check-label inline-block " for="exampleCheck87">Send me a copy of this message</label>
                </div>
                <button type="submit" className="w-full px-6 py-2.5 border dark:border-slate-700 dark:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Send
                </button>
              </form>
            </div>
            {/* Map */}      
            <div className=" rounded-lg overflow-hidden p-10 relative flex-1 rounded-xl shadow-2xl dark:text-white">
                <iframe width="100%" height="100%" title="map" className="absolute inset-0 h-full" style={{ filter: "opacity(0.7)" }} src="https://www.google.com/maps/embed/v1/place?q=Edmonton+Alberta&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=11"/>
                <div className="bg-white dark:bg-slate-900 relative flex flex-wrap py-6 rounded-md shadow-md items-center">
                <div className="lg:w-2/5 px-6">
                    <h2 className="title-font font-semibold  tracking-widest text-xs">
                    ADDRESS
                    </h2>
                    <p className="mt-1 d"> Edmonton, AB <br /> Canada </p>
                </div>
                <div className="lg:w-3/5 px-6 lg:mt-0">
                    <h2 className="title-font font-semibold mt-0 tracking-widest text-xs">
                    EMAIL
                    </h2>
                    <a className="leading-relaxed">
                    hmarken@ualberta.ca
                    </a>
                </div>
                </div>
            </div>

          </div>
        </section>
  
        
      </main>

 
    </div>
  )
}
