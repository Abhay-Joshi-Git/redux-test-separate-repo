import * as Redux from 'redux';
import Issues from './modules/issues.js';

cosnt initialState = [
    {
        id: 'S1',
        suammmry: 'test issue 1'
    }
]

export default const store = Redux.createStore(
    Issues,
    initialState
)
