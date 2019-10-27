import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {fullTitles} from '../titles/SectionTitles';
import './TutorialTextStyle.css';
import {CommandText} from '../../components/commandText/CommandText';

export const GitRelativeRefs = () => {
    return (
        <React.Fragment>
            <Header as='h2'>
                <Header.Content>
                    {fullTitles.GIT_RELATIVE_REFS}
                </Header.Content>
            </Header>
            <Divider/>
            <p>
                Jednym ze sposobów na wskazanie konkretnego commita jest określanie jego położenia względem HEAD.<br/>
                Znak ~ odnosi się do commitów-rodziców, natomiast przy pomocy liczby podanej po znaku ~ zaznaczamy, ile
                pokoleń chcemy się cofnąć, np.:
            </p>
            <CommandText>$ git show HEAD~2</CommandText>
            <p>
                Wyświetli „dziadka” wskaźnika HEAD.
            </p>
            <p>
                Niektóre commity posiadają więcej niż jednego rodzica. Znak ~ zawsze pokaże tylko pierwszego z nich,
                więc jeśli chcemy odwołać się do innego, używamy znaku ^.
            </p>
            <CommandText>$ git show HEAD^2</CommandText>
            <p>
                Wyświetli drugiego rodzica wskaźnika HEAD.
            </p>
        </React.Fragment>
    );
};