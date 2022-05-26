import React from 'react'
import Heading from '../heading/Heading'
import Gallery1 from '../../assets/gallery-1.webp'
import Gallery2 from '../../assets/gallery-2.webp'
import Gallery3 from '../../assets/gallery-3.webp'
import Gallery4 from '../../assets/gallery-4.webp'
import Gallery5 from '../../assets/gallery-5.webp'
import Gallery6 from '../../assets/gallery-6.webp'
import GalleryImg from './ImgGallery'
import './Gallery.css'
const Gallery = () => {
    return (
        <section name="Gallery" className="gallery">
            <div className="gallery_container container">
                <Heading title='Our Gallery' alt='Gallery' />
                <div className="gallery_content">
                    <div className="gallery_cols">
                         <GalleryImg img={Gallery1} alt='love coffee' />
                         <GalleryImg img={Gallery2} alt='Cappuccino'/>
                         <GalleryImg img={Gallery3} alt='cake'/>
                         <GalleryImg img={Gallery4} alt='black coffee'/>
                         <GalleryImg img={Gallery5} alt='love Frappuccino'/>
                         <GalleryImg img={Gallery6} alt='Mocha Coffee'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery