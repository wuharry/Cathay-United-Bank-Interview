import React, { useState } from "react";

interface userData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const SearchBox: React.FC = () => {
  const [users, setUsers] = React.useState<userData[]>([]);
  const fetchData = async (id: string) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    if (res.status !== 200) {
      console.log("fetchError", res);
    }
    const json = await res.json();
    console.log(json);
  };

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.value;
    debounce(() => {
      fetchData(id);
    }, 1000);
  }
  return (
    <>
      <input type="search" name="p" onChange={handleOnChange} />

      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </>
  );
};

// /** Can you explain the problem with the following code, and how to fix
// it. **/
// class Count extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state = { count: 0 };
//   this.handleAddCount = this.handleAddCount.bind(this);
//   }

//   handleAddCount(){
// 因為setState是非同步的,所以在這裡多次設置Setstate可能會導致結果不如預期
// 我會改成以下寫法,以傳入call back 函式的方式來改善,函式接受現在的state,然後回傳更新後的state
// this.setState((prevState) => ({ count: prevState.count + 1 }));

//   this.setState({ count: this.state.count + 1 });
//   this.setState({ count: this.state.count + 1 });
//   this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//   return (
//   <div>
//   <h2>{this.state.count}</h2>
//   <button onClick={this.handleAddCount}>Add</button>
//   </div>
//   );
//   }
//  }
//  ReactDOM.render(
//   <Count />,
//   document.getElementById('root')
//  );
