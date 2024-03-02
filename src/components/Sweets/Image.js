import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../Sweets/Image.scss'
export const Image = ({ src, alt, className }) => {
    const classes = classNames(
        className,
    )
    return (
        <img className='immg'
            src={src}
            alt={alt}
            // className={classes}
        />
    )
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}
Image.defaultProps = {
    src: 'https://via.placeholder.com/200x200',
    alt: 'image name',
    className: '',
}