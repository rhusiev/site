/* import Link from "next/link";
import React from "react";

export function CustomLink({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}): JSX.Element {
    // If the link is local it will start with a "/"
    // Otherwise it'll be something like "https://"
    return href.startsWith("/") || href === "" ? (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export function Table(props: any): JSX.Element {
    return (
        <div className={styles["table-container"]}>
            <table {...props}>{props.children}</table>
        </div>
    );
} */
