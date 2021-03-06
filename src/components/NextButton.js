import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { NextIconSVG } from './Icons';

let { PropTypes } = React;

class NextButton extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    handleClick() {
        let { soundCloudAudio, onNextClick } = this.props;

        soundCloudAudio && soundCloudAudio.next();
        onNextClick && onNextClick.call(this);
    }

    render() {
        let { className } = this.props;

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button className={classNames} onClick={this.handleClick.bind(this)}>
                <NextIconSVG />
            </button>
        );
    }
}

NextButton.propTypes = {
    className: PropTypes.string,
    onNextClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default NextButton;
