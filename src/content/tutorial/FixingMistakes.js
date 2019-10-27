import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const FixingMistakes = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.FIXING_MISTAKES}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                W tej sekcji omówimy dostępne w Gicie komendy i strategie do cofania wprowadzonych już zmian. Mechanizm
                ten działa jednak inaczej, niż moglibyśmy się spodziewać – w większości przypadków zmiany te nie są
                bowiem rzeczywiście usuwane, a raczej Git „cofa” nas w czasie do momentu, gdy błędy nie zostały
                popełnione lub też nadpisuje je.
            </p>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_RM}
                </Header.Content>
            </Header>
            <p>
                <span className='highlight'>Git rm --cached</span> to znany Ci już sposób na usunięcie plików z
                przechowalni. Po wykonaniu komendy plik nie będzie już śledzony przez Gita.
            </p>
            <CommandText>$ git rm --cached plik.js </CommandText>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_CLEAN}
                </Header.Content>
            </Header>
            <CommandText>$ git clean </CommandText>
            <p>
                Komenda <span className='highlight'>git clean</span> służy do wyczyszczenia katalogu roboczego ze
                wszystkich plików, które nie są śledzone przez Gita
                (tzw. <span className='italic'>untracked files</span>).
            </p>
            <CommandText>$ git clean -n</CommandText>
            <CommandText>$ git clean --dry-run</CommandText>
            <p>
                Wykonanie polecania z opcją <span className='highlight'>-n</span>&nbsp;
                lub <span className='highlight'>--dry-run</span> pokaże, które pliki zostaną usunięte bez faktycznego
                usuwania ich.
            </p>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_REVERT}
                </Header.Content>
            </Header>
            <p>
                Zamiast usunąć niechciany commit <span className='highlight'>git revert</span> tworzy nowy commit, który
                wprowadza odwrotne do niego zmiany. Dzięki temu otrzymujemy pożądany efekt z zachowaniem pełnej historii
                commitów. Polecenie dotyczy wymienionego commita,
                np. o przykładowym hashu <span className='name'>9b909ed</span>:
            </p>
            <CommandText>$ git revert 9b909ed</CommandText>
            <p>
                Komenda uruchomiona z opcją <span className='highlight'>--n/--no-commit</span> nie stworzy nowego
                commita z odwrotnymi zmianami, lecz doda je do przechowalni i katalogu roboczego.
            </p>
            <CommandText>$ git revert --no-commit 9b909ed</CommandText>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_RESET}
                </Header.Content>
            </Header>
            <p>
                <span className='highlight'>Reset</span> to wszechstronne narzędzie do cofania zmian. Załóżmy, że
                chcesz, aby Twoja gałąź wskazywała na inny commit.
                Komenda <span className='highlight'>git reset</span> umożliwia „przestawienie” aktualnego wskaźnika HEAD
                (i powiązanej z nim gałęzi) na wybrany commit.
            </p>
            <CommandText>$ git reset HEAD~1</CommandText>
            <p>
                Od teraz wszystkie commity, na które wcześniej wskazywał HEAD, a także commit, który po operacji
                <span className='highlight'>reset</span> wskazuje na ten sam commit co HEAD, stają się nieosiągalne.
            </p>
            <p>
                Korzystając z parametrów można zdecydować, czy „zresetowane” ma zostać tylko repozytorium (przez zmianę
                HEAD), czy zmiany mają zostać wprowadzone również do przechowalni i katalogu roboczego.
            </p>
            <CommandText>$ git reset HEAD~1 --soft</CommandText>
            <p>
                Przesuwa wskaźnik HEAD pozostawiając przechowalnię i katalog roboczy bez zmian.
            </p>
            <CommandText>$ git reset HEAD~1 --mixed</CommandText>
            <p>
                Przesuwa wskaźnik HEAD i wprowadza zmiany do przechowalni (opcja domyślna).
            </p>
            <CommandText>$ git reset HEAD~1 --hard</CommandText>
            <p>
                Przesuwa wskaźnik HEAD i wprowadza zmiany do przechowalni oraz katalogu roboczego.
            </p>
        </React.Fragment>
    );
};