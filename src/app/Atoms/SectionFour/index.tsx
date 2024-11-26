import React from "react";

interface SectionProps{
    content_four:React.ReactNode
}
const SectionFourAtom = ({content_four}:
    SectionProps) => {
        return (
            <div>
                {content_four}
            </div>
        )
    }

export default SectionFourAtom;