import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function NewBlogCards(props) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // For Custmizing Dots Of Carousel
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;

   
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {/* {React.Children.toArray(carouselItems)[index]} */}
      </button>
    );
  };




  return (
    <div className="cards">
         <br></br>
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={100000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

      // showDots customDot={<CustomDot />}
      >

<div><CardItem
          src='images/1.png'
          text='The Ultimate Python Course 2021'
          label='Programming'
          path='/services'
        /></div>
        <div><CardItem
          src='images/2.png'
          text='Mastering Django: Basics To Advance'
          label='Backend'
          path='/services'
        /></div>
        <div><CardItem
          src='images/3.png'
          text='Learn Complete React 2021'
          label='Frontend'
          path='/services'
        /></div>
        <div><CardItem
          src='images/4.png'
          text='NodeJS: Modern Javascript, Full-Stack'
          label='Full-Stack' //We can give label of either the category or like bestseller
          path='/products'
        /></div>
        <div>
          <CardItem
            src='images/5.png'
            text='Best PHP Learning Bundle with Rest APIs'
            label='Backend'
            path='/sign-up'
          />
        </div>

        <div>
          <CardItem
            src='images/6.png'
            text='AWS: Solution Architect Preparation Guide'
            label='Cloud Computing'
            path='/sign-up'
          />
        </div>

      </Carousel> */}
    </div>
  );
}

export default NewBlogCards;