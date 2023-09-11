"use client";
import React from "react";
import { ImageCard, MultiaccountImageCard } from "../components/card";

export default function Page(): JSX.Element {
    return (
        <>
            <div className="grid grid-cols-3 justify-center gap-6 text-center md:flex md:flex-row md:justify-center md:gap-10 md:text-center mt-20">
                <MultiaccountImageCard
                    src="/icons/github.png"
                    alt="GitHub"
                    texts={[
                        ["1", "/github1"],
                        ["2", "/github2"],
                    ]}
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
