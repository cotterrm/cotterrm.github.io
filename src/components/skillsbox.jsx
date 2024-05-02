import React from 'react'

export const SkillsBox = ({icon, title, desc, color}) => 
{
    const colorText = "services color-"+color;
    return (
<div className="col-md-4 text-center animate-box">
    <div className={colorText}>
        <span className="icon">
            <i className={icon} />
        </span>
        <div className="desc">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
</div>);
}

export default SkillsBox;