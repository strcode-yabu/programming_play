# JavaScript plugin "Programming Play"

- Latest version 1.1.0

## How to use

1. Copy the contents of the "dist" directory into your project.
2. Include "prog-play.css".
3. Include "prog-play.js".
4. Create an instance of the "ProgrammingPlay" class and write the code.

## Development environment

### Setting the development environment

1. Go to the **programming_play** project directory.
2. Run `npm install` or `yarn` .

### Command list

- `gulp dist` : Compile the code in `src`.
- `gulp demo` :Copy the files compiled into `dist` to the `demo` folder.

## Sample

### `/demo/index.html`

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"Programming Play" Demo.</title>
    <link rel="stylesheet" href="./assets/css/prog_play.css">
    <link rel="stylesheet" href="./assets/css/style.css">
  </head>
  <body>
    <main class="main">
      <section class="code_area__wrap" id="code_area"></section>
    </main>
    <script src="./assets/js/prog_play.js"></script>
    <script src="./assets/js/main.js"></script>
  </body>
</html>
```

### `/demo/assets/js/main.js`

```javascript
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
```
