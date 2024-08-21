function Stopwatch() {
  let duration = 0,
    start = 0,
    stop = 0,
    counting = false;
  this.start = function () {
    if (counting) throw new Error("Stoper jest akrywny");
    console.log("started");
    start = Date.now();
    counting = true;
  };
  this.stop = function () {
    if (!counting) throw new Error("Stoper jest nieaktywny");
    console.log("stoped");
    stop = Date.now();
    duration = duration + (stop - start) / 1000;
    counting = false;
  };
  this.reset = function () {
    console.log("reseted");
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
