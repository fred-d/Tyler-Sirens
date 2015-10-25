import Google              from 'maps';
import ReactDOM            from 'react-dom';
import Map                 from 'Components/Map.jsx';
import {app, initialState} from 'App/app.js';

let appContainer = document.getElementById('app');

app.start(initialState, (state) => {
    ReactDOM.render(<Map />, appContainer);
});
