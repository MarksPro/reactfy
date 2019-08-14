import Reactotron from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let reactotron;

if(process.env.NODE_ENV === 'development'){
  reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();
  reactotron.clear();
}
export default reactotron