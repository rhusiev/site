import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";

export function ImageCard(props: {
    src: string;
    alt: string;
    href: string;
}): JSX.Element {
    const size = 80;
    return (
        <Link
            href={props.href}
            className="flex justify-center rounded-3xl bg-gradient-to-r from-polar-2 to-polar-1 p-4 text-center shadow-black transition duration-100 hover:scale-105 hover:from-polar-3 hover:to-polar-1 sm:p-10"
            onMouseEnter={(e) => {
                e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
                e.currentTarget.classList.remove("scale-110");
            }}
        >
            <Image src={props.src} alt={props.alt} width={size} height={size} />
        </Link>
    );
}

export function MultiaccountImageCard(props: {
    src: string;
    alt: string;
    texts: Array<[any, string]>;
}): JSX.Element {
    const size = 80;
    return (
        <div
            className="group relative flex justify-center rounded-3xl bg-gradient-to-r from-polar-2 to-polar-1 p-4 shadow-black transition duration-100 hover:scale-105 hover:from-polar-3 hover:to-polar-1 sm:p-10"
            onMouseEnter={(e) => {
                e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
                e.currentTarget.classList.remove("scale-110");
            }}
        >
            <Image
                src={props.src}
                alt={props.alt}
                width={size}
                height={size}
                className="filter transition duration-300 group-hover:blur-sm group-active:blur-sm group-focus:blur-sm"
            />
            <div className="group absolute grid grid-cols-2 items-center justify-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 md:translate-y-[-0.75rem]">
                {props.texts.map((text) => (
                    <Link
                        className="flex h-8 w-8 flex-row items-center justify-center rounded-xl bg-frost-3 text-2xl font-bold text-white shadow transition duration-100 hover:-translate-y-1 hover:transform sm:h-12 sm:w-12"
                        href={text[1]}
                        key={text[1]}
                    >
                        <div key="1" className="relative">
                            <FaUser className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                            <span className="absolute -bottom-2 -right-2 m-0 flex h-3 w-3 items-center justify-center rounded-full bg-frost-3 p-0 text-xs font-bold sm:h-5 sm:w-5 md:text-sm">
                                {text[0]}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const classNames =
    "flex w-[17rem] scale-100 flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-polar-2 to-polar-1 p-4 text-center shadow-black transition duration-100 hover:scale-105 hover:from-polar-3 hover:to-polar-1 sm:p-8";

export function Card(props: {
    src: string;
    alt: string;
    href: string;
    text: string;
}): JSX.Element {
    const size = 72;
    return (
        <Link href={props.href} className={classNames}>
            <Image src={props.src} alt={props.alt} width={size} height={size} />
            <p className="text-lg font-bold text-white">{props.text}</p>
        </Link>
    );
}

export function TextCard(props: {
    href: string;
    text: string | JSX.Element;
}): JSX.Element {
    return (
        <Link href={props.href} className={classNames}>
            <p className="text-lg font-bold text-white">{props.text}</p>
        </Link>
    );
}
