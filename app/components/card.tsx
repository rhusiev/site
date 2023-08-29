import Link from "next/link";
import Image from "next/image";
import React from "react";

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
