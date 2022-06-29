/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import Services from './Services';
import Area from './Area';
import Contact from './Contact';
import Popup from './Popup'
render(() => <App />, document.getElementById('root'));
render(() => <Services />, document.getElementById('root'));
render(() => <Area />, document.getElementById('root'));
render(() => <Contact />, document.getElementById('root'));
