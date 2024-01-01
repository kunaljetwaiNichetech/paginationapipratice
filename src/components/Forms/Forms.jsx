import React, { useState } from "react";

export default function Forms() {
  const [Name, setName] = useState({
    kkkk: "",
    llll: "",
  });
  const handelsubmit = (kunal) => {
    kunal.preventDefault();
    console.log(Name);
    // setName({
    //   kkk: kunal.kkkk,
    //   llll: kunal.llll,
    // });
  };
  const handelchange = (kunal) => {
    console.log(kunal.target.value);
    const { name, value } = kunal.target;
    setName({
      ...Name,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="Name"
            name="kkkk"
            value={Name.kkkk}
            onChange={handelchange}
          />
        </div>
        <div>
          <label>sirname</label>
          <input
            type="text"
            id="sirname"
            name="llll"
            value={Name.llll}
            onChange={handelchange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
