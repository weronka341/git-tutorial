import React from 'react';
import {CommandText} from '../../components/commandText/CommandText';

export const exercisesText = {
    COMMIT_EXERCISE: {
        intro:
            <p>
                Czas na pierwsze ćwiczenie. Na początek coś prostego, aby zapoznać się z interfejsem obsługującym
                wizualizacje. Po kliknięciu przycisku "Rozpocznij ćwiczenie" zostaniesz przeniesiony na stronę z
                zadaniem do wykonania. Na dole strony jest dostępna konsola do wpisywania komend. Na pasku u góry
                znajduje się polecenie oraz przyciski do wyświetlenia podpowiedzi, zrestartowania ćwiczenia oraz powrotu
                do treści tutorialu.<br/><br/>
                Treść Twojego pierwszego zadania brzmi:
            </p>,
        text:
            <p>
                Załóż, że w przechowalni Twojego projektu każdorazowo znajdują się zmiany gotowe do dodania do
                repozytorium. Wykonaj trzy razy operację <span className='bold highlight'>git commit</span>, aby
                zaliczyć
                ćwiczenie.
            </p>,
        tip: <p>Wpisz komendę <code className='inside-command'>$ git commit</code>.</p>,
    },
    BRANCHING_EXERCISE: {
        intro:
            <p>
                Kolejne ćwiecznie dotyczy pracy z gałęziami.
            </p>,
        text:
            <p>
                Aktualnie pracujesz na gałęzi <span className='bold name'>master</span>. Twoim zadaniem jest stworzenie
                gałęzi <span className='bold name'>featureA</span> i wykonaniu na niej operacji commit. Następnie stwórz
                kolejną gałąź <span className='bold name'>featureAA</span>, wychodzącą z gałęzi <span
                className='bold name'>featureA</span> i dodaj zmiany do repozytorium. Potem stwórz jeszcze jedną
                gałąź&nbsp;
                <span className='bold name'>featureB</span>, która wychodzi z <span className='bold name'>mastera</span>.
                Analogicznie wykonaj na niej operację commit. Powodzenia!
            </p>,
        tip:
            <React.Fragment>
                <p>Nową gałąź stworzysz za pomocą komendy:</p>
                <CommandText>$ git branch featureA</CommandText>
                <p>i przełączysz się na nią za pomocą: </p>
                <CommandText>$ git checkout featureA</CommandText>
                <p>lub skrótem: </p>
                <CommandText>$ git checkout -b featureA</CommandText>
                <p>Pamiętaj, że nowe rozgałęzienie stworzy się z aktualnie aktywnej gałęzi. Jeśli więc
                    chcesz stworzyć gałąź <span className='bold name'>featureB</span> wychodzącą z <span
                        className='bold name'>mastera</span>, gdy aktualnie znajdujesz się na gałęzi&nbsp;
                    <span className='bold name'>featureAA</span>, musisz najpierw przełączyć się na gałąź&nbsp;
                    <span className='bold name'>master</span> i wtedy stworzyć nową gałąź lub użyć skrótu:
                </p>
                <CommandText>$ git checkout -b featureB master</CommandText>
            </React.Fragment>,
    },
    MERGE_EXERCISE: {
        intro:
            <p>
                Czas na przećwiczenie operacji merge.
            </p>,
        text:
            <p>
                Tworzysz nową funkcjonalność na gałęzi <span className='bold name'>featureA</span>. W międzyczasie do
                mastera doszły zmiany, których potrzebujesz, aby kontynuować pracę. Dodatkowo, funkcjonalność, którą
                zaimplementowałeś na gałęzi <span className='bold name'>featureB</span> jest już kompletna. Korzystając
                z polecenia <span className='bold highlight'>git merge</span> dołącz gałąź <span
                className='bold name'>featureB</span>
                do gałęzi <span className='bold name'>master</span>, a następnie gałąź <span
                className='bold name'>master</span>
                do gałęzi <span className='bold name'>featureA</span>, aby zaliczyć ćwiczenie.
            </p>,
        tip:
            <React.Fragment>
                <p>Upewnij się, że jesteś na gałęzi, do której chcesz dołączyć zmiany - w tym przypadku
                    <span className='bold name'>master</span> i wykonaj komendę :
                </p>
                <CommandText>$ git merge featureB</CommandText>
                <p>Następnie po przełączeniu się na gałąź <span
                    className='bold name'>featureA</span> za pomocą: </p>
                <CommandText>$ git checkout featureA</CommandText>
                <p> dołącz zmiany z mastera: </p>
                <CommandText>$ git merge master</CommandText>
            </React.Fragment>
    },
    REBASE_EXERCISE: {
        intro:
            <p>
                Kolejne ćwiczenie ma na celu wizualizację operacji <span className='highlight'>rebase</span>.
            </p>,
        text:
            <p>
                Korzystając z komendy <span className='bold highlight'>git rebase</span> doprowadź do następującego
                ułożenia commitów: <span className='bold name'>{`a <- b <- c <- d <- e <- f`}</span>. Pamiętaj, że w
                rzeczywistości <span className='bold highlight'>rebase</span> nie przenosi commitów tylko tworzy
                zupełnie nowe z identyczną zawartością. Podobnie jak przy operacji <span
                className='bold highlight'>merge</span> - komenda <span
                className='bold highlight'>git rebase master</span> wykonana na gałęzi <span
                className='bold name'>featureA</span> dołączy zmiany z gałęzi <span
                className='bold name'>master</span> "na" zmiany z <span className='bold name'>featureA</span>,
                pozostawiając samego <span className='bold name'>mastera</span> bez zmian.
            </p>,
        tip:
            <React.Fragment>
                <p>Upewnij się, że aktywna gałąź to <span className='bold name'>featureD</span> i wykonaj komendę :</p>
                <CommandText>$ git rebase master</CommandText>
                <p>Następnie, po przełączeniu się na gałąź <span className='bold name'>featureG</span> wykonaj:
                </p>
                <CommandText>$ git rebase featureD</CommandText>
            </React.Fragment>
    },
};