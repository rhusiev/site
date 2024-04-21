"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageCard } from "../components/card";

export default function Page(): JSX.Element {
    return (
        <>
            <div className="grid grid-cols-3 justify-center gap-6 text-center md:flex md:flex-row md:justify-center md:gap-10 md:text-center mt-20">
                <ImageCard
                    src="/icons/github.png"
                    alt="GitHub"
                    href="/github"
                />
                <ImageCard
                    src="/icons/gitlab.png"
                    alt="GitLab"
                    href="/gitlab"
                />
                <ImageCard
                    src="/icons/telegram.png"
                    alt="Telegram"
                    href="/telegram"
                />
                <ImageCard
                    src="/icons/discord.png"
                    alt="Discord"
                    href="/discord"
                />
            </div>
        </>
    );
}
