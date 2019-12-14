import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const Gitignore = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GITIGNORE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Nie wszystkie pliki, które znajdują się w Twoim projekcie, powinny zostać upublicznione w repozytorium.
                Często tworzą się one automatycznie, np. podczas budowania. Oprócz tego, że zajmują dużo pamięci, każdy
                kontrybutor jest w stanie wygenerować je u siebie lokalnie. Tego typu pliki, a nawet całe foldery,
                należy wyspecyfikować w specjalnym tekstowym pliku <span className='highlight'>.gitignore</span>.
                Dzięki temu Git ich nie wykryje i nie doda do repozytorium. Poniżej przykładowy plik <span
                className='highlight'>.gitignore</span> (linie zaczynające się od # to komentarze):
            </p>
            <CommandText>
                # ignoruje pliki z rozszerzeniem .log<br/>
                *.log<br/>
                # ignoruje pliki systemowe MacOS<br/>
                .DS_store<br/>
                # ignoruje folder node_modules<br/>
                node_modules<br/>
                #ignoruje pliki wykonywalne o rozszerzeniu .o<br/>
                *.o
            </CommandText>
        </React.Fragment>
    );
};