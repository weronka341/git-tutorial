import React from 'react';

export const SVGArrow = (props) => {
    const {x1, x2, y1, y2, positionY, level} = props;
    return !props.isMergeCommit
        ? renderArrow(x1, x2, y1, y2, positionY, level)
        : renderMergeArrow(x1, x2, y1, y2, positionY);
};

const renderArrow = (x1, x2, y1, y2, positionY, level) => {
    const startArrowPosition = x1 - x2 - 26;
    const curveArrowOrigin = y1 + 42;
    const pathUp = `m 0 ${y1 - y2} l 0 ${y2 - y1 + 62} q 0 -20 20 -20 l 54 0`;
    const pathDown = `m 0 ${y1} l 0 ${y1 + 62} q 0 -20 20 -20 l 54 0`;

    return (
        <svg x={x2} y={`${positionY}%`}>
            {renderMarker(y1 === y2)}
            {y1 === y2
                ? <line x1={startArrowPosition} y1={-y1} x2='40' y2={-y2}
                        markerEnd='url(#commitArrow)'
                        className='scale-up-smaller grey-arrow'
                        style={{transformOrigin: `${startArrowPosition - 10}px ${-y1}px`}}/>
                : <svg x='0' y={level < 0 ? y1 : -curveArrowOrigin} width={x1 - x2} height={Math.abs(y2 - y1)}>
                    <path d={level < 0 ? pathDown : pathUp}
                          transform={level < 0 ? `scale(1, -1)` : 'scale(1, 1)'}
                          className={`grey-arrow`}
                          markerStart='url(#commitArrow)'
                          style={{transformOrigin: `${startArrowPosition}px 20px`}}/>
                </svg>}
        </svg>
    );
};

const renderMarker = (shouldArrowBeReversed) => (
    <defs>
        <marker id="commitArrow" markerWidth="5" markerHeight="5"
                refX="0" refY="2.5" orient={shouldArrowBeReversed ? 'auto-start-reverse' : 'auto'}
                fill="var(--light-gray-background)">
            <polygon points="0 0, 5 2.5, 0 5"/>
        </marker>
    </defs>
);

const renderMergeArrow = (x1, x2, y1, y2, positionY) => {
    const pathLeft = `m 40 0 l ${x1 - x2 - 60} 0  q 20 0 20 20 l 0 ${y2 - y1 - 44}`;
    const pathLeftInverted = `m 40 0 l ${x1 - x2 - 60} 0  q 20 0 20 20 l 0 ${(y2 - y1 + 44) * -1}`;
    const pathRight = `m ${x2 - x1} 40 l 0 ${y2 - y1 - 60} q 0 20 -20 20 l -${x2 - x1 - 45} 0`;
    const pathRightInverted = `m ${x2 - x1} -${y1 - y2 - 40} l 0 ${y1 - y2 - 60} q 0 20 -20 20 l -${x2 - x1 - 45} 0`;
    return (
        <svg x={x1 > x2 ? x2 : x1} y={`${positionY}%`} width={Math.abs(x2 - x1)} height={Math.abs(y1 - y2)}>
            {y2 > y1 && x2 < x1 &&
            <svg x='0' y={-y2} width={Math.abs(x2 - x1)} height={Math.abs(y1 - y2)}>
                <path d={pathLeft}
                      className='grey-arrow'
                      markerStart='url(#commitArrow)'
                />
            </svg>
            }
            {y2 > y1 && x2 > x1 &&
            <svg x='0' y={-y2} width={Math.abs(x2 - x1)} height={Math.abs(y1 - y2)}>
                <path d={pathRight}
                      className='grey-arrow'
                      markerStart='url(#commitArrow)'
                />
            </svg>
            }
            {y2 < y1 && x2 > x1 &&
            <svg x='0' y={-y1} width={Math.abs(x2 - x1)} height={Math.abs(y1 - y2)}>
                <path d={pathRightInverted}
                      transform='scale(1,-1)'
                      className='grey-arrow'
                      markerStart='url(#commitArrow)'
                />
            </svg>
            }
            {y2 < y1 && x2 < x1 &&
            <svg x='0' y={-y2} width={Math.abs(x2 - x1)} height={Math.abs(y1 - y2)}>
                <path d={pathLeftInverted}
                      transform='scale(1,-1)'
                      className='grey-arrow'
                      markerStart='url(#commitArrow)'
                />
            </svg>
            }
            {x1 === x2 &&
            <svg x='0' y={-y2}>
                <line x1={0} y1={y2 > y1 ? y2 - y1 - 25 : y2 - y1 + 25} x2={0} y2={y2 > y1 ? 40 : -40}
                      markerEnd='url(#commitArrow)'
                      className='grey-arrow'
                />
            </svg>
            }
        </svg>
    );
};