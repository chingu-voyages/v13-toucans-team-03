let pomodoro = {
    started : false,
    isTimerRunning : false,
    minutes : 0,
    seconds : 0,
    interval : null,
    breakDom : null,
    minutesDom : null,
    secondsDom : null,
    init : function() {
        let self = this;
        // this.breakDom = document.getElementById('break').style.display = "none";
        this.minutesDom = document.querySelector('#timer__minutes');
        this.secondsDom = document.querySelector('#timer__seconds');
        this.interval = setInterval(function() {
            self.intervalCallback.apply(self);
        }, 1000);
        this.pdWork = document.getElementById('work');
        this.pdWork.onclick = function() {
            self.startWork.apply(self);
        };
        this.pdShortBreak = document.querySelector('#shortBreak');
        this.pdShortBreak.onclick = function() {
            self.startShortBreak.apply(self);
        };
        this.pdLongBreak = document.getElementById('longBreak');
        this.pdLongBreak.onclick = function() {
            self.startLongBreak.apply(self);
        };
        this.pdStart = document.querySelector('#start');
        this.pdStart.onclick = function() {
            self.startTimer.apply(self);
        };
        this.pdReset = document.querySelector('#reset');
        this.pdReset.onclick = function() {
            self.resetTimer.apply(self);
        };
        const pdStop = document.getElementById('stop');
        pdStop.onclick = function() {
            self.stopTimer.apply(self);
        };
    },
    resetVariables : function(mins, secs, started) {
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
    },

    resetTimerDom : function(mins) {
        this.minutesDom.innerHTML = mins;
        this.secondsDom.innerHTML = "00";
    },

    startTimer : function() {
        this.isTimerRunning = true;
    },

    startWork : function() {
        if (this.isTimerRunning) {
            this.isTimerRunning = false;
            this.resetTimerDom(25);
            this.resetVariables(25, 0, true);
        } else {
            this.resetTimerDom(25);
            this.resetVariables(25, 0, true);
        }
    },

    startShortBreak : function() {
        if (this.isTimerRunning) {
            this.isTimerRunning = false;
            this.resetTimerDom(5);
            this.resetVariables(5, 0, true);
        } else {
            this.resetTimerDom(5);
            this.resetVariables(5, 0, true);
        }
    },

    startLongBreak : function() {
        if (this.isTimerRunning) {
            this.isTimerRunning = false;
            this.resetTimerDom(15);
            this.resetVariables(15, 0, true);
        } else {
            this.resetTimerDom(15);
            this.resetVariables(15, 0, true);
        }
    },

    resetTimer : function() {
        (this.isTimerRunning == true) ? this.resetVariables(25, 0, false): this.resetVariables(5, 0, false);
        this.updateDom();
    },

    stopTimer : function() {
        this.isTimerRunning = (this.isTimerRunning == false) ? true : false;
    },

    toDoubleDigit : function(num) {
        if(num < 10) {
            return "0" + parseInt(num, 10);
        }
        return num;
    },
    updateDom : function() {
        this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    },
    intervalCallback : function() {
        if(!this.started) return false;
        if(this.isTimerRunning) {
            if(this.seconds == 0) {
                if(this.minutes == 0) {
                    this.timerComplete();
                    return;
                }
                this.seconds = 59;
                this.minutes--;
            } else {
                this.seconds--;
            }
            this.updateDom();
        }
    },
    timerComplete : function() {
        this.started = false;
    }
};
const modal_pomodoro = document.getElementById('pomodoro');
const icon_pomodoro = document.querySelectorAll('.pomodoro');

icon_pomodoro.forEach(pdIcon => {
    pdIcon.addEventListener('click', togglePomodoro);
});

function togglePomodoro() {
    this.classList.toggle('pd_clicked');
    modal_pomodoro.classList.toggle('pomodoro_hide');
}

window.onload = function() {
    pomodoro.init();
};