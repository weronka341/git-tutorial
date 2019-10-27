import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitStash = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_STASH}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Czasami zdarza się, że musimy przerwać pracę nad daną funkcjonalnością i zająć się zupełnie inną częścią
                projektu. W takim wypadku nie musimy w pośpiechu commitować niegotowego jeszcze rozwiązania ani martwić
                się, że nasza praca praca przepadnie. Za pomocą <span className='highlight'>git stash</span> możemy
                tymczasowo przechować dokonane w katalogu roboczym zmiany (również te nieśledzone przez Gita) i później
                ponownie je przywrócić.
            </p>
            <CommandText>$ git stash --include-untracked</CommandText>
            <p>
                Tymczasowo czyści katalog roboczy, zachowując dokonane modyfikacje w „stashu” (schowku).
            </p>
            <CommandText>$ git stash pop</CommandText>
            <p>
                Przywraca zmiany ze schowka do katalogu roboczego.
            </p>
            <CommandText>$ git stash apply</CommandText>
            <p>
                Wprowadza zmiany do katalogu roboczego, jednocześnie nadal przechowując je w schowku.
            </p>
            <CommandText>$ git stash list </CommandText>
            <p>
                Wyświetla listę przechowywanych „stashów”.
            </p>
        </React.Fragment>
    );
};