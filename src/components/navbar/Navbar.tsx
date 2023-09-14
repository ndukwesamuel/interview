import React from "react";
import Image from "next/image";
import styled from "styled-components";


const Navbar = () => {
  return (
    <Mainnav >
      <Leftnav >
        <Image src="/logoipsum-249 1.png" alt="lama blog" width={50} height={50} />
        <p>Products</p>
        <p>Solutions</p>
        <p>Resources</p>
        <p>Company</p>
      </Leftnav>

      <div>
        <p>Contact us</p>
      </div>
    </Mainnav>
  );
};

export default Navbar;


const Mainnav = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
items-align: center;
color : white;
aling-items: center;
`;

const Leftnav = styled.div`
display: flex;
gap: 20px;
aling-items: center;


`;
