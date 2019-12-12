import React from 'react';
import {connect} from 'react-redux';
import {SVGCommitElement} from '../../components/svgElements/SVGCommitElement';
import {SVGArrow} from '../../components/svgElements/SVGArrow';
import {SVGRefElement} from '../../components/svgElements/SVGRefElement';
import './SVGDisplayArea.css';

class SVGDisplay extends React.Component {
    renderCommits() {
        const {commits, dimensions, activeExercise} = this.props;
        return commits.map(commit =>
            <SVGCommitElement key={commit.index}
                              cx={this.calculateCommitXPosition(commit.index)}
                              hash={commit.hash}
                              positionY={dimensions.commit.positionY}
                              offset={this.calculateCommitYOffset(commit.index)}
                              radius={dimensions.commit.radius}
                              isRebaseExerciseActive={activeExercise === 'REBASE_EXERCISE'}
                              color={commit.color}
            />
        );
    }

    renderArrows() {
        const {commits, dimensions} = this.props;
        return commits.filter(c => c.index).map((commit, index) =>
            <React.Fragment key={index}>
                <SVGArrow key={index + 1000}
                          x2={this.calculateCommitXPosition(commit.parentCommit)}
                          y2={this.calculateCommitYOffset(commit.parentCommit)}
                          x1={this.calculateCommitXPosition(commit.index)}
                          y1={this.calculateCommitYOffset(commit.index)}
                          positionY={dimensions.commit.positionY}
                          level={commit.level}
                          isMergeCommit={false}
                />
                {commit.isMergeCommit &&
                <SVGArrow key={index + 2000}
                          x2={this.calculateCommitXPosition(commit.secondParentCommit)}
                          y2={this.calculateCommitYOffset(commit.secondParentCommit)}
                          x1={this.calculateCommitXPosition(commit.index)}
                          y1={this.calculateCommitYOffset(commit.index)}
                          positionY={dimensions.commit.positionY}
                          level={commit.level}
                          isMergeCommit={true}
                />}
            </React.Fragment>
        );
    }

    renderRefs() {
        const {refs, dimensions} = this.props;
        return refs.map((ref, index) =>
            <SVGRefElement key={index}
                           x={this.calculateCommitXPosition(ref.commit)}
                           name={ref.name}
                           position={ref.position}
                           positionY={dimensions.commit.positionY}
                           offset={this.calculateCommitYOffset(ref.commit)}
            />
        );
    }

    calculateCommitYOffset(index) {
        const {distanceY} = this.props.dimensions.commit;
        const commit = this.findCommit(index);
        const refOffset = commit.offset ? commit.offset * 20 + 10 : 0;
        const levelOffset = commit.level * distanceY;
        const offsetDiff = distanceY - refOffset - 60;
        return offsetDiff > 0 ? levelOffset : levelOffset - offsetDiff;
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
                <svg className='svg'>
                    {this.renderCommits()}
                    {this.renderArrows()}
                    {this.renderRefs()}
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
        activeExercise: state.animations.activeExercise,
    }
};

export const SVGDisplayArea = connect(mapStateToProps)(SVGDisplay);
