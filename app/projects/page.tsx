import React from "react";

export default function Page(): JSX.Element {
    return (
        <>
            <div className="ml-10 mr-10 mt-20 flex flex-wrap justify-center gap-6 text-center md:gap-10">
                <TagDropdown title="Tools">
                    <DropdownItem title="html" />
                    <DropdownItem title="css" />
                    <DropdownItem title="javascript" />
                    <DropdownItem title="nextjs" />
                    <DropdownItem title="tailwindcss" />
                    <DropdownItem title="python" />
                    <DropdownItem title="pytorch" />
                    <DropdownItem title="fastapi" />
                    <DropdownItem title="docker" />
                    <DropdownItem title="linux" />
                </TagDropdown>
            </div>
        </>
    );
}
