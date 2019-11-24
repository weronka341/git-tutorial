import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';
import {Tip} from '../../components/tip/Tip';

export const GitRemote = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_REMOTE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Zdalne repozytorium (ang. <span className='highlight italic'>remote</span>) to po prostu repozytorium,
                którego nie przechowujesz tylko lokalnie na swoim komputerze, lecz znajduje się np. na serwerze, gdzie
                wszyscy kontrybutorzy mają do niego dostęp. Git, jako rozproszony system kontroli wersji, pozwala na
                tworzenie lokalnych kopii repozytorium wraz z kompletną historią oraz strukturą gałęzi.
            </p>
            <p>
                Taki model współdzielenia kodu umożliwia niezaburzoną pracę nad lokalnym repozytorium oraz udostępnianie
                gotowych zmian (m.in. przez dodawanie commitów lub całych gałęzi) do zewnętrznego repozytorium oraz
                aktualizowanie swojej kopii przez pobieranie nowych zmian.
            </p>
            <CommandText>$ git remote </CommandText>
            <p>
                Wyświetli listę wszystkich zdalnych repozytoriów, z którymi jesteś „połączony”. Listę można również
                znaleźć w pliku <span className='highlight'>.git/config</span>.
            </p>
            <CommandText>$ git remote -v</CommandText>
            <p>
                Wyświetli listę wraz z adresami URL.
            </p>
            <CommandText>$ git remote add zdalne_repozytorium git://github.com/user/repository.git</CommandText>
            <p>
                Stworzy nowe połączenie z repozytorium dostępnym pod wskazanym adresem URL, do którego teraz można się
                odwoływać za pomocą nazwy zdalne_repozytorium.
            </p>
            <CommandText>$ git remote rm zdalne_repozytorium</CommandText>
            <p>
                Usunie repozytorium o podanej nazwie.
            </p>
            <CommandText>$ git remote rename zdalne_repozytorium nowe_zdalne_repozytorium</CommandText>
            <p>
                Zmieni nazwę repozytorium z <span className='name'>zdalne_repozytorium</span>&nbsp;
                na <span className='name'>nowe_zdalne_repozytorium</span>.
            </p>
            <Tip title='TIP'>
                <p>
                    Zdalne repozytorium, z którego sklonowany jest Twój lokalny projekt (komenda&nbsp;
                    <span className='bold'>git clone</span>), jest automatycznie dodawane jako&nbsp;
                    <span className='bold'>remote</span> i określane domyślną nazwą &nbsp;
                    <span className='bold'>origin</span>.
                </p>
            </Tip>
        </React.Fragment>
    );
};