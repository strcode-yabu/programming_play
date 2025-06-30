/**
 * Programming play.
 * @version 1.3.0
 */
class ProgrammingPlay {

  /**
   * The loaded code text.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.3.0
   */
  codeString = '';

  /**
   * Instance generation.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   * @param {HTMLElement} codeAreaWrap Area for drawing code.
   */
  constructor (codeAreaWrap) {
    this.codeAreaWrap = codeAreaWrap;
    this.codeArea = document.createElement('pre');
    this.codeArea.classList.add('prog_play__code_area');
    codeAreaWrap.appendChild(this.codeArea);
  }
  
  /**
   * Wait timer processing.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   * @param {Int} ms Millisecond.
   * @returns Wait for the specified millisecond.
   */
  sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  /**
   * Load the program file.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.3.0
   * @param {String} filePath Program file path.
   */
  loadPrgramFile = async filePath => {
    await fetch(filePath)
    .then(response => response.text())
    .then(data => {
      this.codeString = data;
    });
  }

  /**
   * Draw code in the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   */
  writeCode = async () => {
    const codeAreaHeight = this.codeArea.clientHeight;
    let scrollHeight = this.codeArea.scrollHeight;
    let countLine = 0
  
    for (const codeLine of this.codeString.split('\n')) {
      if(countLine > 0) {
        this.codeArea.innerHTML += `\n`;
        scrollHeight = this.codeArea.scrollHeight;
        if (codeAreaHeight < scrollHeight) {
          codeArea.scrollTop = scrollHeight;
        }
      }
      for(const codeChar of codeLine) {
        await this.sleep(50);
        this.codeArea.innerHTML += codeChar;
      }
      countLine++;
    }
  }

  /**
   * Delete the specified number of characters code.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   */
  deleteCode = async () => {
    let countLen = this.codeString.length;
    let codeAreaText = this.codeArea.innerHTML;

    while(countLen > 0) {
      this.codeArea.innerHTML = codeAreaText.slice(0, -1);
      await this.sleep(50);
      codeAreaText = this.codeArea.innerHTML;
      countLen--;
    }
  }

  /**
   * Clear the contents of the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   */
  clearCode = async () => {
    this.codeString = `cls\n`;

    await this.writeCode();
    await this.sleep(250);
    this.codeArea.innerHTML = '';
  }
}
