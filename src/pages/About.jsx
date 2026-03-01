import React from 'react';

function About() {
    const features = [
        {title: 'CSS / CSS Modules'},
        {title: 'Array manipulation'},
        {title: 'Controlled and Uncontrolled components'},
        {title: 'Building a UI library'},
        {title: 'DOM manipulation'},
        {title: 'Lifting state up and Props drilling'},
        {title: 'Sorting and Dropdown menus'},
        {title: 'Search and Filtering'},
        {title: 'Memoization'},
        {title: 'Modals'},
        {title: 'Decomposition and Custom hooks'},
        {title: 'Pagination'},
        {title: 'React Router'},
        {title: 'useContext / Context API'},
        {title: 'Global state and User authorization'},
        {title: 'Private and Public routes'},
        {title: 'Infinite scroll'},
        {title: 'JSON Placeholder'},
        {title: 'React Transition Group'},
    ]
    return (
        <div className="about">
            <h1 className='about__title'>
                This Posts React app was created for my portfolio.
            </h1>
            <div className='about__container'>
                <h2 className='about__subtitle'>Features were implemented here: </h2>
                <ul>
                    {features.map((feat) => <li className='about__item'>{feat.title}</li>)}
                </ul>
            </div>
            
        </div>

     );
}

export default About;