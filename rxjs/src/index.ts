import { bindCallback, catchError, firstValueFrom, map, from, Subject } from "rxjs";

const GET_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPostsAsync(url: string) {
  try {
    const response = await fetch(url);
    const posts = await response.json() as IPost[]
    console.log('fetchPostsAsync:', posts.length);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}


function getJSON(url: string, cb: (response: unknown|null) => void) {
  fetch(url)
    .then(response => response.json())
    .then(json => cb(json))
    .catch(_ => cb(null));
}

const observableFactory = bindCallback(getJSON);
const observable = observableFactory(GET_POSTS_URL);

observable.subscribe(
  (value) => console.log(value)
);

console.log( 'Log 1');

// ToDo: To be continued...
