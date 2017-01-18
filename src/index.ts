/**
 * Created by Caleydo Team on 31.08.2016.
 */

import 'file-loader?name=index.html!extract-loader!html-loader!./index.html';
import 'file-loader?name=404.html-loader!./404.html';
import 'file-loader?name=robots.txt!./robots.txt';
import './style.scss';

import {create as createCLUE} from 'phovea_clue/src/template';
import {ProvenanceGraph, cat} from 'phovea_core/src/provenance';
import {createSetCLUEHelloWorldText} from './cmds';
import {init as initCore} from 'phovea_core/src';
//import {APP_NAME} from './language';

// mark the core to work offline
initCore({ offline: true });


const clue = createCLUE(document.body, {
  id: 'clue_hello_world', //to separate provenance graph among apps
  app: 'CLUE Hello World',
  thumbnails: false, //no server thumbnails
});


// init app
clue.$main.html(`
<div class="clue_hello">
    <input type="text" value="">
    <button>Copy to the right</button>
    <div style="border: 1px solid black; min-width: 10em; display: inline-block"></div>
</div>`);

const main = document.querySelector('div.clue_hello');

clue.graph.then((g: ProvenanceGraph) => {
  // create or recreate the dynamic reference
  const outputRef = g.findOrAddObject(<HTMLElement>main.querySelector('div'), 'output', cat.data);

  main.querySelector('button').addEventListener('click', () => {
    const newText = (<HTMLInputElement>main.querySelector('input')).value;
    g.push(createSetCLUEHelloWorldText(outputRef, newText));
  });

  //jump to stored state in url
  clue.jumpToStored();
});

