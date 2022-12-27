import React from "react";

const Propsexample = () => {
  return (
    <article>
      <Movie firstname="srinivasarao" lastname="kalipindi" />
      {/* <Movie/>

     <Movie/> */}
    </article>
  );
};

const Movie = (props) => {
  console.log(props);
  return (
    <section>
      <img
        src="https://occ-0-851-853.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzPR8nR7Bcjz3Vgkn8zYyeOTjb5AtST4PEoxaZkbs_JlYcXyzTaNRwGa6t4UclSGnAtLiWeq7tMKIv5OqyM7dvKZLoah52bMgYuoCdxKVDnGOX7TCxP1TeQvYhwVgP79Lhm.jpg?r=501"
        alt="luciferimageshows"
      />
      <h1 style={{ color: "brown", margin: "centre" }}>Lucifer</h1>
    </section>
  );
};

export default Propsexample;
