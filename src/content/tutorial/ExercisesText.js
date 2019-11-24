import React from 'react';

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
                repozytorium. Wykonaj trzy razy operację <span className='bold'>git commit</span>, aby zaliczyć
                ćwiczenie.
            </p>,
        tip: <p>Wpisz komendę <span className='bold'>git commit</span>.</p>,
    }
};
