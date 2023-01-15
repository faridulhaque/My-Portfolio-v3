import React from 'react';

const TooltipContainer = ({dataTip, icon, cn}) => {
    return (
        <div  
        className={`tooltip-container ${cn}`}>
            {icon}
            <span className='tooltip'>{dataTip}</span>
        </div>
    );
};

export default TooltipContainer;