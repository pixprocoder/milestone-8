import { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>{comments.length}</h1>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
}

function Comment(Props) {
  const { name, email, id } = Props.comment;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h5>Email: {email}</h5>
      <h6>id: {id}</h6>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
export default App;
