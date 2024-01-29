import React, { useRef } from "react";
import Data from "../Data";

const Form = () => {
    const title = useRef();
    const category = useRef();
    const uploadFile = useRef();
    const date = useRef();
    const description = useRef();

    const clearInputs = () => {
        title.current.value = '';
        category.current.value = '';
        uploadFile.current.value = '';
        date.current.value = '';
        description.current.value = '';
    }

    const addAction = (event) => {
        event.preventDefault();
        const newAction = {
            id: Data.eventsData.length + 1,
            title: title.current.value,
            category: category.current.value,
            image: uploadFile.current.value,
            date: date.current.value,
            description: description.current.value,
        }
        Data.addAction(newAction);
        clearInputs();
    }

    return (
        <>
            <div className="form-container" >
                <h3 className="head">Додати подiю</h3>
                <form className="form-content" action="">
                   
                    <label htmlFor="">
                        Title:
                        <input type="text" ref={title} />
                    </label>
                    <label htmlFor="">
                        Category:
                        <input type="text" ref={category} />
                    </label>
                    <label htmlFor="">
                        Path URL:
                        <input type="text" ref={uploadFile} />
                    </label>
                    <label htmlFor="">
                        Date:
                        <input type="date" ref={date} />
                    </label>
                    <label htmlFor="">
                        Description:
                        <textarea name="" id="" cols="30" rows="10" ref={description}></textarea>
                    </label>
                    <button onClick={(event) => addAction(event)}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;
