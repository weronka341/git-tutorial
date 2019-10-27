import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';
import {Tip} from '../../components/tip/Tip';

export const MergeConflicts = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.MERGE_CONFLICTS}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Załóżmy, że Deweloper A edytuje kod, nad którym jednocześnie pracuje Deweloper B. Zmiany nie kolidują ze
                sobą, gdyż są wprowadzane na osobnych gałęziach, lecz przy próbie ich scalenia bardzo prawdopodobne jest
                wystąpienie <span className='highlight'>konfliktów</span>. Jeśli Git nie jest w stanie automatycznie
                zintegrować zmian, zostawia to zadanie programiście. Tylko osoba wykonująca&nbsp;
                <span className='highlight'>merge</span> jest świadoma konfliktów – praca reszty zespołu nie jest
                wstrzymana.
            </p>
            <p>
                Podczas wystąpienia konfliktu, Git wstrzymuje proces łączenia do czasu wskazania przez dewelopera, która
                wersja pliku ma zostać zapisana.
            </p>
            <p>
                Konflikty można rozwiązywać z poziomu konsoli, edytując skonfliktowany plik. Przydatne mogą być przy tym
                komendy:
            </p>
            <CommandText>$ git status </CommandText>
            <p>
                – do identyfikacji skonfliktowanych plików, a także do wyświetlania aktualnego stanu repozytorium,
                wskazywania nieśledzonych lub zmodyfikowanych plików, itd.
            </p>
            <CommandText>$ git log --merge </CommandText>
            <p>
                – do wskazania listy skonfliktowanych commitów pomiędzy gałęziami,
            </p>
            <CommandText>$ git diff </CommandText>
            <p>
                – do obserwacji różnic między plikami.
            </p>
            <Tip>
                <p>
                    Dobrze wiedzieć, jak rozwiązać konflikty używając linii poleceń, lecz w codziennej pracy jest to
                    dość uciążliwe. Istnieją narzędzia, które wspomagają ten proces, takie jak&nbsp;
                    <span className='bold'>Git ReReRe</span>. Dodatkowo środowiska programistyczne wspierające pracę z
                    Gitem umożliwiają bardziej intuicyjny i wygodny sposób na rozwiązywanie konfliktów – warto z nich
                    korzystać.
                </p>
            </Tip>
        </React.Fragment>
    );
};