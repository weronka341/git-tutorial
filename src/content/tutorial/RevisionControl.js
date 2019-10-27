import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';

export const RevisionControl = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.REVISION_CONTROL}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Proces tworzenia oprogramowania opiera się na pisaniu nowego kodu źródłowego oraz wprowadzaniu zmian w
                już istniejącym. Nawet wtedy, gdy sam pracujesz nad projektem, zmian może być zbyt dużo, aby wygodnie
                poruszać się między jego kolejnymi wersjami. Dla dewelopera rozwijanie dużego projektu, w którym prace
                nad tą samą częścią kodu prowadzi kilka osób naraz, to codzienność. Często zmiany wprowadzane równolegle
                przez programistów są ze sobą niekompatybilne. Tego rodzaju niezgodność powinna zostać wykryta i
                usunięta w kontrolowany sposób bez blokowania pracy reszty zespołu. W tym celu stosuje się tzw. &nbsp;
                <span className='highlight'>systemy kontroli wersji</span>.
            </p>
            <p>
                <span className='highlight'>System kontroli wersji</span>
                &nbsp;to narzędzie, które pozwala zarządzać zmianami w kodzie poprzez śledzenie każdej
                modyfikacji wprowadzonej przez każdego programistę w projekcie. Dzięki temu można np. przywrócić
                poprzednią wersję pliku, porównywać wybrane wersje ze sobą, sprawdzić, kto wprowadził daną zmianę, czy
                też w łatwy sposób rozwiązywać konflikty powstałe przy łączeniu swojej pracy z pracą innego członka
                zespołu. Bez użycia tego typu narzędzi proces rozwoju oprogramowania byłby bardzo uciążliwy i narażony
                na niepowodzenie.
            </p>
        </React.Fragment>
    );
};