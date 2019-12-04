import React from 'react';

export const SVGArrow = (props) => {
    const {x1, x2, y1, y2, positionY} = props;
    const startArrowPosition = x1 - x2 - 26;
    const curveArrowOrigin = y1 + 42;
    const path = `m 0 ${y1} l 0 ${-y1 + 62} q 0 -20 20 -20 l 54 0`;

    return (x2 + 70 < x1) && (
        <svg x={x2} y={`${positionY}%`}>
            {renderMarker()}
            {y1 === y2
                ? <line x1={startArrowPosition} y1='0' x2='40' y2='0'
                        markerEnd='url(#commitArrow)'
                        className='scale-up-smaller grey-arrow'
                        style={{transformOrigin: `${startArrowPosition - 10}px 0px`}}/>
                : <svg x='0' y={-curveArrowOrigin} width={x1 - x2} height={y2 - y1}>
                    <path d={path}
                          className='scale-up-smaller grey-arrow'
                          markerStart='url(#commitArrow)'
                          style={{transformOrigin: `${startArrowPosition}px 20px`}}/>
                    />
                </svg>
            }
        </svg>
    );
};

const renderMarker = () => (
    <defs>
        <marker id="commitArrow" markerWidth="5" markerHeight="5"
                refX="0" refY="2.5" orient="auto-start-reverse" fill="var(--light-gray-background)">
            <polygon points="0 0, 5 2.5, 0 5"/>
        </marker>
    </defs>
);
