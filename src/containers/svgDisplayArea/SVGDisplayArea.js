import React from 'react';
import {connect} from 'react-redux';
import {SVGCommitElement} from '../../components/svgElements/SVGCommitElement';
import {SVGArrow} from '../../components/svgElements/SVGArrow';
import {resizeSvgContent} from '../../actions/ActionCreator';
import {SVGRefElement} from '../../components/svgElements/SVGRefElement';
import {actions} from '../../actions/Action';
import './SVGDisplayArea.css';

class SVGDisplay extends React.Component {
    componentDidUpdate() {
        const parentRect = this.parent.getBoundingClientRect();
        const childRect = this.child.getBoundingClientRect();
        if (parentRect.width - this.props.dimensions.shift < childRect.width) {
            this.props.resizeContent();
        }
    }

    renderCommits() {
        const {commits, dimensions} = this.props;
        return commits.map(commit =>
            <SVGCommitElement key={commit.index}
                              cx={this.calculateCommitXPosition(commit.index)}
                              cy={this.calculateCommitYPosition(commit.index)}
                              hash={commit.hash}
                              positionY={dimensions.commit.positionY}
                              offset={commit.offset}
            />
        );
    }

    renderArrows() {
        const {commits, dimensions} = this.props;
        return commits.filter(c => c.index).map((commit, index) =>
            <SVGArrow key={index}
                      x2={this.calculateCommitXPosition(commit.parentCommit)}
                      y2={this.calculateCommitYPositionWithOffset(commit.parentCommit)}
                      x1={this.calculateCommitXPosition(commit.index)}
                      y1={this.calculateCommitYPositionWithOffset(commit.index)}
                      positionY={dimensions.commit.positionY}
            />
        );
    }

    renderRefs() {
        const {refs, dimensions} = this.props;
        return refs.map((ref, index) =>
            <SVGRefElement key={index}
                           x={this.calculateCommitXPosition(ref.commit)}
                           y={this.calculateCommitYPosition(ref.commit)}
                           name={ref.name}
                           position={ref.position}
                           positionY={dimensions.commit.positionY}
                           offset={this.findCommit(ref.commit).offset}
            />
        );
    }

    calculateCommitYPositionWithOffset(index) {
        const {dimensions} = this.props;
        const commit = this.findCommit(index);
        const offset = commit.offset ? commit.offset * 20 + 10 : 0;
        return commit.level * dimensions.commit.distanceY + offset;
    }

    calculateCommitYPosition(index) {
        const {dimensions} = this.props;
        return this.findCommit(index).level * dimensions.commit.distanceY;
    }

    calculateCommitXPosition(index) {
        const {dimensions} = this.props;
        const commit = this.findCommit(index);
        return (commit.position + 1) * dimensions.commit.distanceX;
    }

    findCommit(index) {
        const {commits} = this.props;
        return commits.find(c => c.index === index);
    }

    render() {
        return (
            <React.Fragment>
                <svg className='svg' ref={ref => (this.parent = ref)}>
                    <g ref={ref => (this.child = ref)}>
                        {this.renderCommits()}
                        {this.renderArrows()}
                        {this.renderRefs()}
                    </g>
                </svg>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        commits: state.animations.commits,
        dimensions: state.animations.dimensions,
        arrows: state.animations.arrows,
        refs: state.animations.refs,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resizeContent: () => dispatch(resizeSvgContent(actions.RESIZE_SVG_CONTENT, true)),
    }
};

export const SVGDisplayArea = connect(mapStateToProps, mapDispatchToProps)(SVGDisplay);
