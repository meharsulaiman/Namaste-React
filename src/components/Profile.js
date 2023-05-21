import React, { useEffect, useState } from 'react';

const Profile = ({ name }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState();

  return (
    <div>
      <h1>Profile</h1>
      <h4>{name}</h4>
      <div>
        <h5>{count1}</h5>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum
        magni, explicabo velit distinctio aliquam exercitationem placeat sequi
        repellendus doloremque vitae accusamus possimus iste ducimus iure odit
        amet? Amet sunt at modi! Doloribus, impedit aliquid!
      </p>
    </div>
  );
};

export default Profile;
