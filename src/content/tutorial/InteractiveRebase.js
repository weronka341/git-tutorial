import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const InteractiveRebase = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.INTERACTIVE_REBASE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Podczas wykonywania <span className='highlight'>rebase</span> interaktywnie zamiast automatycznie możesz
                mieć pełną kontrolę nad historią commitów. Aby zacząć interaktywną sesję, należy dodać opcję&nbsp;
                <span className='highlight'>-i</span> do komendy <span className='highlight'>git rebase</span>.
            </p>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git checkout feature
            </CommandText>
            <CommandText>
                <span className='branch-name'>(feature)</span>&nbsp;$ git rebase master -i
            </CommandText>
            <p>
                Po wykonaniu polecenia otworzy się edytor tekstowy z listą wszystkich commitów, które zostaną
                przeniesione.
            </p>
            <p>
                Lista pokazuje jak dokładnie będzie wyglądała gałąź po wykonaniu operacji – teraz możesz ją dowolnie
                zmieniać korzystając z dostępnych opcji:
            </p>
            <p>
                • p, pick – doda niezmieniony commit (opcja domyślna),<br/>
                • r, reword – pozwala na edycję commit message,<br/>
                • e, edit – pozwala na edycję zawartości commita,<br/>
                • s, squash – „dokleja” commit do poprzednika,<br/>
                • f, fixup – działa jak squash z pominięciem commit message,<br/>
                • x, exec – uruchamia komendę podaną w dalszej części linii (używany do uruchamiania testów),<br/>
                • d, drop – usuwa commit.
            </p>
            <p>
                Po zapisaniu pliku Git wykona <span className='highlight'>rebase</span> zgodnie z Twoimi instrukcjami.
            </p>
        </React.Fragment>
    );
};