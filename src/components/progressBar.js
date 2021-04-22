import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion';

function ProgressBar({file, setFile}) {

    const {url, progress} = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url])

    console.log(progress, url)
    return (
        <div className="progress-bar">
            <motion.div className="progress-bar-inner" initial={{width: '0%' }} animate={{width: progress + '%' }}></motion.div>
        </div>
    )
}

export default ProgressBar
