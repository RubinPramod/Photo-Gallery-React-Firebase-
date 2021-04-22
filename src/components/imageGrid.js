import React , { useState } from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion';

const ImageGrid = ({setselectedImg}) => {

    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="image-grid">
            { docs && docs.map(doc => (
                <motion.div className="image-wrap" layout whileHover={{ opacity: 1}} key={doc.id} onClick={ () => {  setselectedImg(doc.url)    }}>
                    <motion.img src={doc.url} initial={{ opacity: 0}} animate={{ opacity: 0.95}} transition={{delay: 1}} />
                </motion.div>
            ))}
            <img src=""/>
        </div>
    )
}

export default ImageGrid
