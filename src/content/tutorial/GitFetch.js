import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitFetch = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_FETCH}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Podczas gdy pracujesz nad projektem lokalnie, <span className='highlight'>origin</span> cały czas może
                być rozwijany o nowe funkcjonalności. Do pobrania najnowszych commitów, plików, referencji, itd. z
                repozytorium zdalnego do lokalnego używa się komendy <span className='highlight'>git fetch</span>. Nie
                stają się one częścią Twojego repozytorium – są jedynie pobrane.
            </p>
            <p>
                Aby zintegrować pobrane zmiany ze swoim repozytorium, musisz wykonać&nbsp;
                <span className='highlight'>git checkout</span>, a następnie <span className='highlight'>merge</span>,
                jak w przykładzie poniżej.
            </p>
            <CommandText>$ git fetch origin </CommandText>
            <p>
                Pobierze wszystkie zmiany i wyświetli pobrane gałęzie.
            </p>
            <CommandText>$ git checkout master</CommandText>
            <p>
                Przełączy się na gałąź <span className='name'>master</span>.
            </p>
            <CommandText>$ git merge origin/master</CommandText>
            <p>
                Zsynchronizuje zmiany z <span className='highlight'>origin</span> z lokalnym repozytorium – gałąź <span
                className='highlight'>master</span> i <span className='highlight'>origin/master</span> wskazują teraz na
                ten sam commit, projekt jest zaktualizowany lokalnie.
            </p>
        </React.Fragment>
    );
};