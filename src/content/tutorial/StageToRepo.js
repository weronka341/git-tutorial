import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const StageToRepo = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.STAGE_TO_REPO}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Przechodzimy do najważniejszej części i esencji Gita, czyli commitów.&nbsp;
                <span className='highlight'>Commit</span> jest specjalnym obiektem, który przechowuje obraz/migawkę
                (ang. <span className='italic'>snapshot</span>) wszystkich zmian znajdujących się w przechowalni
                w danej chwili. Commit to taki „Ctrl+S” Gita, dzięki niemu zmiany zostaną zapisane w repozytorium. Można
                uważać commity za „znaczniki” na osi czasu tworzenia projektu. Dlatego tak łatwo cofnąć się do jego
                wcześniejszych wersji.
            </p>
            <p>
                Od strony technicznej commit jest zakodowanym obiektem, reprezentowanym za pomocą ciągu znaków SHA-1.
                Wskazuje na obiekt typu drzewo (<span className='italic'>tree</span>), o którym wspominaliśmy
                na początku, oraz zawiera takie metadane, jak autora, datę, specjalną wiadomość
                (<span className='italic'>commit message</span>) oraz informacje o rodzicu lub rodzicach
                (<span className='italic'>parent commit</span>). Polecenie <span className='highlight'>git commit</span>
                &nbsp;tworzy więc specjalny obiekt z przechowywanych plików oraz ustawia commita-rodzica po to, żeby
                można
                było odtworzyć historię repozytorium (co więcej, przesuwa aktualną gałąź tak, by wskazywała na nowo
                powstałego commita; sens tego działania stanie się jasny, gdy przejdziemy do omawiania gałęzi).
            </p>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_COMMIT}
                </Header.Content>
            </Header>
            <p>
                Wykonanie komendy <span className='highlight'>git commit</span> uruchomi edytor tekstowy w celu wpisania
                wiadomości. Taka wiadomość powinna w skrócie opisywać, jakie zmiany wnosi dodawany commit. Nie można jej
                pominąć – jeśli nie wpisze się żadnej wiadomości, commit zostanie przerwany: zmiany nie będą
                zatwierdzone. Aby za każdym razem nie otwierać edytora, można uruchomić polecenie
                &nbsp;<span className='highlight'>git commit</span> z flagą <span className='highlight'>-m</span>.
            </p>
            <CommandText>$ git commit -m "wiadomosc"</CommandText>
            <p>
                Tworzy commit z podaną wiadomością.
            </p>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_COMMIT_AMEND}
                </Header.Content>
            </Header>
            <p>
                Dodany już commit można jeszcze zmodyfikować. Służy do tego opcja
                &nbsp;<span className='highlight'>--amend</span> . Po uruchomieniu polecenia:
            </p>
            <CommandText> $ git commit --amend</CommandText>
            <p>
                będziemy mieli możliwość dodać zmiany do poprzedniego commita zamiast tworzyć nowego.
            </p>
        </React.Fragment>
    );
};
