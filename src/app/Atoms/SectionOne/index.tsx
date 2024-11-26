import React from "react";

interface SectionProps{
    content_one:React.ReactNode
}
const SectionOneAtom = ({content_one}:
    SectionProps) => {
        return (
            <div>
                {content_one}
            </div>
        )
    }

export default SectionOneAtom;