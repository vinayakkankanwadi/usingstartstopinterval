var ssi= require("startstopinterval");

// sleep time expects milliseconds.
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function fn() {
 var d = new Date();
 console.log(d);
}

console.log("start")
ssi.startStopInterval(true,fn,1000);

sleep(5000).then(() => {
 console.log("stop");
 ssi.startStopInterval(false,fn);
});

