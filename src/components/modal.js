import React from 'react'
import { motion } from 'framer-motion';


const modal = ({selectedImg, setselectedImg}) => {

    const handleEvent = (e)=>{ 
    
        if (e.target.classList.contains('backdrop')) {
            setselectedImg(null)   
        }

    }

    return (
        <motion.div className="backdrop" initial={{ opacity:0 }} animate={{opacity:1}} onClick={handleEvent}>
            <motion.img src={selectedImg} initial={{ y: "-100vh" }} animate={{y: "0"}} />
        </motion.div>
    )
}

export default modal
