/**
 * Created by Caleydo Team on 31.08.2016.
 */

import 'file-loader?name=index.html!extract-loader!html-loader!./index.html';
import 'file-loader?name=404.html-loader!./404.html';
import 'file-loader?name=robots.txt!./robots.txt';
import './style.scss';
import {create as createCLUE} from 'phovea_clue/src/template';

import {APP_NAME} from './language';

const clue = createCLUE(document.body, {
  id: 'clue_hello_world', //to separate provenance graph among apps
  app: 'CLU Hello World',
  thumbnails: false, //no server thumbnails
});

//TODO init real app

//jump to stored state in url
clue.jumpToStored();
