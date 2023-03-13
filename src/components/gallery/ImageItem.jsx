import React from 'react'

const ImageItem = ({item:{img,alt}}) => {
    return (
        <div className="col">
            <img src={img}  alt={alt}/>
        </div>
    )
}

export default ImageItem