import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {Tip} from '../../components/tip/Tip';
import {CommandText} from '../../components/commandText/CommandText';

export const DirToStage = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.DIR_TO_STAGE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Komenda <span className='highlight'>git add</span> służy do dodawania zmian wprowadzonych
                w katalogu roboczym do przechowalni. To sposób na „poinformowanie” Gita, które modyfikacje
                poszczególnych plików chcesz zawrzeć w następnym commicie. Pamiętaj jednak, że wykonanie&nbsp;
                <span className='highlight'>git add</span> nie oddziałuje na repozytorium – w rzeczywistości
                zmiany nie będą zapisane, dopóki nie wykonasz <span className='highlight'>git commit</span>.
            </p>
            <CommandText>$ git add plik.js</CommandText>
            <p>
                Dodaje wszystkie zmiany w <span className='name'>plik.js</span> do następnego commita.
            </p>
            <CommandText>$ git add folder</CommandText>
            <p>
                Dodaje wszystkie zmiany w folderze do następnego commita.
            </p>
            <p>
                Dodanie plików do przechowalni można oczywiście cofnąć. Usuniesz je za pomocą
                komendy <span className='highlight'>git rm</span>, a zmienisz ich nazwę korzystając
                z <span className='highlight'>git mv</span>.
            </p>
            <CommandText>$ git rm --cached plik.js</CommandText>
            <p>
                Usuwa <span className='name'>plik.js</span> z przechowalni – nadal będzie on dostępny
                w katalogu roboczym.
            </p>
            <CommandText>$ git rm -r --cached folder</CommandText>
            <p>
                Usunie wszystkie pliki z folderu z przechowalni.
            </p>
            <CommandText>$ git rm plik.js</CommandText>
            <p>
                Usuwa <span className='name'>plik.js</span> z przechowalni oraz katalogu roboczego.
            </p>
            <CommandText>$ git mv staranazwa nowanazwa</CommandText>
            <p>
                Służy do przeniesienia lub zmiany nazwy pliku.
            </p>
            <Tip title='TIP'>
                <p>
                    Stan plików (<span className='italic'>untracked/modified/staged</span>) możesz weryfikować za pomocą
                    polecenia <span className='bold'>git status</span>, natomiast aby zobaczyć różnicę pomiędzy
                    zawartością plików, możesz skorzystać z <span className='bold'>git diff</span> (pokazuje różnicę
                    między katalogiem roboczym a przechowalnią) oraz <span className='bold'>git diff --cached</span>
                    &nbsp;(pokazuje różnicę między przechowalnią a repozytorium).
                </p>
            </Tip>
        </React.Fragment>
    );
};