import React, { useState } from 'react'


const TextForm = () => {
    const [text, setText] = useState('')
    const [convert, setConvert] = useState('')


    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClickUp = (e) => {
        e.preventDefault()

        let newText = text.toUpperCase()
        setText(newText)
        setConvert('Converted to Upper Case')

    }

    const handleClickLow = (e) => {
        e.preventDefault()

        let newText = text.toLowerCase()
        setText(newText)
        setConvert('Converted to Lower Case')
    }

    const handleClickClear = (e) => {
        e.preventDefault()

        let newText = ('')
        setText(newText)
        setConvert('')
    }

    const handleTextTitle = (e) => {
        e.preventDefault()
        const words = text.split(' ')
        const titleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        const newText = titleCase.join(' ')
        setText(newText)
        setConvert('Converted to Title Case')
    }
    const removeDuplicateWords = (e) => {
        e.preventDefault()
        const words = text.split(' ')
        const removingDuplicate = [...new Set(words)]
        const newText = removingDuplicate.join(' ')
        setText(newText)
        setConvert('Removed Duplicate words')
    }

    return (
        <div className='container' >
            <label htmlFor="exampleFormControlTextarea1">
                <h1> Convert Your Text here</h1></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} autoFocus onChange={handleChange} rows="7"></textarea>
            {text ? <button className="btn btn-primary mx-3
                my-3" onClick={handleClickUp}>Convert Upper</button> : <button disabled className="btn btn-primary mx-3
                my-3" onClick={handleClickUp}>Convert Upper</button>}

            {text ? <button className="btn btn-primary" onClick={handleClickLow}>Convert Lower</button> : <button disabled className="btn btn-primary" onClick={handleClickLow}>Convert Lower</button>}

            {text ? <button className="btn btn-primary mx-3" onClick={handleTextTitle}>Title text</button> : <button disabled className="btn btn-primary mx-3" onClick={handleTextTitle}>Title text</button>}

            {text ? <button className="btn btn-primary mx-8" onClick={removeDuplicateWords}>Remove Duplicate Words</button> : <button disabled className="btn btn-primary mx-8" onClick={removeDuplicateWords}>Remove Duplicate Words</button>}


            {text ? <button className="btn btn-primary mx-7" style={{ margin: '0 10px' }} onClick={handleClickClear}>Clear text</button> : <button disabled className="btn btn-primary mx-7" style={{ margin: '0 10px' }} onClick={handleClickClear}>Clear text</button>}

            <div className="my-3">
                <p>{convert}</p>
                <p>Length of text: {text.length}</p>
                <p>No. of words in your text: {text.split(' ').length}</p>
                <p>Text Entered: {text}</p>
            </div>
        </div >
    )
}




export default TextForm
