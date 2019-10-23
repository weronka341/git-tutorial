import React from 'react'
import {Container, Divider, Header, Icon, Card} from 'semantic-ui-react'
import './WelcomePage.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const WelcomePage = (props) => (
    <Container id='welcome-page'
               className={props.isSidebarVisible ? 'moved-content' : ''}
               textAlign='justified'>
        <Header as='h2'>
            <Icon name='code branch' circular/>
            <Header.Content>Witaj w interaktywnym tutorialu do nauki systemu kontroli wersji Git!</Header.Content>
        </Header>
        <Divider/>
        <Divider/>
        <p>
            Git to niezwykle wszechstronne narzędzie, lecz nawet jego podstawowa znajomość pozwala na efektywną i
            wygodną pracę.
            Tutorial obejmuje zarówno wiedzę teoretyczną, jak i praktyczne użycie komend,
            które pozwolą Ci na świadome korzystanie z Gita.
            Przed rozpoczęciem nauki ustalmy kilka kwestii:
        </p>
        <Card fluid color='teal'>
            <Card.Content header='Konsola'
                          className='teal'
            />
            <Card.Content
                description='Tutorial zakłada korzystanie z Gita za pośrednictwem konsoli, bez użycia dodatkowych programów z interfejsem graficznym – dzięki temu lepiej oswoisz się z komendami i zrozumiesz, jak działa Git. '/>
        </Card>
        <Card fluid color='purple'>
            <Card.Content header='Ćwiczenia'
                          className='purple'
            />
            <Card.Content
                description='Niektóre zagadnienia łatwiej zrozumieć, mając przed sobą wizualizację tego, co dzieje się po wykonaniu danej komendy. Ułatwiają to przygotowane w tutorialu ćwiczenia, dzięki którym będziesz mógł dosłownie zobaczyć efekt swoich działań. Weź pod uwagę, że konsola w przeglądarce to jedynie imitacja – naprawdę nie korzysta z Gita, więc jeśli chcesz dodatkowo poćwiczyć, zainstaluj Gita lokalnie i do dzieła! Link do instalatora znajdziesz tutaj'/>
        </Card>
        <Card fluid color='blue'>
            <Card.Content header='Słownictwo'
                          className='blue'
            />
            <Card.Content
                description='Z Gitem związanych jest wiele pojęć, które nie mają swoich odpowiedników w języku polskim bądź też brzmią one sztucznie i nie są powszechnie stosowane. Z tego powodu w tutorialu często spotkasz oryginalne angielskie nazwy lub ich spolszczone wersje – nie jest to eleganckie, lecz takim właśnie językiem posługują się deweloperzy korzystający z Gita.'/>
        </Card>
    </Container>
);

WelcomePage.propTypes = {
    isSidebarVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        isSidebarVisible: state.visibility.sidebarVisible,
    }
};

export const WelcomePageContainer = connect(mapStateToProps)(WelcomePage);
