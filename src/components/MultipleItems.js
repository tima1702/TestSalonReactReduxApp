import React, { Component } from 'react'
import Slider from 'react-slick'
import noImage from './assets/no_icon.png'

function SampleNextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'flex', height: '99%', width: '60px'}}
      onClick={onClick}
    ></div>
  )
}

function SamplePrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className + ' m-auto'}
      style={{...style, display: 'flex', height: '99%', width: '60px'}}
      onClick={onClick}
    ></div>
  )
}

export default class MultipleItems extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
    }

    let {images} = this.props

    return (
      <div style={{width: '90%', padding: '45px'}} className="m-auto">
        {images.length > 1 ? <Slider {...settings}>
          {images.map((pointArr, index) => (
            <div key={index} style={{width: '30%'}}>
              <h4>
                <img className="m-auto" src={pointArr.image_urls.medium} style={{ height:'250px', maxWidth: '80%'}}></img>
              </h4>
            </div>
          ))
          }
        </Slider> : <div style={{textAlign: 'center'}}>
          <h4>
            <img className="m-auto" src={images[0] && images[0].image_urls.original || noImage} ></img>
          </h4>
        </div>
        }
      </div>
    )
  }
}
