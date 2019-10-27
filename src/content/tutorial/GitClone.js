import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitClone = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_CLONE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Jeśli projekt, nad którym chcesz pracować, istnieje już jako zewnętrzne repozytorium Gita,
                możesz go „sklonować” i pracować nad nim lokalnie. Służy do tego komenda&nbsp;
                <span className='highlight'>git clone</span>. Jako argument przyjmuje adres URL zdalnego repozytorium,
                np. :
            </p>
            <CommandText>$ git clone ssh://twojemail@gmail.com/sciezka/do/projektu/twoj-projekt.git</CommandText>
        </React.Fragment>
    );
};