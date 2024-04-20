'use strict';

{
  const codeArea = document.getElementById('code_area');

  const codeTextFirst = `
  10  print('Start test program.')
  20  
  30  string = 'I love programming.'
  40  len = 0
  50  
  60  string.each(char) {
  70    print(char)
  80    sleep(1000)
  90    len += 1
  100 }
  110 
  120 print('The length of the string is ' + len.toString() + '.')
  130 print('hello...')
  `;
  const codeTextNext = `
  130 print('Enjoy programming.');
  `;

  const pg = new ProgrammingPlay(codeArea);

  pg.writeCode(codeTextFirst.trimStart()).then( ()=> {
    return pg.sleep(500);
  }).then( () => {
    return pg.deleteCode(`130 print('hello...')\n`.length);
  }).then( ()=> {
    return pg.sleep(2000);
  }).then( () => {
    return pg.writeCode(codeTextNext.trimStart());
  }).then( ()=> {
    return pg.sleep(2000);
  }).then( () => {
    return pg.clearCode();
  });
}