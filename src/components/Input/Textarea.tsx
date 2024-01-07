import React from 'react'

export interface TextAreaProps {
    autoSize?: Boolean | Object
    styles?: React.CSSProperties
}

const Textarea = (props: TextAreaProps) => {
    console.log("Textarea", props)
    return (
        <div>Textarea</div>
    )
}

export default Textarea