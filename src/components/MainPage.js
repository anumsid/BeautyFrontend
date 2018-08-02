import React from 'react';
import LipstickContainer from './LipstickContainer';
import SkinToneContainer from './SkinToneContainer';
import ImageContainer from './ImageContainer';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div id="flex-holder">
          <div className="lipstick_container">
            <LipstickContainer />
          </div>

          <div className="skintone_container">
            <SkinToneContainer />
          </div>

          <div className="image_container">
            <ImageContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;
