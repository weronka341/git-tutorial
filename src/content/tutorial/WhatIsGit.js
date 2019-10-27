import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';

export const WhatIsGit = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.WHAT_IS_GIT}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Git jest jednym z najpopularniejszych systemów kontroli wersji na świecie. Jest darmowy,
                o otwartym kodzie źródłowym, dostępny na wielu systemach operacyjnych i wspierany
                przez środowiska programistyczne. Stanowi swego rodzaju standard i jest wykorzystywany
                w wielu firmach. Git należy do systemów&nbsp;
                <span className='highlight'>rozproszonych</span>&nbsp;, co w najprostszych słowach
                oznacza, że repozytorium nie znajduje się w jednym miejscu, lecz każdy z kontrybutorów
                ma jego lokalną kopię, nad którą pracuje, i udostępnia swoje zmiany innym.
            </p>
        </React.Fragment>
    );
};