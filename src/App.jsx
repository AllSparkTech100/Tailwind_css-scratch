import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "../public/Images/man.png";
import design from "../public/Images/icon.webp";
import code from "../public/Images/bar-1.jpg";
import consulting from "../public/Images/bar-2.jpg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : " "}>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="text-xl font-burtons  ">AllSpark Technologies</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    className="cursor-pointer"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* name */}
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-yellow-500">
                Dimitri Marco
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Developer and Designer.
              </h3>
              <p className="text-md py-5 leading-8 tex-gray-800 md:text-xl dark:text-white max-w-lg mx-auto">
                Freelancer Providing Services for programming needs. Join me
                down below and let&lsquo;s get cracking!
              </p>
            </div>
            {/* links */}
            <div className="text-5xl justify-center flex gap-16 cursor-pointer py-3 text-gray-600 dark:text-white">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            {/* Imsage */}
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
              <img
                src={Image}
                alt="User"
                className="object-cover layout-fill"
              />
            </div>
          </section>

          {/* Services */}
          <section className="mt-14">
            <div className="text-center">
              <h1 className="text-3xl p-10 dark:text-white text-center">
                Services I Offer
              </h1>
              <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
                Since the beginning of my journey as a freelance developer,
                I&lsquo;ve done remote work for{" "}
                <span className="text-teal-500 dark:text-yellow-500">
                  Agencies
                </span>{" "}
                Consulted for{" "}
                <span className="text-teal-500 dark:text-yellow-500 ">
                  Startups
                </span>{" "}
                and collaborated with talented people to create digital products
                for both business and consumer use
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-200">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img
                  src={design}
                  alt=""
                  className="rounded-lg mx-auto"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2 ">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg mx-auto"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Elegant Ambience
                </h3>
                <p className="py-2">
                  Creating elegant decorations to suite your needs following
                  core design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
                <img
                  src={consulting}
                  className="rounded-lg mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section>
            <div className="text-center dark:text-white">
              <h3 className="text-3xl py-1 ">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-80">
                Since the beginning of my journey as a freelance developer,
                I&lsquo;ve done remote work for{" "}
                <span className="text-teal-500 dark:text-yellow-500">Agencies</span> Consulted for{" "}
                <span className="text-teal-500 dark:text-yellow-500">Startups</span> and collaborated
                with talented people to create digital products for both
                business and consumer use
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-200">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  src={code}
                  alt=""
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
