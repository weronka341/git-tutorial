import React from 'react';

export const SVGRef = (props) => {
    const refOffset = props.offset + (props.position * 20) + 60;
    const arrowOffset = props.offset + 40;
    return (
        <React.Fragment>
            <svg x={props.x - 33} y={`${props.positionY}%`} height="20" width="66">
                <rect x='0' y={-refOffset} height="20" width="66"
                      rx="7" ry="7" className='orange scale-up'
                      style={{transformOrigin: `0px ${-refOffset}`}}
                />
                <text x='50%' y={-refOffset + 10} textAnchor='middle' dy='.3em' className='scale-up ref-name'>
                    {props.name}
                </text>
                {!props.position &&
                <g>
                    <defs>
                        <marker id="refArrow" markerWidth="3" markerHeight="3"
                                refX="0" refY="1.5" orient="auto" className='orange-marker'>
                            <polygon points="0 0, 3 1.5, 0 3"/>
                        </marker>
                    </defs>
                    <line x1='33' y1={-arrowOffset} x2='33' y2={-arrowOffset + 4}
                          stroke="var(--orange)"
                          strokeWidth="3" markerEnd="url(#refArrow)"
                          className='scale-up'
                          style={{transformOrigin: `0px ${-arrowOffset}`}}
                    />
                </g>
                }
            </svg>
        </React.Fragment>
    )
};
