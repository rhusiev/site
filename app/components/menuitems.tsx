import Link from "next/link";
import Image from "next/image";
import React from "react";

export function MenuItem(props: {
    internal: JSX.Element;
    href: string;
    hover: string;
}): JSX.Element {
    return (
        <Link
            href={props.href}
            className={`border-b-4 border-transparent p-2 text-2xl font-bold text-snow-0 shadow-black transition duration-200 ${props.hover}`}
        >
            <div>{props.internal}</div>
        </Link>
    );
}

export function ImageMenuItem(props: {
    src: string;
    alt: string;
    href: string;
    size: number;
    hover?: string;
}): JSX.Element {
    return (
        <MenuItem
            internal={
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={props.size}
                    height={props.size}
                />
            }
            href={props.href}
            hover=""
        />
    );
}

export function TextMenuItem(props: {
    text: string;
    href: string;
}): JSX.Element {
    return (
        <MenuItem
            internal={<div>{props.text}</div>}
            href={props.href}
            hover="hover:border-snow-2 hover:text-snow-2"
        />
    );
}
