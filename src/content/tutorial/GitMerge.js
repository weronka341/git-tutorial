import React from 'react';
import {Divider, Header, Image, ImageGroup} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';
import {Tip} from '../../components/tip/Tip';
import merge1 from '../../images/merge1.svg';
import merge2 from '../../images/merge2.svg';

export const GitMerge = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_MERGE}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Za pomocą <span className='highlight'>git merge</span> można scalać ze sobą gałęzie, czyli tworzyć
                jednolitą historię zmian z niezależnych od siebie sekwencji commitów. Zazwyczaj łączy się ze sobą dwie
                gałęzie (i takie przypadki będziemy rozważać), mimo iż Git pozwala na łączenie wielu gałęzi naraz.
            </p>
            <p>
                <span className='highlight'>Merge</span> to commit, który posiada dwoje (lub więcej) rodziców. Łączenie
                polega na znalezieniu commita, który stanowi wspólną bazę dla obu gałęzi, i stworzeniu nowego
                obiektu <span className='highlight'>merge commit</span>, zawierającego zmiany wprowadzone na obu z nich.
            </p>
            <p>
                Pamiętaj, że jeśli jesteś aktualnie na danej gałęzi – np. <span className='name'>master</span> – i
                dołączysz do niej zmiany z gałęzi o nazwie <span className='name'>feature</span>, to tylko <span
                className='name'>master</span> zostanie zmodyfikowany, natomiast&nbsp;
                <span className='name'>feature</span> pozostanie bez zmian.
            </p>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git checkout -b feature
            </CommandText>
            <CommandText>
                <span className='branch-name'>(feature)</span>&nbsp;$ git add feature_file.js
            </CommandText>
            <CommandText>
                <span className='branch-name'>(feature)</span>&nbsp;$ git commit -m "Finish a feature"
            </CommandText>
            <CommandText>
                <span className='branch-name'>(feature)</span>&nbsp;$ git checkout master
            </CommandText>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git add master_file.js
            </CommandText>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git commit -m "Finish changes on master"
            </CommandText>
            <CommandText>
                <span className='branch-name'>(master)</span>&nbsp;&nbsp;$ git merge feature
            </CommandText>
            <ImageGroup size='large' style={{padding: '15px 0'}}>
                <Image src={merge1}/>
                <Image src={merge2}/>
            </ImageGroup>
            <p>
                Pokazany wyżej przykład dołącza zmiany wprowadzone na gałęzi feature do gałęzi master.
            </p>
            <Tip title='TIP'>
                <p>
                    Jeśli dodasz kilka commitów na swojej gałęzi <span className='bold'>feature</span> i chcesz ją
                    złączyć z gałęzią <span className='bold'>master</span>, na której
                    od czasu rozgałęzienia nie było żadnych zmian, to dostaniesz komunikat o&nbsp;
                    <span className='bold'>fast-forward-merge</span>. Oznacza to, że jesteś „do przodu” z historią
                    commitów i zamiast łączenia, <span className='bold'>master</span> po prostu przesunie się na ostatni
                    commit z <span className='bold'>feature</span>.
                </p>
                <p>
                    Jeśli jednak zależy Ci na tym, by dokładnie znać historię commitów, możesz „zmusić” Gita do
                    wykonania łączenia korzystając z komendy:
                </p>
                <CommandText>$ git merge --no-ff</CommandText>
            </Tip>
        </React.Fragment>
    );
};