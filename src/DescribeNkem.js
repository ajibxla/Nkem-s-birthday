import React from "react";
import describeNkem from "./DescribeData";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function DescribeNkem() {
  const [data, setData] = React.useState(describeNkem);
  const [dataCounter, setDataCounter] = React.useState(0);

  const checkCounter = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const handleNext = () => {
    setDataCounter((counter) => {
      let newIndex = counter + 1;
      return checkCounter(newIndex);
    });
  };

  const handlePrevious = () => {
    setDataCounter((counter) => {
      let newIndex = counter - 1;
      return checkCounter(newIndex);
    });
  };

  return (
    <div className="describe-nkem ">
      <p className="title">Tell me about Nkem 🎙</p>
      <p className="content">
        Family and friendship means a whole lot to you. Thanks to you, I have
        become a better son, sibling and friend (still working on the friend bit
        🌚).
        <br />
        <br />I asked your family and some of your friends to describe you in
        one or two sentences and here are what they had to say.
      </p>

      <div className="container">
        {
          <div className="comment-carousel">
            <div className="comment-container">
              <div className="comment-arrows">
                <span className="arrow left" onClick={handlePrevious}>
                  <BsFillArrowLeftCircleFill size={30} color={"black"} />
                </span>
                <span className="arrow right" onClick={handleNext}>
                  <BsFillArrowRightCircleFill size={30} color={"black"} />
                </span>
              </div>

              <div className="comment-holder">
                {dataCounter === 6 ? (
                  <div className="comment-photo-holder">
                    <p className="name">{data[dataCounter].name}</p>
                    <img src={data[6].image} alt="" />
                  </div>
                ) : (
                  <>
                    <p className="name">{data[dataCounter].name}</p>
                    <p className="comment">{data[dataCounter].message}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default DescribeNkem;
