import React, { useEffect, useState } from "react";

function useFecth(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        setState({
          items: responseData,
          loading: false,
        });
        console.log("izi");
      } else {
        setState((s) => ({ ...s, loading: false }));
      }
    })();
  }, []);
  return [state.loading, state.items];
}
function PostTable() {
  const [loading, items] = useFecth(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const responseData = await response.json();
  //     if (response.ok) {
  //       setItems(responseData);
  //       console.log("izi");
  //     } else {
  //       // alert("rien");
  //     }
  //   })();
  // }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titre</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function useApi(data) {
  const [counts, setCount] = useState(data);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const responseData = await response.json();
      if (response.ok) {
        setCount(responseData);
      } else {
        // alert("rien");
      }
    })();
  }, []);

  return counts;
}

// function useApiComment(data) {
//   const [counts, setCont] = useState(data);

//   useEffect(() => {
//     (async function () {
//       const commentResponse = await fetch(
//         "https://jsonplaceholder.typicode.com/comments"
//       );
//       const commentResponseData = await commentResponse.json();
//       if (commentResponse.ok) {
//         setCont(commentResponseData);
//       } else {
//         alert("hello");
//       }
//     })();
//   }, []);
//   return counts;
// }

function TodoList() {
  // const counts = useApiComment([]);
  // console.log(counts);
  return (
    <div>
      {/* {counts.map((count, index) => (
        <div key={count.id}>
          <h3>{count.name}</h3>
          <p>{count.email}</p>
          <p>{count.body}</p>
        </div>
      ))} */}
      <PostTable />
    </div>
  );
}
export default TodoList;
