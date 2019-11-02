import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

/**
 * @param {[require(src)][caption]} lst A list containing lists where the first element is require(src) and the second is the caption
 * @returns HTML code containing the list items of the Bootstrap Carousel
 */
const generateCarouselItemsHTML = (lst) => {

    //Must have a key in each list item

    const items = lst.map((image, i) => {
        return (
            <Carousel.Item key={i}>
                <img className="d-block w-100" src={image[0]}
                alt={image[1]} />

                <Carousel.Caption>
                    <p>{image[1]}</p>
                </Carousel.Caption>
            </Carousel.Item>
            );
    });  

    return (items);
};

export default generateCarouselItemsHTML;