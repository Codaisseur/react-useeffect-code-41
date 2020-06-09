# React day 2 warmup code 41

- [Lecture recording](https://drive.google.com/file/d/1Af_6m3bl5Gos7eOhExlMHUYFQUQwFZPT/view?usp=sharing)

## React yesterday

- front end JavaScript library for building UIs

* set it up with `create-react-app`

  - sets up a folder
  - initializes a Git repo
  - install packages from npm (`react`, `react-dom`)
  - development server `npm run start`

* deploy it (continuous deployment)

  - `git push` -> `master`
  - Netlify will pull any new commits to `master` on the GitHub repo in, and build them
  - producing the html/css/js files
  - puts them online (kjshdfjsd.netlify.app)

* components

  - a blueprint for a piece of UI
  - a function usually capitalized that returns a piece of JSX
  - they form a "tree" or "nesting" of components

  ```jsx
  function MyComponent() {
    return <div>hello</div>;
  }

  <MyComponent />;
  ```

* props

  - how components communicate between each other
  - it is used to passing data
  - sent from parent to child

  ```jsx
  function ParentComponent() {
    return (
      <ul className="namelist">
        <ChildComponent name="Kelley" />
        <ChildComponent name="Heleen" />
        <ChildComponent name="Elsie" />
      </ul>
    );
  }

  function ChildComponent(props) {
    return <li>Name: {props.name}</li>;
  }
  ```

* interpolation

  - a way of combining different pieces of data into a single thing
  - string interpolation:

    ```js
    const myString = `Hello, ${name}`;
    ```

  - JSX interpolation:

    ```jsx
    const myJsx = <div>Hello, {name}</div>;
    ```

* mapping

  - takes an array, and produces a _new_ array by calling a transformer (mapper) callback function on every item, separately, and putting them into the new array

  ```jsx
  const newArray = ["Kelley", "Heleen", "Elsie"].map((name) => {
    return name.length;
  });
  // newArray <- [6, 6, 5]
  ```

## React today

- state management
- fetching data
- mapping / JSX

Component just **transforms data to JSX / UI**.

```jsx
function ChildComponent(props) {
  return <li>Name: {props.name}</li>;
}
```

Component can have internal / managed data:

```jsx
function ChildComponent(props) {
  const [surname, setSurname] = useState("");

  const doSomething = () => {
    console.log("hello?");
    setSurname("van Evert");
  };

  return (
    <li>
      Name: {props.name} {surname}
      <button onClick={doSomething}>change surname</button>
    </li>
  );
}
```
