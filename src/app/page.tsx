"use client"
import Image from 'next/image'
import { Containerdiv } from './Styledcomponent'
import styled from 'styled-components';
import { useState } from 'react';

export default function Home() {

  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)

  return (
    <Container>
      <div className='w-[80%] '>

        <SectionOne className=''>
          <Title>Open Payments at the Speed of Light</Title>
          <SectionOneP className='text-center'>Unlock Groundbreaking New Payment Experiences</SectionOneP>
        </SectionOne>

        <div className='flex   '>
          <form className='flex w-full  justify-center'>
            <div className='w-[40%] bg-white'>
              <SectionTwoInput type="text" placeholder="Enter your email" />
            </div>
            <div>
              <SectionTwoButton type="button">Join our waitlist</SectionTwoButton>
            </div>
          </form>
        </div>

        <div className='mb-10'>
          <FAQs> FAQs</FAQs>
          <FAQs2>Are you looking for a reliable payment processor to help you expand your online business? Look no further, Zenithpay is here to help you access a larger market with ease!</FAQs2>
        </div>


        <div>
          <Section4Div className='item-center'>
            <div>
              <Section4P> When do we launch ?</Section4P>
              {
                faq1 && <Section4P2>Launch April 2021.</Section4P2>

              }
            </div>

            <div className='item-center self-center'
              onClick={() => setFaq1(!faq1)}
            >

              {
                !faq1 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              }




            </div>
          </Section4Div>

          <Section4Div className='item-center'>
            <div>
              <Section4P>   Do you get a discount when you join the waitlist ?</Section4P>
              {
                faq2 && <Section4P2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptate.</Section4P2>

              }
            </div>

            <div className='item-center self-center'
              onClick={() => setFaq2(!faq2)}
            >

              {
                !faq2 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              }




            </div>
          </Section4Div>

          <Section4Div className='item-center'>
            <div>
              <Section4P> When do we launch ?</Section4P>
              {
                faq3 && <Section4P2>Launch April 2021.</Section4P2>

              }
            </div>

            <div className='item-center self-center'
              onClick={() => setFaq3(!faq3)}
            >

              {
                !faq3 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              }




            </div>
          </Section4Div>






        </div>

        <div className='mt-20'>
          <Section5H2> Still have a question?</Section5H2>

          <FAQs2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FAQs2>
        </div>
      </div>
    </Container>

  )

}


const Container = styled.div`
  

  color: white;
  display: flex;
  justify-content: center;

`;

const SectionOne = styled.div`
padding: 20px 40px;

`

const Title = styled.h1`
color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 72px;
font-style: normal;
font-weight: 700;
`;

const SectionOneP = styled.p`
color: #FFF;
text-align: center;
/* Text/Medium/Normal */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%;

`

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





`

const SectionTwoButton = styled.button`

background-color: #310E93;
margin-left: 20px;
padding: 10px 24px;
border-radius: 5px;



`


const Post = styled.div` 
    margin-top: 60px;
    display: flex;
    align-items: center;
    gap: 50px;
`;

const ImgContainer = styled.div` 
    flex: 1;
    height: 500px;
    position: relative;
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


const PostTitle = styled.h1`
       font-size: 40px;
  `;

const PostDesc = styled.p`
       font-size: 20px;
         font-weight: 300;
         color:  #626262;;
    `

const Button = styled.button`
    padding: 16px 20px;
    border: none;
    border-radius: 5px;
    width: max-content;
  `

const FAQs = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  `

const FAQs2 = styled.p`
  color: white;
font-family: Roboto;
font-size: 15px;
width: 60%;
font-style: normal;
font-weight: 400;

  `

const Section4Div = styled.div`
  border: 1px solid white;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  aling-items: center;
  padding: 10px;
  margin-bottom: 20px;
  


  `
const Section4P = styled.p`
  color: #FFF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
  `


const Section4P2 = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  
    `







const Section5 = styled.div`
  color: white;
font-family: Roboto;
font-size: 15px;
width: 60%;
font-style: normal;
font-weight: 400;

  `

const Section5H2 = styled.h2`

  color: #FFF;
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 700;


  `





