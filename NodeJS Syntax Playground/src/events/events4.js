import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", (data) => {
  console.log(data, "- ON1");
});

const MyEvent2Func = (data) => {
  console.log(data, "- ON2");
};

eventEmitter.on("myEvent2", MyEvent2Func);

eventEmitter.once("myEvent", (data) => {
  console.log(data, "- ONCE");
});

eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent", "Emitted Statement");
eventEmitter.emit("myEvent2", "Emitted Statement");
console.log(eventEmitter.eventNames());

eventEmitter.removeListener("myEvent2", MyEvent2Func);
console.log(eventEmitter.eventNames());
