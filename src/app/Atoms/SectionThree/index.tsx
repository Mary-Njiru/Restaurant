import React from "react";

interface SectionProps{
    content_three:React.ReactNode
}
const SectionThreeAtom = ({content_three}:
    SectionProps) => {
        return (
            <div>
                {content_three}
            </div>
        )
    }

export default SectionThreeAtom;