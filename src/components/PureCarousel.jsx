import { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  // ImageWithZoom,
  Image,
} from "pure-react-carousel";

export default class extends Component {
  handleChange(idx) {
    console.log("chanehgins", idx);
  }

  render() {
    // deestruct props w/default value
    const { slides = [] } = this.props;

    return (
      <CarouselProvider
        className="carousel--main"
        naturalSlideWidth={300}
        naturalSlideHeight={325}
        totalSlides={slides.length}
        visibleSlides={1}
        infinite
        isPlaying
      >
        <Slider className="carousel--slider">
          {slides.map((img, idx) => (
            <Slide index={idx} className="slider--slide">
              <Image
                src={img}
                className="slider--image"
                onClick={() => this.props.updateCurrImage(img)}
              />
            </Slide>
          ))}
        </Slider>

        <div className="control-btns">
          <ButtonBack className="carousel--btn">Back</ButtonBack>
          <ButtonNext className="carousel--btn">Next</ButtonNext>
        </div>

        <DotGroup dotNumbers className="carousel--btn-group" />
        <button onClick={() => console.log(slides)}>Log props</button>
      </CarouselProvider>
    );
  }
}
// return (
//   <CarouselProvider
//     naturalSlideWidth={100}
//     naturalSlideHeight={125}
//     totalSlides={3}
//     visibleSlides={1}
//   >
//     <Slider>
//       <Slide className="carousel-slide" index={0}>
//         {slides?.[0]} pog
//       </Slide>
//       <Slide className="carousel-slide" index={1}>
//         {slides?.[0]} pog
//       </Slide>
//       <Slide className="carousel-slide" index={2}>
//         {slides?.[0]} pog
//       </Slide>
//     </Slider>
//     <ButtonBack>Back</ButtonBack>
//     <ButtonNext>Next</ButtonNext>
//   </CarouselProvider>
// );

// PureCarousel.defaultProps = {
//   slides: [],
// };

// export default PureCarousel;
