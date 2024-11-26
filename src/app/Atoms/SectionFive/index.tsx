import React from "react";

interface SectionProps{
    content_five:React.ReactNode
}
const SectionFiveAtom = ({content_five}:
    SectionProps) => {
        return (
            <div>
                {content_five}
            </div>
        )
    }

export default SectionFiveAtom;