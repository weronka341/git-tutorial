import React from 'react';
import {Divider, Header, Image} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import workflow from '../../images/workflow.svg';
import './TutorialTextStyle.css';

export const GitWorkflow = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_WORKFLOW}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Już wiesz, że system kontroli wersji śledzi zmiany w kodzie źródłowym. Nie musisz się
                jednak obawiać, że każda wprowadzona przez Ciebie modyfikacja jest od razu widoczna dla
                innych kontrybutorów repozytorium. To Ty sam decydujesz, jakie pliki mają być śledzone
                przez Gita, które zmiany chcesz już zaakceptować i kiedy zostaną udostępnione.
            </p>
            <p>
                Praca z Gitem to poruszanie się pomiędzy trzema kluczowymi obszarami
                (ang. <span className='italic'>areas</span>),
                często określanymi również jako drzewa (ang. <span className='italic'> trees</span>):
                <span className='italic'> Working Directory/Working Tree, Staging Area, Repository</span>.
            </p>
            <p>
                <span className='highlight'>
                    Katalog roboczy (ang. <span className='italic'>Working Directory</span>)
                </span> – obszar, w którym pracujesz. Jeśli dodasz nowy plik, nie będzie on domyślnie śledzony
                przez Gita, a dokonane zmiany mogą zostać utracone. Git określa takie pliki mianem
                <span className='italic'> untracked files</span>. Możesz je zobaczyć po wpisaniu komendy&nbsp;
                <span className='highlight'>git status</span>.
            </p>
            <p>
                <span className='highlight'>
                    Przechowalnia (ang. <span className='italic'>Staging Area/Index</span>)
                </span>&nbsp;
                – pliki znajdujące się w tym obszarze są śledzone, a zmiany zapisywane w znanym Ci już katalogu&nbsp;
                <span className='highlight'>.git</span>. Jeśli zmodyfikujesz zawartość pliku, Git będzie „widział”
                różnicę
                (plik będzie miał status <span className='italic'>modified</span>), lecz to Ty odpowiadasz za ponowne
                dodanie zmian do przechowalni. Wszystko, co znajduje się w tym obszarze, będzie bowiem częścią
                następnego <span className='highlight'>commita</span>, o którym dokładniej za chwilę. Na razie
                zapamiętaj, że <span className='italic'>Staging Area</span> to swego rodzaju „przechowalnia” zmian,
                które będą wprowadzone do repozytorium.
            </p>
            <p>
                <span className='highlight'>
                    Repozytorium (ang. <span className='italic'>Repository</span>)
                </span> – to wszystko, co znajduje się w katalogu <span className='highlight'>.git</span>.
                Zawiera historię projektu wraz z wszystkimi commitami, gałęziami, itd. Dokonane zmiany
                znajdujące się w repozytorium mają status <span className='italic'>commited</span>.
            </p>
            <p>
                Na rysunku pokazano uproszczony cykl pracy z Gitem wraz z podziałem na obszary oraz
                odpowiednimi komendami, z pomocą których możemy się między nimi przemieszczać.
                Każda z komend będzie dokładnie omówiona już za chwilę.
            </p>
            <Image centered style={{width: '70%'}} src={workflow}/>
        </React.Fragment>
    );
};