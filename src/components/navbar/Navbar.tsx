import React from "react";
import Image from "next/image";
import styled from "styled-components";


const Navbar = () => {
  return (
    <Mainnav >
      <Leftnav >
        <div>
          <Image src="/logoipsum-249 1.png" alt="lama blog" width={50} height={50} />
        </div>
        <p>Products</p>
        <p>Solutions</p>
        <p>Resources</p>
        <p className="flex"><span>
          Company</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="white" />
          </svg></p>
      </Leftnav>

      <div>
        <Contact>Contact us</Contact>
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


const Contact = styled.p`
padding: 8px 12px;
border: 1px solid white;


`;
