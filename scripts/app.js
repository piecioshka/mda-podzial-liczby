/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @see http://piecioshka.pl/projects/mda-podzial-liczby/
 * @licence The MIT License {@link http://piecioshka.mit-license.org/}
 */
(function () {
    'use strict';

    var n = $('#a'), k = $('#b'), r;
    var $result = $('#result');

    function podzialLiczby(n, k) {
        if (n < k) {
            return 0;
        }

        if (k === 1) {
            return 1;
        }

        if (n === k) {
            return 1;
        }

        return podzialLiczby(n - 1, k - 1) + podzialLiczby(n - k, k);
    }

    $('#do-it').on('submit', function (event) {
        // pobieramy pierwszą wartość z formularza
        n = parseInt(n.val(), 10);

        // pobieramy drugą wartość z formularza
        k = parseInt(k.val(), 10);

        try {
            // liczymy liczbę Stirlinga
            r = podzialLiczby(n, k);

            // pokasujemy kontener z wynikiem
            $result.removeClass('hidden').html('<h4>Wynik: ' + r + '</h4>');
        } catch (e) {
            // ukrywamy kontener z wynikiem
            $result.addClass('hidden');

            // pokazujemy komunikat błędu
            alert(e);
        }

        event.preventDefault();
    });
}());