import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const DetachedHEAD = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.DETACHED_HEAD}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Może się zdarzyć, że otrzymasz komunikat o <span className='italic'>detached HEAD</span>,
                czyli odłączeniu HEAD. Dzieje się tak, gdy na przykład zamiast na gałąź przeniesiesz się komendą&nbsp;
                <span className='highlight'>git checkout</span> na wybrany commit.
            </p>
            <CommandText>$ git checkout 56a4e5c08</CommandText>
            <p>
                Oznacza to, że HEAD został przeniesiony w inne miejsce. Jeśli teraz dokonasz zmian w projekcie i
                wykonasz <span className='highlight'>git commit</span>, zmiany nie będą należeć do żadnej z gałęzi,
                przez co stracisz do nich łatwy dostęp. Można temu zaradzić tworząc nową gałąź.
            </p>
        </React.Fragment>
    );
};