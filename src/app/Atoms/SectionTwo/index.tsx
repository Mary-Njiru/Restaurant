import React from "react";

interface SectionProps{
    content_two:React.ReactNode
}
const SectionTwoAtom = ({content_two}:
    SectionProps) => {
        return (
            <div>
                {content_two}
            </div>
        )
    }

export default SectionTwoAtom;