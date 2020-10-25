import React from "react";

const AnchorTag = (props) => {
    const params = props.params;
    return (
        <a className={params.css_class} href={params.href}
           target={params.target} download={params.download}>
            {
                params.icon_class && <i className={params.icon_class}/>
            }
            {
                params.content && <span>{params.content}</span>
            }
        </a>
    );
}

export default AnchorTag;
