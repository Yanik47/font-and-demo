import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactUsForm from '../components/contactUsForm';

import Hero from '../components/mainPage/hero';
import Story from '../components/mainPage/story';

import CoursesGrid from '../components/mainPage/coursesGrid';
import SponsorFlex from '../components/sponsorFlex';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

function mainPage(){
    return (
        <>
        <Header></Header>
        <Hero></Hero>
        <Story></Story>
        <CoursesGrid></CoursesGrid>
        <SponsorFlex></SponsorFlex>
        <ContactUsForm></ContactUsForm>
        <div>
            <div className='text-3xl m-9'>Welcome to our website!</div>
        </div>
        <div>
            <h1>Lorem Ipsum Example</h1>
            <p className='m-4'>{lorem.generateParagraphs(2)}</p>
            <p className='m-4'>{lorem.generateParagraphs(1)}</p>
        </div>
        <Footer></Footer>
        </>
    )
}

export default mainPage;