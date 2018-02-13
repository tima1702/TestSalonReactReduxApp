import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'flex',height:'99%', width:'60px'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className + ' m-auto'}
      style={{...style, display: 'flex', height:'99%',width:'60px'}}
      onClick={onClick}
    ></div>
  );
}
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{width: '90%', padding: '45px'}}  className="m-auto">
        <Slider {...settings}>
          {
            [1,2,3,4,5,6].map((pointArr, index) => (
              <div key={index}  style={{width: '30%'}}>
                <h4>
                  <img className="m-auto" src="http://s3-eu-west-1.amazonaws.com/staging-salony/image/salons/files/000/003/623/original/nail-art-2392-250x250.jpg?1507118077"></img>
                </h4>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}
