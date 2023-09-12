import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextMenuItem } from "./menuitems";

export default function Header(opts: { logo_path: string }): JSX.Element {
    return (
        <div className="mb-16 flex w-full flex-row items-start gap-6 md:items-center lg:mb-24">
            <Link href="/">
                <Image
                    src={opts.logo_path}
                    alt="rad1an logo"
                    width="140"
                    height="140"
                />
            </Link>
            <div className="flex flex-col items-start gap-6 md:ml-auto md:mr-20 md:flex-row md:gap-4">
                <TextMenuItem text="Projects" href="/projects" />
                <TextMenuItem text="Conspectus" href="https://conspectus.r1a.nl/README" />
                <TextMenuItem text="Contact" href="/contact" />
                <TextMenuItem text="Guides" href="/guides" />
            </div>
        </div>
    );
}
