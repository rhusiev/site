import React from "react";
import { Card } from "../components/card";

export default function Page(): JSX.Element {
    return (
        <>
            <div className="mt-20 ml-10 mr-10 flex flex-wrap justify-center gap-6 text-center md:gap-10 lg:flex">
                <Card
                    src="/guides/linux.png"
                    alt="Linux"
                    href="/guides/linux"
                    text="Linux"
                />
                <Card
                    src="/guides/obsidian.png"
                    alt="Obsidian"
                    href="/guides/obsidian"
                    text="Obsidian"
                />
                <Card
                    src="/guides/neovim.png"
                    alt="Neovim"
                    href="/guides/neovim"
                    text="Neovim"
                />
                <Card
                    src="/guides/obsidian-neovim.png"
                    alt="Obsidian + Neovim"
                    href="/guides/obsidian-neovim"
                    text="Obsidian + Neovim"
                />
            </div>
        </>
    );
}
