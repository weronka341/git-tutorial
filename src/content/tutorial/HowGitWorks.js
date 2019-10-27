import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';

export const HowGitWorks = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.HOW_GIT_WORKS}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Aby pracować z Gitem nie trzeba znać wewnętrznego mechanizmu jego działania, jednak
                wiedza o tym, co dzieje się „pod spodem” wykonywanych komend pozwala na bardziej
                świadome wykorzystanie tego narzędzia.
                Możemy traktować Gita jako swego rodzaju bazę klucz-wartość. Wartością w tym
                przypadku będą dane – np. plik, natomiast klucz to te same dane zakodowane przy użyciu
                funkcji haszującej i reprezentowane przez ciąg znaków (SHA-1).
            </p>
            <p>
                Git przechowuje dane w specjalnym obiektach, do których należą:<br/>
                • <span className='highlight'>blob</span>&nbsp;– przechowuje skompresowaną zawartość
                pojedynczego pliku wraz z metadanymi,<br/>
                • <span className='highlight italic'>tree</span><span className='highlight'> (drzewo)</span>&nbsp;
                – przechowuje strukturę projektu, zawiera wskaźniki na bloby lub inne drzewa oraz metadane, jak np.
                nazwę pliku.
            </p>
            <p>
                Git tworzy również inne typy obiektów – jak&nbsp;<span className='highlight'>commit</span>, lecz do tego
                przejdziemy za chwilę.
                Bardzo ważną własnością Gita, której zawdzięcza swoją wydajność, jest to, że identyczną
                zawartość przechowuje tylko raz – nie tworzy kopii, lecz wskaźniki.
                Miejscem, w którym znajdują się dane przechowywane i zarządzane przez Gita, jest
                specjalny, ukryty katalog&nbsp;<span className='highlight'>.git</span>.
                W podkatalogu <span className='highlight'>.git/objects</span> znajdziemy wszystkie aktualnie
                przechowywane przez Gita obiekty.
            </p>
        </React.Fragment>
    );
};