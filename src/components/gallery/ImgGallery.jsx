import React from 'react'

const ImgGallery = ({img,alt}) => {
    return (
        <div className="col">
            <img src={img} alt={alt} />
        </div>
    )
}

export default ImgGallery