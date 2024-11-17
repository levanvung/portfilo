import React from "react";

interface Iprops{
    btnText?: string,
    btnIcons?: React.ReactNode,
    btnStyle?: React.CSSProperties,
    onClick?: () => void
}
const ResizeButton = (props: Iprops) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button onClick={onClick} className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;