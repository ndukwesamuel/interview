import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterCOntainer className="">
      <div className="w-[10%] ">
        <Image src="/logoipsum-249 1.png" alt="lama blog" width={50} height={50} />
      </div>
      <div className="w-[25%]">
        <h2>Use Zenith</h2>
        <p>For Business</p>
        <p>For Schools</p>
        <p>For  Entrepreneurs</p>
        <p>For Goverment</p>
        <p>For  Individuals</p>
      </div>

      <div className="w-[25%]">
        <h2>Company</h2>
        <p>About</p>
        <p>Team</p>
        <p>Partners  </p>
        <p>Investors</p>
        <p>Privacy & Terms</p>
      </div>


      <div className="w-[25%]">
        <h2>Resources</h2>
        <p>Pricing</p>
        <p>Security</p>
        <p>Guide  </p>
        <p>Research</p>

      </div>


      <div className="w-[25%]">
        <h2>Resources</h2>
        <p>Pricing</p>
        <p>Security</p>
        <p>Guide  </p>
        <p>Research</p>

      </div>

    </FooterCOntainer>
  );
};

export default Footer;



export const FooterCOntainer = styled.div`
margin-top: 50px;
padding: 20px 0px;
display: flex;
justify-content: space-between;

`;





