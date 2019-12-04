import React from 'react';

export const SVGCommitElement = (props) => {
    const origin = `0px ${-props.offset}px`;
    return (
        <svg x={props.cx} y={`${props.positionY}%`}>
            <circle r={props.radius} cx='0' cy={-props.offset} className='scale-up' style={{transformOrigin: origin}}/>
            <text x='0' y={-props.offset} textAnchor='middle' dy='.3em' className='scale-up'
                  style={{transformOrigin: origin}}>
                {props.hash}...
            </text>
        </svg>
    );
};
