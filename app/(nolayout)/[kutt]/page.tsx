import { redirect } from "next/navigation";

export default function Page({
    params,
}: {
    params: {
        kutt: string;
    };
}): JSX.Element {
    const link = params.kutt;
    if (link.startsWith("K")) {
        redirect("https://kutt.cloud.r1a.nl/" + link.slice(1));
    }
    return <></>;
}
