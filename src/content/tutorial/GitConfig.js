import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitConfig = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_CONFIG}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Narzędzie <span className='highlight'>git config</span>&nbsp;
                służy do ustawienia zmiennych konfiguracyjnych kontrolujących
                działanie Gita. Mogą one mieć zasięg globalny lub też być przypisane do danego
                repozytorium. Na początek warto się przedstawić, aby Git mógł powiązać Twoją pracę z
                Tobą. Zrobisz to za pomocą następujących komend:
            </p>
            <CommandText>
                $ git config --global user.name "Imie Nazwisko"
            </CommandText>
            <CommandText>
                $ git config --global user.email "email@gmail.com"
            </CommandText>
        </React.Fragment>
    );
};