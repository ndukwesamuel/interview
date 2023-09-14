import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterCOntainer className="">
        <div className="w-[10%] ">
          <Image src="/logoipsum-249 1.png" alt="lama blog" width={50} height={50} />
        </div>
        <div className="w-[15%]">
          <h2>Use Zenith</h2>
          <p>For Business</p>
          <p>For Schools</p>
          <p>For  Entrepreneurs</p>
          <p>For Goverment</p>
          <p>For  Individuals</p>
        </div>

        <div className="w-[15%]">
          <h2>Company</h2>
          <p>About</p>
          <p>Team</p>
          <p>Partners  </p>
          <p>Investors</p>
          <p>Privacy & Terms</p>
        </div>


        <div className="w-[15%]">
          <h2>Resources</h2>
          <p>Pricing</p>
          <p>Security</p>
          <p>Guide  </p>
          <p>Research</p>

        </div>


        <div className="w-[35%]">
          <h2>

            Subscribe        </h2>
          <p>Join our newsletter to stay up to date on features and releases.</p>

          <form className='flex w-full gap-2 items-center  '>
            <div className='w-[60%] bg-white'>
              <SectionTwoInput type="text" placeholder="Enter your email" />
            </div>
            <div className="">
              <SectionTwoButton type="button">Subscribe</SectionTwoButton>
            </div>
          </form>
          <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>

        </div>

      </FooterCOntainer>

      <div className="px-10">
        <hr className="mb-5" />

        <div className="flex justify-between">

          <FooterCopy>

            <Copy> © 2023 Relume. All rights reserved.</Copy>
            <Copy className=" underline"> Privacy Policy  </Copy>
            <Copy className=" underline">Terms of Service</Copy>
            <Copy className="underline"> © 2023 Relume. All rights reserved.</Copy>
            <Copy className="underline"> © 2023 Relume. All rights reserved.</Copy>
          </FooterCopy>


        </div>

      </div>

    </div>

  );
};

export default Footer;



const FooterCOntainer = styled.div`
margin-top: 50px;
padding: 20px 10px;
display: flex;
justify-content: center;

`;



const SectionTwoInput = styled.input`
color: #505050;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
padding: 10px;
border-radius: 5px;
outline: none;
width: 100%;



`;

const SectionTwoButton = styled.button`

padding: 5px 10px;
border-radius: 5px;
border: 2px solid white;



`;

const Copy = styled.p`

color: #FFF;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */


`;

const FooterCopy = styled.div`
display: flex;
gap: 20px;
padding: 10px 0px;

`;




