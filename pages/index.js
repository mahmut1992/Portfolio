import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import GithubIcon from "../components/icons/Github";
import TwitterIcon from "../components/icons/Twitter";
import LinkedinIcon from "../components/icons/Linkedin";
import Link from "next/link";
import TypingAnimation from "../components/TypingAnimation";

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden  md:block h-auto absolute top-48 right-10 z-[1] "
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden  md:block h-auto absolute bottom-10 left-10 z-[1] "
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="text-xl mt-5 font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Fırat ŞABAHAT
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
                href="https://github.com/mahmut1992"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              <motion.a
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              <motion.a
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/f%C4%B1rat-%C5%9Fabahat-1b8a30332/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> 👉 "How do
                    you like my portfolio page? Aren’t the balloons awesome?"
                    🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/58704020?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        let frontendSkills =
                        ["Reactjs","Nextjs","TypeScript","JavaScript","UnitTest",..];
                      </p>
                      <p className="text-sm">
                        let mobileSkills = ["ReactNative", "JavaScript",
                        "TypeScript",...];
                      </p>
                      <p className="text-sm">
                        let backendSkills = ["Nodejs","Expressjs", "JavaScript",
                        "TypeScript",...];
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 justify-between">
                    <div className="flex items-center space-x-12">
                      <Link href="/projects">
                        <a className="transition duration-300 no-underline font-bold">
                          Projects
                        </a>
                      </Link>

                      <a
                        href="https://github.com/mahmut1992?tab=repositories"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className="transition duration-300 no-underline font-bold "
                      >
                        Github
                      </a>
                    </div>
                    <p
                      href="fratsbht@icloud.com"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300 "
                    >
                      E-Mail : fratsbht@icloud.com
                    </p>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
