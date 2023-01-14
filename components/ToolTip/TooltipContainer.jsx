import React from 'react';

const TooltipContainer = ({dataTip, icon, cn, modalOpen}) => {
    return (
        <div onClick={()=>modalOpen(true)} className={`tooltip-container ${cn}`}>
            {icon}
            <span className='tooltip'>{dataTip}</span>
        </div>
    );
};

export default TooltipContainer;