import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiPython, DiDocker, DiLinux } from "react-icons/di";
import Image from "next/image";
import pytorch from "../../public/icons/pytorch.svg";
import fastapi from "../../public/icons/fastapi.svg";

const iconClassNames =
    "transition duration-100 hover:scale-110 hover:-translate-y-1";

export default function Page(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center lg:mt-56">
            <div className="mb-36 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16 xl:gap-48">
                <div className="ml-8 flex w-[80%] flex-col gap-2 sm:w-[36rem] md:ml-20 md:w-[40rem] lg:ml-0 xl:w-[50rem]">
                    <h1 className="pl-4 text-xl font-bold lg:text-2xl">
                        Hi! I'm Radomyr
                    </h1>
                    <p className="text-3xl font-medium leading-tight lg:text-5xl lg:leading-tight">
                        Applied Science student at Ukrainian Catholic University
                    </p>
                </div>
                <h1 className="text-6xl font-bold lg:text-8xl">Me</h1>
            </div>
            <div className="mt-40 flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-bold lg:text-5xl">Used</h1>
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <FaHtml5 size={50} className={iconClassNames} />
                        <FaCss3Alt size={50} className={iconClassNames} />
                        <FaJsSquare size={50} className={iconClassNames} />
                        <SiNextdotjs size={50} className={iconClassNames} />
                        <SiTailwindcss size={50} className={iconClassNames} />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <DiPython size={50} className={iconClassNames} />
                        <Image
                            src={pytorch}
                            alt="pytorch"
                            height={50}
                            className={iconClassNames}
                        />
                        <Image
                            src={fastapi}
                            alt="fastapi"
                            height={50}
                            className={iconClassNames}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <DiDocker size={50} className={iconClassNames} />
                        <DiLinux size={50} className={iconClassNames} />
                    </div>
                </div>
                <p className="text-xl font-medium leading-tight text-sky-400 lg:text-2xl lg:leading-tight">
                    For each thing used make a tag that can be used in articles
                    about each project. Then every project will have a page with
                    all tools used mentioned as icons and then explained.
                    <br />
                    Also add my servers to the list of projects.
                    <br />
                    Mb add a color or smth to indicate familiarity with each
                    <br />
                    Add a section here about projects/add just text that how I
                    used tools can be viewed in my [[Projects]]. And then add
                    also a "Project" to header
                </p>
            </div>
        </div>
    );
}
