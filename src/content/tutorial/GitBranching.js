import React from 'react';
import {Divider, Header, Image} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';
import {Tip} from '../../components/tip/Tip';
import branching from '../../images/branching.svg';
import branching2 from '../../images/branching2.svg';

export const GitBranching = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_BRANCHING}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Git nie spełniałby swojej roli, gdyby nie umożliwiał równoległej pracy wielu osób nad kodem. Nie byłoby
                to możliwe bez gałęzi. <span className='highlight'>Gałąź </span>
                (ang. <span className='italic'>branch</span>) to w rzeczywistości wskaźnik na konkretny commit. Używa
                się ich, aby w bezinwazyjny sposób odseparować od siebie prace nad różnymi funkcjonalnościami. W ten
                sposób możesz pracować nad swoją częścią, a główna gałąź projektu, czyli tzw. <span
                className='highlight'>master</span>, pozostaje stabilna.
                Gdy skończysz, scalasz swoją gałąź z gałęzią <span className='highlight'>master</span>,
                na której od teraz dostępna jest nowa, wprowadzona przez Ciebie funkcjonalność. Najlepiej zilustruje to
                przykład na obrazku:
            </p>
            <Image centered style={{width: '70%'}} src={branching}/>
            <p>
                Jak widać, gałąź to nie osobna kopia plików projektu, lecz najzwyczajniej seria commitów. Nasza gałąź
                domyślnie wskazuje na ostatni z nich. Dzięki temu przełączanie się pomiędzy gałęziami to w Gicie szybka
                i przyjemna operacja :). Teraz rozumiesz już również, co dokładnie dzieje się podczas operacji&nbsp;
                <span className='highlight'>git commit</span>. Oprócz powstania nowego obiektu – wskaźniki przesuwają
                się tak, by wskazywać na najnowszy commit.
            </p>
            <p>
                Oczywiście gałąź możesz stworzyć także z dowolnej innej gałęzi – niekoniecznie master.
            </p>
            <Image centered style={{width: '70%'}} src={branching2}/>
            <p>
                Zanim przejdziemy do ćwiczeń, poznasz kilka przydatnych przy rozgałęzianiu projektu komend:
            </p>
            <CommandText>$ git branch</CommandText>
            <p>
                Wyświetli listę wszystkich gałęzi w repozytorium.
            </p>
            <CommandText>$ git branch nazwa_galezi</CommandText>
            <p>
                Stworzy nową gałąź o podanej nazwie bez przełączania się na nią.
            </p>
            <CommandText>$ git branch -d nazwa_galezi </CommandText>
            <p>
                Usunie podaną gałąź, o ile nie ma na niej „niezmergowanych” zmian.
            </p>
            <CommandText>$ git branch -D nazwa_galezi </CommandText>
            <p>
                Wymusza usunięcie gałęzi.
            </p>
            <CommandText>$ git checkout nowa_galaz </CommandText>
            <p>
                Przełącza/przenosi na wybraną gałąź – teraz na kolejny commit będzie wskazywała&nbsp;
                <span className='name'>nowa_galaz</span>.
            </p>
            <CommandText>$ git checkout -b nowa_galaz </CommandText>
            <p>
                Przydatny skrót – jednocześnie tworzy i przenosi na na&nbsp;
                <span className='name'>nowa_galaz</span>.
            </p>
            <CommandText>$ git checkout -b nowa_galaz istniejaca_galaz </CommandText>
            <p>
                Stworzy <span className='name'>nowa_galaz</span> jako rozgałęzienie
                z <span className='name'>istniejaca_galaz</span>.
            </p>
            <Tip title='TIP'>
                Gałąź, na której aktualnie pracujemy, jest wyróżniona gwiazdką na liście gałęzi w wynikach komendy
                &nbsp;<span className='bold'>git branch</span>.
            </Tip>
        </React.Fragment>
    );
};