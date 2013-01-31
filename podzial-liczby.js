(function () {
    "use strict";

    // master scope
    var global = this;

    function PodzialLiczby(n, k) {
        if (n < k) {
            return 0;
        }

        if (k === 1) {
            return 1;
        }

        if (n === k) {
            return 1;
        }

        return PodzialLiczby(n - 1, k - 1) + PodzialLiczby(n - k, k);
    }

    // public API
    global.PodzialLiczby = PodzialLiczby;

}).call(this);
