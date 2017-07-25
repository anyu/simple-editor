// Hierarchical task list work sample

// One of our biggest opportunities at Human Dx is to build an interface that can collect highly structured data in a way that optimizes information gain. Creating cases on our system today has a lot of room for improvement: contributors need functionality to more naturally structure objects.

// Objective:
// For this project, we would like you to take a look at and build a simplified representation of such a structure: a purely client-side (web only) implementation of hierarchical task-list interface (described in the deliverables below). We are looking for someone to be able to push our thinking on product, and would like to see you showcase your attention to detail and code organization.

// Deliverables:
// - An elegant "blank sheet" UI (e.g., think simple Todo list app where people can just type freely) that enables vertically nested Tasks as indented bulleted lists.
//     - A Task can contain text (as the title) and nested Tasks.
// - Description of design choices (visual and technical) so future collaborators can contribute within your design direction.

// Bonus:
// - Ability to navigate by the keyboard (arrow keys, tab, shift+tab, delete, enter, ctrl/cmd+z, etc.).
// - Ability to drag and drop effectively (mobile and web).
// - Ability to cross-link/replicate Tasks (where a Task can be nested under multiple Tasks and updated synchronously).
// - Ability to enable multiple simultaneous collaborators at the same time.

// Notes:
// - The basic premise is pretty simple, but as the functionality expands, your solution ideally would be able to abstract away a lot of complexity!
// - Feel free to use the language, libraries, and frameworks of your choice (though, if you are comfortable in React, that would be ideal).

// Engineering Principles to keep in mind:
// - Simple. As simple as possible, but no simpler.
// - Prescient. Anticipates future needs.
// - Flexible. Separable and replaceable code.
// - Intuitive. Good naming conventions, well-scoped methods, clear documentation describing implementation details, etc.


import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));