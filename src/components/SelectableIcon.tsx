import React, { PropsWithChildren, ReactNode } from "react";

export default function SelectableIcon({
    label,
    sectiontag,
    children,
}: PropsWithChildren<PageSectionNav>) {
    // <div className="tooltip tooltip-open" data-tip="hello"></div>
    return (
        <div
            className="flex items-center justify-center w-12 h-12 px-2 
        text-center rounded-full outline-none tooltip tooltip-info
         hover:bg-yellowes bg-blacky-200 text-blacky-500"
            data-tip={label}
        >
            <button className="">{children}</button>
        </div>
    );
}

type PageSectionNav = {
    label: string;
    sectiontag: string;
};
