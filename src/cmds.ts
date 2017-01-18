/**
 * Created by Samuel Gratzl on 23.11.2016.
 */

import * as prov from 'phovea_core/src/provenance';

/**
 * command pattern logic
 */
function setCLUEHelloWorldText(inputs: prov.IObjectRef<HTMLElement>[], parameter: any) {
  return inputs[0].v.then((elem: HTMLElement) => {
    const old  = elem.innerText;
    elem.innerText = parameter.text;
    return {
      inverse: createSetCLUEHelloWorldText(inputs[0], old),
    };
  });
}

/**
 * create command description
 * @param outputRef
 * @param text
 * @return {IAction}
 */
export function createSetCLUEHelloWorldText(outputRef: prov.IObjectRef<HTMLElement>, text: string) {
  return prov.action(prov.meta('change text', prov.cat.visual, prov.op.update), 'setCLUEHelloWorldText', setCLUEHelloWorldText, [outputRef], {
    text
  });
}

export function createCmd(id) {
  switch (id) {
    case 'setCLUEHelloWorldText' :
      return setCLUEHelloWorldText;
  }
  return null;
}
