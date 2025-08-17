# JavaScript plugin "Programming Play"

- Latest version 1.4.2

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
    <header class="header">
      <!-- omitted -->
    </header>
    <main class="main">
      <section class="code_area__wrap" id="code_area"></section>
    </main>
    <footer class="footer">
      <!-- omitted -->
    </footer>
    <script src="./assets/js/prog_play.js"></script>
    <script src="./assets/js/main.js"></script>
  </body>
</html>
```

### `/demo/assets/js/main.js`

```javascript
{

  const programming = async () => {
    const codeArea = document.getElementById('code_area');
    const pg = new ProgrammingPlay(codeArea);

    await pg.loadPrgramFile('./assets/data/title.txt');
    await pg.putCode();
    await pg.loadPrgramFile('./assets/data/boot.txt');
    await pg.putCode();
    await pg.sleep(1000);
    await pg.loadPrgramFile('./assets/data/root.txt');
    await pg.putCode();
    await pg.sleep(1000);
    await pg.loadPrgramFile('./assets/data/type_cmd__inputPrg.txt');
    await pg.typeCode();
    await pg.sleep(500);
    await pg.loadPrgramFile('./assets/data/bar.txt');
    await pg.putCode();
    await pg.sleep(2000);
    await pg.loadPrgramFile('./assets/data/prg_a.txt');
    await pg.typeCode();
    await pg.sleep(500);
    await pg.loadPrgramFile('./assets/data/prg_b.txt');
    await pg.deleteCode();
    await pg.sleep(2000);
    await pg.loadPrgramFile('./assets/data/prg_c.txt');
    await pg.typeCode();
    await pg.sleep(1000);
    await pg.loadPrgramFile('./assets/data/bar.txt');
    await pg.putCode();
    await pg.loadPrgramFile('./assets/data/root.txt');
    await pg.putCode();
    await pg.sleep(1000);
    await pg.loadPrgramFile('./assets/data/type_cmd__run.txt');
    await pg.typeCode();
    await pg.sleep(500);
    await pg.loadPrgramFile('./assets/data/prg_run_a.txt');
    await pg.typeCode(1000);
    await pg.loadPrgramFile('./assets/data/prg_run_b.txt');
    await pg.putCode();
    await pg.loadPrgramFile('./assets/data/prg_run_c.txt');
    await pg.putCode();
    await pg.loadPrgramFile('./assets/data/root.txt');
    await pg.putCode();
    await pg.sleep(1000);
    await pg.loadPrgramFile('./assets/data/type_cmd__cls.txt');
    await pg.typeCode();
    await pg.sleep(2000);
    await pg.clearCode();
    await pg.sleep(500);
    await pg.loadPrgramFile('./assets/data/root.txt');
    await pg.putCode();
  }

  programming();
}
```
