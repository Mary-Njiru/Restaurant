import React from "react";

interface SectionProps{
    content_nine:React.ReactNode
}
const SectionNineAtom = ({content_nine}:
    SectionProps) => {
        return (
            <div>
                {content_nine}
            </div>
        )
    }

export default SectionNineAtom;