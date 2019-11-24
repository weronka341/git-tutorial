import React from 'react';

export const SVGRefElement = (props) => {
    const refOffset = props.y + (props.position * 20) + 60;
    const originY = props.offset
        ? `calc(${props.positionY}% - ${refOffset + (props.offset * 20) + 10}px)`
        : `calc(${props.positionY}% - ${refOffset}px)`;
    return (
        <React.Fragment>
            <svg x={props.x - 30} y={originY} height="20" width="60">
                <rect x='0' y='0' height="20" width="60"
                      rx="7" ry="7" className='orange scale-up'>
                </rect>
                <text x='50%' y='50%' textAnchor='middle' dy='.3em' className='scale-up ref-name'>
                    {props.name}
                </text>
                {!props.position &&
                <g>
                    <defs>
                        <marker id="refArrow" markerWidth="3" markerHeight="3"
                                refX="0" refY="1.5" orient="auto" className='orange'>
                            <polygon points="0 0, 3 1.5, 0 3"/>
                        </marker>
                    </defs>
                    <line x1='30' y1='20' x2='30' y2='24'
                          stroke="var(--orange)"
                          strokeWidth="3" markerEnd="url(#refArrow)"
                          className='scale-up'
                    />
                </g>
                }
            </svg>
        </React.Fragment>
    )
};
