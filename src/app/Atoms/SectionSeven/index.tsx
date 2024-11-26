import React from "react";

interface SectionProps{
    content_seven:React.ReactNode
}
const SectionSevenAtom = ({content_seven}:
    SectionProps) => {
        return (
            <div>
                {content_seven}
            </div>
        )
    }

export default SectionSevenAtom;