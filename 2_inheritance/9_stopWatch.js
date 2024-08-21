function Stopwatch() {
  let duration = 0;
  let start;
  let stop;
  let counting;
  this.start = function () {};
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "start", {
    get: function () {
      return start;
    },
  });
  Object.defineProperty(this, "stop", {
    get: function () {
      return stop;
    },
  });
  Object.defineProperty(this, "counting", {
    get: function () {
      return counting;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.counting) throw new Error("Stoper jest aktywny");
  console.log("started");
  this.start = Date.now();
  this.counting = true;
};
Stopwatch.prototype.stop = function () {
  if (!this.counting) throw new Error("Stoper jest nieaktywny");
  console.log("stoped");
  this.stop = Date.now();
  this.duration = this.duration + (this.stop - this.start) / 1000;
  this.counting = false;
};
Stopwatch.prototype.reset = function () {
  console.log("reseted");
  this.start = null;
  this.stop = null;
  this.counting = false;
  this.duration = 0;
};

const sw = new Stopwatch();
