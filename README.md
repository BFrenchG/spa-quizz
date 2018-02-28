<h1>Technical test in React - Elder.org</h1>
<p>Richard Swingler - 2018</p>

<p>Built based on create-react app starter and redux using flow for static typing and material-ui for view styling.</p>

<h5>To run locally:</h5>
<p>yarn start || npm start</p>

<h5>To run tests:</h5>
<p>yarn test || npm run test</p>

<h5>To run optimised build (no server/hosting provider):</h5>
<p>yarn build || npm run build</p>


<h1>Needs Improvements:</h1>
<p>
- use something like fetch mock to allow for testing of mock HTTP requests and allow for exception testing
- separate reducers, actions and type into more appropriate sub components (currently coupling the scoring/submission to the quizz)
- more thorough testing of component
- better error handling and clearing
- redux-saga or observable library to handle cancellation and async data with more grace
- in depth testing of HTTP performance
- move some logic to server side epending on size of question set
- remove code duplication
- heavier use of flow in testing
- styling :)
</p>