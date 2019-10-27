import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitRebase = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_REBASE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                <span className='highlight'>Rebase</span> to alternatywna do <span
                className='highlight'>merge</span>&nbsp;
                metoda na scalanie ze sobą gałęzi. Jak już wiesz, merge to commit posiadający dwoje rodziców –
                korzystając z tej metody dostajemy nieliniową strukturę gałęzi podobną do tej na obrazku:
            </p>
            <p>
                Natomiast <span className='highlight'>rebase</span> „nakłada” commity z jednej gałęzi na drugą – tworząc
                tym samym liniowa historię zmian:
            </p>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git checkout feature
            </CommandText>
            <CommandText>
                <span className='branch-name'>(feature)</span>&nbsp;$ git rebase master
            </CommandText>
            <p>
                Jak widać na obrazku, gałąź <span className='name'>feature</span> została dodana na koniec gałęzi <span
                className='name'>master</span> – wszystkie nowe commity z <span className='name'>master</span> są teraz
                także częścią gałęzi <span className='name'>feature</span>. Jednak, odwrotnie niż w przypadku merge,
                historia projektu została zmieniona – stworzonych zostało tyle nowych commitów, ile było na oryginalnej
                gałęzi <span className='name'>feature</span>.
            </p>
            <p>
                <span className='highlight'>Rebase</span> to inaczej przydzielanie commitom nowych rodziców, dawanie im
                zupełnie nowej <span className='highlight'>bazy</span>. Główną zaletą stosowania tej metody jest
                przejrzysta i prosta struktura projektu, pozbawiona dodatkowych obiektów <span className='highlight'>merge commit</span>,
                tworzonych w przypadku <span className='highlight'>git merge</span>.
                Jednak korzystanie z <span className='highlight'>rebase</span> niesie ze sobą spore ryzyko
                – przez nadpisywanie historii projektu tracimy kontekst wprowadzonych zmian, a przez nieświadome użycie
                tej metody możemy bardzo namieszać w projekcie. Dlatego jedną z dobrych praktyk jest niekorzystanie
                z&nbsp;
                <span className='highlight'>rebase</span> przy pracy z publicznymi gałęziami, z których korzysta wiele
                osób.
            </p>
        </React.Fragment>
    );
};