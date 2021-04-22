import React, { useState } from 'react';
import ProgressBar from './progressBar';

function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const allowedFormats = ['image/png','image/jpg','image/jpeg','image/svg'];

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0];
        // if(selectedFile && selectedFile.includes(selectedFile.type)) {
        if (selectedFile && allowedFormats.includes(selectedFile.type)) {    
            setFile(selectedFile);
            setError('')
        }else{
            setFile(null);
            setError('Please select a vaid image type')
        }
    }


    return (
         <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            {/* <input type="file" onChange={changeHandler}/> */}
            <div className="output">
                { error && <div className=""> { error }</div> }
                { file && <div className="">{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadForm
