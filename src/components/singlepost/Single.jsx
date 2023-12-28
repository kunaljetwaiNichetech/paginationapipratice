import React from "react";

export default function Single({ allPost }) {
  return (
    <div>
      <div>
        <tabel>
          <tr>
            <th>Title</th>
            <th>ID</th>
          </tr>
          <tbody>
            {allPost &&
              allPost.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.title}</td>
                    <ld>{item.id}</ld>
                  </tr>
                );
              })}
          </tbody>
        </tabel>
      </div>
    </div>
  );
}
