<h1>Technical test in React - Elder.org</h1>
<p>Richard Swingler - 2018</p>

<p>Built based on create-react app starter and redux using flow for static typing and material-ui for view styling.</p>

<h5>To run locally:</h5>
<p>Install node modules</p>
<p>yarn start || npm start</p>

<h5>To run tests:</h5>
<p>Dependent on jest CLI</p>
<p>yarn test || npm run test</p>

<h5>To run optimised build (no server/hosting provider):</h5>
<p>yarn build || npm run build</p>


<h1>Needs Improvements:</h1>
<ul>
    <li> use something like fetch mock to allow for testing of mock HTTP requests and allow for exception testing</li>
    <li> separate reducers, actions and type into more appropriate sub components (currently coupling the scoring/submission to the quizz)</li>
    <li> more thorough testing of component</li>
    <li> better error handling and clearing</li>
    <li> redux-saga or observable library to handle cancellation and async data with more grace</li>
    <li> in depth testing of HTTP performance</li>
    <li> move some logic to server side epending on size of question set</li>
    <li> remove code duplication</li>
    <li> heavier use of flow in testing</li>
    <li> styling :) </li>
</ul>