import React from 'react';

export const SVGCommitElement = (props) => {
    const origin = `${props.cx}px calc(${props.positionY}% - ${props.cy}px)`;
    const y = props.offset
        ? `calc(${props.positionY}% - ${props.cy + (props.offset * 20) + 10}px)`
        : `calc(${props.positionY}% - ${props.cy}px)`;
    return (
        <React.Fragment>
            <circle r='24' cx={props.cx} cy={y} className='scale-up' style={{transformOrigin: origin}}/>
            <svg x={props.cx} y={y}>
                <text x='0' y='0' textAnchor='middle' dy='.3em' className='scale-up'
                      style={{transformOrigin: '0px 0px'}}>
                    {props.hash}...
                </text>
            </svg>
        </React.Fragment>
    )
};
