import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitPull = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_PULL}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Aktualizację projektu można również przeprowadzić w jednym kroku z użyciem polecenia <span
                className='highlight'>git pull</span>. Wykona się <span className='highlight'>git fetch</span>, a zaraz
                potem <span className='highlight'>merge</span>, dołączając zmiany do lokalnej kopii projektu.
            </p>
            <CommandText>$ git pull</CommandText>
            <p>
                Pobierze zmiany z aktualnej gałęzi ze zdalnego repozytorium i zintegruje je z lokalną kopią tej gałęzi.
            </p>
            <CommandText>$ git pull --rebase</CommandText>
            <p>
                Używa <span className='highlight'>rebase</span> zamiast<span className='highlight'> merge</span>.
            </p>
        </React.Fragment>
    );
};