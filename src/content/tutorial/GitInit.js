import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {Tip} from '../../components/tip/Tip';
import {CommandText} from '../../components/commandText/CommandText';

export const GitInit = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_INIT}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Czas na trochę praktyki. Pierwsza komenda, którą poznasz, to <span className='highlight'>git init</span>.
                Służy do zainicjalizowania nowego repozytorium, czyli „wirtualnej przechowalni” Twojego projektu.
                Po wykonaniu <span className='highlight'>git init</span> w wybranym folderze zostanie utworzony
                ukryty katalog <span className='highlight'>.git</span>,
                który zawiera wewnętrzne struktury danych niezbędne do działania systemu kontroli wersji.
                Od teraz dokonane przez Ciebie zmiany będą śledzone przez Gita. Jeśli użyjesz komendy w
                katalogu z już istniejącym projektem, zostanie on przekształcony w repozytorium.
            </p>
            <CommandText>$ git init</CommandText>
            <Tip title='TIP'>
                <p>
                    Usunięcie katalogu <span className='bold'>.git</span> powoduje usunięcie repozytorium, lecz
                    istniejące pliki z
                    kodem źródłowym pozostaną nienaruszone.
                </p>
            </Tip>
        </React.Fragment>
    );
};