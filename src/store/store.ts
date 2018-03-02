import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

export let store = createStore(todoApp);