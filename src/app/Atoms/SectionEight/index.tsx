import React from "react";

interface SectionProps{
    content_eight:React.ReactNode
}
const SectionEightAtom = ({content_eight}:
    SectionProps) => {
        return (
            <div>
                {content_eight}
            </div>
        )
    }

export default SectionEightAtom;