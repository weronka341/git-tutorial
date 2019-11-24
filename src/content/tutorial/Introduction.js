import React from 'react'
import {Divider, Header, Icon, Card} from 'semantic-ui-react'
import '../../containers/tutorialContentContainer/TutorialContentContainer.css';
import {fullTitles} from '../titles/SectionTitles';

export const Introduction = () => (
    <React.Fragment>
        <Header as='h2'>
            <Icon name='code branch' circular/>
            <Header.Content>
                {fullTitles.INTRODUCTION}
            </Header.Content>
        </Header>
        <Divider/>
        <p>
            Git to niezwykle wszechstronne narzędzie, lecz nawet jego podstawowa znajomość pozwala na
            efektywną i wygodną pracę. Tutorial obejmuje zarówno wiedzę teoretyczną, jak i praktyczne użycie komend,
            które pozwolą Ci na świadome korzystanie z Gita. Przed rozpoczęciem nauki ustalmy kilka kwestii:
        </p>
        <Card fluid color='teal'>
            <Card.Content header='Konsola'
                          className='teal'
            />
            <Card.Content>
                <Card.Description>
                    Tutorial zakłada korzystanie z Gita za pośrednictwem konsoli, bez użycia dodatkowych
                    programów z interfejsem graficznym – dzięki temu lepiej oswoisz się z komendami i zrozumiesz,
                    jak działa Git.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card fluid color='purple'>
            <Card.Content header=' Ćwiczenia'
                          className='purple'
            />
            <Card.Content>
                <Card.Description>
                    Niektóre zagadnienia łatwiej zrozumieć, mając przed sobą wizualizację tego, co dzieje się
                    po wykonaniu danej komendy. Ułatwiają to przygotowane w tutorialu ćwiczenia, dzięki którym będziesz
                    mógł dosłownie zobaczyć efekt swoich działań. Weź pod uwagę, że konsola w przeglądarce to jedynie
                    imitacja – naprawdę nie korzysta z Gita, więc jeśli chcesz dodatkowo poćwiczyć, zainstaluj Gita
                    lokalnie i do dzieła! Link do instalatora znajdziesz&nbsp;
                    <a href=' https://git-scm.com/downloads'>TUTAJ</a>.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card
            fluid
            color='blue'>
            <Card.Content
                header='Słownictwo'
                className='blue'
            />
            <Card.Content>
                <Card.Description>
                    Z Gitem związanych jest wiele pojęć, które nie mają swoich odpowiedników w języku polskim
                    bądź też brzmią one sztucznie i nie są powszechnie stosowane. Z tego powodu w tutorialu często
                    spotkasz oryginalne angielskie nazwy lub ich spolszczone wersje – nie jest to eleganckie,
                    lecz takim właśnie językiem posługują się deweloperzy korzystający z Gita.
                </Card.Description>
            </Card.Content>
        </Card>
        <p>
            Skoro wszystko już ustalone, czas przejść do nauki. Zaczynamy!
        </p>
    </React.Fragment>
);
