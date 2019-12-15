let pomodoro = {
    started: false,
    isTimerRunning: false,
    isWorkRunning: false,
    isShortBreakRunning: false,
    isLongBreakRunning: false,
    minutes: 0,
    seconds: 0,
    progressHeight: 0,
    progressIncrement: 0,
    interval: null,
    breakDom: null,
    minutesDom: null,
    secondsDom: null,
    progressDom: null,
    init: function() {
      let self = this;
      this.minutesDom = document.getElementById("timer__minutes");
      this.secondsDom = document.getElementById("timer__seconds");
      this.progressDom = document.getElementById("progress");
      this.interval = setInterval(function() {
        self.intervalCallback.apply(self);
      }, 1000);
      this.pdWork = document.getElementById("work");
      this.pdWork.onclick = function() {
        self.startWork.apply(self);
        self.updateDom.apply(self);
      };
      this.pdShortBreak = document.getElementById("shortBreak");
      this.pdShortBreak.onclick = function() {
        self.startShortBreak.apply(self);
        self.updateDom.apply(self);
      };
      this.pdLongBreak = document.getElementById("longBreak");
      this.pdLongBreak.onclick = function() {
        self.startLongBreak.apply(self);
        self.updateDom.apply(self);
      };
      this.pdStart = document.getElementById("start");
      this.pdStart.onclick = function() {
        self.startTimer.apply(self);
      };
      this.pdReset = document.getElementById("reset");
      this.pdReset.onclick = function() {
        self.resetTimer.apply(self);
      };
      const pdStop = document.getElementById("stop");
      pdStop.onclick = function() {
        self.stopTimer.apply(self);
      };
    },
    resetVariables: function(mins, secs, started) {
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.progressIncrement = 200 / (this.minutes * 60);
      this.progressHeight = 0;
    },
  
    resetTimerDom: function(mins) {
      this.minutesDom.innerHTML = mins;
      this.secondsDom.innerHTML = "00";
    },
  
    startTimer: function() {
      if (this.isTimerRunning === false) {
        this.isTimerRunning = true;
        if (this.minutesDom.innerHTML === "25") {
          this.resetVariables(25, 0, true);
        } else if (this.minutesDom.innerHTML === "05") {
          this.resetVariables(5, 0, true);
        } else if (this.minutesDom.innerHTML === "15") {
          this.resetVariables(15, 0, true);
        }
      }
    },
  
    startWork: function() {
      this.isShortBreakRunning = false;
      this.isLongBreakRunning = false;
      this.isWorkRunning = true;
      if (this.isTimerRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(25);
        this.resetVariables(25, 0, true);
      } else {
        this.resetTimerDom(25);
        this.resetVariables(25, 0, true);
      }
    },
  
    startShortBreak: function() {
      this.isLongBreakRunning = false;
      this.isWorkRunning = false;
      this.isShortBreakRunning = true;
      if (this.isTimerRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(5);
        this.resetVariables(5, 0, true);
      } else {
        this.resetTimerDom(5);
        this.resetVariables(5, 0, true);
      }
    },
  
    startLongBreak: function() {
      this.isWorkRunning = false;
      this.isShortBreakRunning = false;
      this.isLongBreakRunning = true;
      if (this.isTimerRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(15);
        this.resetVariables(15, 0, true);
      } else {
        this.resetTimerDom(15);
        this.resetVariables(15, 0, true);
      }
    },
  
    resetTimer: function() {
      if (this.isWorkRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(25);
        this.resetVariables(25, 0, false);
        this.updateDom();
      } else if (this.isLongBreakRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(15);
        this.resetVariables(15, 0, false);
        this.updateDom();
      } else if (this.isShortBreakRunning) {
        this.isTimerRunning = false;
        this.resetTimerDom(5);
        this.resetVariables(5, 0, false);
        this.updateDom();
      }
    },
  
    stopTimer: function() {
      this.isTimerRunning = false;
    },
  
    toDoubleDigit: function(num) {
      if (num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom: function() {
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.progressHeight = this.progressHeight + this.progressIncrement;
      this.progressDom.style.height = this.progressHeight + "px";
    },
    intervalCallback: function() {
      if (!this.started) return false;
      if (this.isTimerRunning) {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
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
    timerComplete: function() {
      this.started = false;
      this.progressHeight = 0;
    }
  };

  window.onload = function() {
    pomodoro.init();
  };
  