'use strict';

{

  const programming = async () => {
    const codeArea = document.getElementById('code_area');
    const pg = new ProgrammingPlay(codeArea);

    await pg.loadPrgramFile('./assets/data/prg_a.txt');
    await pg.writeCode();
    await pg.sleep(500);
    await pg.loadPrgramFile('./assets/data/prg_b.txt');
    await pg.deleteCode();
    await pg.sleep(2000);
    await pg.loadPrgramFile('./assets/data/prg_c.txt');
    await pg.writeCode();
    await pg.sleep(2000);
    await pg.clearCode();
  }

  programming();
}

