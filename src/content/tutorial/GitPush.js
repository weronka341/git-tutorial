import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitPush = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_PUSH}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Do „wypychania” własnych zmian do zdalnego repozytorium służy&nbsp;
                <span className='highlight'>git push</span>.
            </p>
            <CommandText>$ git push origin feature </CommandText>
            <p>
                Aktualizuje zdalne repozytorium <span className='highlight'>origin</span> o Twoją lokalną gałąź/tag o
                nazwie <span className='name'>feature</span> wraz z jej wszystkimi commitami, historią, itd. Komenda
                zadziała tylko, jeśli posiadasz najnowszą wersję projektu.
            </p>
            <CommandText>$ git push origin --all</CommandText>
            <p>
                Dodaje do <span className='highlight'>origin</span> wszystkie lokalne gałęzie.
            </p>
            <CommandText>$ git push origin --tags</CommandText>
            <p>
                Dodaje do <span className='highlight'>origin</span> wszystkie tagi.
            </p>
        </React.Fragment>
    );
};