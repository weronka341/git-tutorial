import React from 'react';

export const SVGArrow = (props) => {
    const {x1, x2, y1, y2, positionY} = props;
    const originX1 = x1 - 26;
    const originX2 = x2 + 40;
    const originY1 = `calc(${positionY}% - ${y1}px)`;
    const originY2 = `calc(${positionY}% - ${y2}px)`;
    const curveArrowOrigin = `calc(${positionY}% - ${y1 + 42}px)`;
    const height = `calc(${positionY}% - ${y1 - y2}px)`;
    const path = `m 0 ${y1} l 0 ${-y1 + 62} q 0 -20 20 -20 l 54 0`;

    return (props.x2 + 70 < props.x1) && (
        <React.Fragment>
            {renderMarker()}
            {originY1 === originY2
                ? <line x1={originX1} y1={originY1} x2={originX2} y2={originY2}
                        markerEnd='url(#commitArrow)'
                        className='scale-up-smaller grey-arrow'
                        style={{transformOrigin: `${props.x1 - 32}px ${props.positionY}%`}}/>
                : <svg x={x2} y={curveArrowOrigin} width={x1 - x2} height={height}>
                    <path d={path}
                          className='grey-arrow'
                          markerStart='url(#commitArrow)'
                          style={{transformOrigin: `${props.x1 - 32}px ${props.positionY}%`}}/>
                    />
                </svg>

            }
        </React.Fragment>
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
