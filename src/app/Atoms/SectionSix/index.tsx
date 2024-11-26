import React from "react";

interface SectionProps{
    content_six:React.ReactNode
}
const SectionSixAtom = ({content_six}:
    SectionProps) => {
        return (
            <div>
                {content_six}
            </div>
        )
    }

export default SectionSixAtom;