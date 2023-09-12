/**
 * Programming play.
 * @version 1.0.0
 */
class ProgrammingPlay {
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
   * Draw code in the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   * @param {String} codeText Code text.
   */
  writeCode = async codeText => {
    const codeAreaHeight = this.codeArea.clientHeight;
    let scrollHeight = this.codeArea.scrollHeight;
    let countLine = 0
  
    for (const codeLine of codeText.split('\n')) {
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
   * @param {Int} len The number of characters to remove.
   */
  deleteCode = async len => {
    let countLen = len;
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
  clearCode = () => {
    const clearCommand = `cls\n`;

    this.writeCode(clearCommand).then( () => {
      return this.sleep(250);
    }).then(() => {
      this.codeArea.innerHTML = '';
    });
  }
}
