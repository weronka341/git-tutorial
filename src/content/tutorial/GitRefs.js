import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitRefs = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_REFS}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Praca z gitem to praca z commitami. Dlatego istnieje wiele sposobów, aby odnosić się do konkretnych
                obiektów typu commit. Wiesz już, że można je zidentyfikować po unikalnym kodzie/hashu oraz że wskazują
                na nie gałęzie. Takie właśnie wskaźniki zaliczamy do <span className='highlight'>git refs</span>&nbsp;
                (od ang. <span className='italic'>references</span> – referencje). W katalogu&nbsp;
                <span className='highlight'>.git/refs</span> znajdziemy wszystkie referencje, jakie znajdują się
                w projekcie. Każda gałąź ma w folderze <span className='highlight'>.git/refs/heads</span> oddzielny
                plik, którego zawartość to właśnie hash ostatniego wykonanego na danej gałęzi commita.
            </p>
            <p>
                Kolejny typ wskaźników to <span className='highlight'>tagi</span>(etykiety). Tagi wskazują na konkretny
                „punkt” w historii projektu. Zazwyczaj są używane do oznaczania kolejnych wersji programu. Tag możemy
                rozumieć jako gałąź, która ciągle wskazuje na ten sam commit.
            </p>
            <CommandText>$ git tag v1.4</CommandText>
            <p>
                Tworzy nowy tzw. lekki (ang. <span className='italic'>lightweight</span>) tag – w tym przypadku z nazwą
                wersji programu. „Lekki” oznacza, że nie przechowuje dodatkowych metadanych – w przeciwieństwie do tagów
                tzw. opisanych (ang. <span className='italic'>annotated</span>),
                które przechowują informacje o dacie utworzenia, autorze, itd.
            </p>
            <p>
                Tagi opisane tworzy się następująco:
            </p>
            <CommandText>$ git tag -a v1.4 -m "Wersja programu v1.4"</CommandText>
            <p>
                Wymienione polecenia stworzą tag na ostatni commit. Jeśli chcemy otagować inny commit, musimy podać do
                niego odnośnik – np. hash.
            </p>
            <CommandText>$ git tag v1.4 9fceb27</CommandText>
            <p>
                Kolejnym wskaźnikiem, który odgrywa szczególnie ważną rolę, jest <span className='highlight'>HEAD</span>.
                Wskazuje on na ostatni commit na aktualnej gałęzi, czyli rodzica następnego commita :).
                Zmienia się po wykonaniu <span className='highlight'>git commit</span> lub po zmianie gałęzi.
                W pliku <span className='highlight'>.git/HEAD</span> można zobaczyć, do czego odnosi się bieżący HEAD.
            </p>
        </React.Fragment>
    );
};