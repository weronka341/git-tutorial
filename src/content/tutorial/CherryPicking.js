import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const CherryPicking = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.CHERRY_PICKING}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Komenda <span className='highlight'>git cherry-pick</span> służy do „kopiowania” wybranego commita.
                Tworzy nowy commit na aktualnej gałęzi z taką samą wiadomością i zawartością jak inny commit. Jest
                przydatna, gdy na przykład przez przypadek dodamy zmianę na innej gałęzi niż zamierzaliśmy. Wtedy
                wystarczy przełączyć się na odpowiednią gałąź i dodać wybranego commita za pomocą&nbsp;
                <span className='highlight'>cherry-pick</span>.
            </p>
            <CommandText>$ git cherry-pick 2d44a</CommandText>
            <p>
                Wybieramy commita odwołując się do niego przez jego hash (możemy go znaleźć korzystając z&nbsp;
                <span className='highlight'>git log</span>). Po wykonaniu komendy nasza aktualna gałąź wskazuje na
                commit <span className='name'>2d44a</span>.
            </p>
            <CommandText>$ git cherry-pick 2d44a --no-commit</CommandText>
            <p>
                Opcja <span className='highlight'>--no-commit</span> pozwala na przeniesienie zawartości commita do
                naszego katalogu roboczego bez commitowania.
            </p>
        </React.Fragment>
    );
};