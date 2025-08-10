'use strict';

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
