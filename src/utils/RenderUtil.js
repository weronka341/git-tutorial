import React from 'react';
import {RevisionControl} from '../content/tutorial/RevisionControl';
import {WhatIsGit} from '../content/tutorial/WhatIsGit';
import {HowGitWorks} from '../content/tutorial/HowGitWorks';
import {GitInit} from '../content/tutorial/GitInit';
import {GitClone} from '../content/tutorial/GitClone';
import {GitConfig} from '../content/tutorial/GitConfig';
import {GitWorkflow} from '../content/tutorial/GitWorkflow';
import {DirToStage} from '../content/tutorial/DirToStage';
import {StageToRepo} from '../content/tutorial/StageToRepo';
import {GitStash} from '../content/tutorial/GitStash';
import {GitBranching} from '../content/tutorial/GitBranching';
import {GitRefs} from '../content/tutorial/GitRefs';
import {DetachedHEAD} from '../content/tutorial/DetachedHEAD';
import {GitRelativeRefs} from '../content/tutorial/GitRelativeRefs';
import {GitMerge} from '../content/tutorial/GitMerge';
import {MergeConflicts} from '../content/tutorial/MergeConflicts';
import {CherryPicking} from '../content/tutorial/CherryPicking';
import {GitRebase} from '../content/tutorial/GitRebase';
import {InteractiveRebase} from '../content/tutorial/InteractiveRebase';
import {FixingMistakes} from '../content/tutorial/FixingMistakes';
import {GitRemote} from '../content/tutorial/GitRemote';
import {GitFetch} from '../content/tutorial/GitFetch';
import {GitPull} from '../content/tutorial/GitPull';
import {GitPush} from '../content/tutorial/GitPush';
import {GitHub} from '../content/tutorial/GitHub';
import {Gitignore} from '../content/tutorial/Gitignore';
import {Introduction} from '../content/tutorial/Introduction';
import {ExerciseIntroPage} from '../containers/ExerciseIntroPage';

export const renderSelectedTutorialSection = {
    INTRODUCTION: <Introduction/>,
    REVISION_CONTROL: <RevisionControl/>,
    WHAT_IS_GIT: <WhatIsGit/>,
    HOW_GIT_WORKS: <HowGitWorks/>,
    GIT_INIT: <GitInit/>,
    GIT_CLONE: <GitClone/>,
    GIT_CONFIG: <GitConfig/>,
    GIT_WORKFLOW: <GitWorkflow/>,
    DIR_TO_STAGE: <DirToStage/>,
    STAGE_TO_REPO: <StageToRepo/>,
    COMMIT_EXERCISE: <ExerciseIntroPage name='COMMIT_EXERCISE'/>,
    GIT_STASH: <GitStash/>,
    GIT_BRANCHING: <GitBranching/>,
    BRANCHING_EXERCISE: <ExerciseIntroPage name='BRANCHING_EXERCISE'/>,
    GIT_REFS: <GitRefs/>,
    DETACHED_HEAD: <DetachedHEAD/>,
    GIT_RELATIVE_REFS: <GitRelativeRefs/>,
    GIT_MERGE: <GitMerge/>,
    MERGE_EXERCISE: <ExerciseIntroPage name='MERGE_EXERCISE'/>,
    MERGE_CONFLICTS: <MergeConflicts/>,
    CHERRY_PICKING: <CherryPicking/>,
    GIT_REBASE: <GitRebase/>,
    INTERACTIVE_REBASE: <InteractiveRebase/>,
    REBASE_EXERCISE: <ExerciseIntroPage name='REBASE_EXERCISE'/>,
    FIXING_MISTAKES: <FixingMistakes/>,
    GIT_REMOTE: <GitRemote/>,
    GIT_FETCH: <GitFetch/>,
    GIT_PULL: <GitPull/>,
    GIT_PUSH: <GitPush/>,
    GITHUB: <GitHub/>,
    GITIGNORE: <Gitignore/>,
};
