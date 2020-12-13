import hello from './mods/hello';
import css from './styles/styles.scss';
import testDiv from './html/test-div.html';
import { data } from './data/data';

console.log('This is the beginning of the bundled code.');

document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

document.body.insertAdjacentHTML('afterbegin', testDiv);

let names = data.names;
hello(names);

names = names.filter(name => name === 'Jerry' || name === 'Newman').map(name => name.toUpperCase());
hello(names);
