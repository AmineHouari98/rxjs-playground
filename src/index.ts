import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable talking");
  subscriber.next("A");
  setTimeout(() => subscriber.next("B"), 2000);
  setTimeout(() => subscriber.next("C"), 5000);
});

const observer = {
  next: console.log,
};

const subscription = observable$.subscribe(observer);

setTimeout(() => {
  console.log("Observable unsubscribe");
  subscription.unsubscribe();
}, 4000);
