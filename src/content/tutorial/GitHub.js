import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';

export const GitHub = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GITHUB}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Być może spotkałeś się już z nazwą <span className='highlight'>GitHub</span> lub trafiłeś na stronę
                github.com przy szukaniu informacji o Gicie. Jest to bardzo popularny serwis internetowy do
                udostępniania projektów informatycznych, korzystających z systemu kontroli wersji Git. GitHub zrzesza
                programistów, ułatwia dzielenie się swoim kodem z innymi, korzystanie z repozytoriów o otwartym kodzie
                źródłowym oraz kontrybuowanie do nich. Często spełnia również funkcję portfolio – możesz pochwalić się
                tam swoimi projektami. Oczywiście dostępne są również inne, podobne serwisy hostingowe, jak <span
                className='highlight'>GitLab</span> czy <span className='highlight'>Bitbucket</span>. Warto stworzyć
                sobie konto użytkownika w którymś z nich i wypróbować, co ma do zaoferowania dane narzędzie.
            </p>
        </React.Fragment>
    );
};