import React from 'react';
import store, {addNewPost, getNewsPosts} from "../../store";

export const HomePage = () => {
    const testNews = {
        title: 'Test',
        description: 'Test test',
        data: new Date()
    };

    return (
        <div>
            <h1>KY</h1>

            <button onClick={ () => { addNewPost(testNews)}}>CREATE NEW NEWS</button>
        </div>

    )
};