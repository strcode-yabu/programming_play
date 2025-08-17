/**
 * Programming play.
 * @version 1.4.0
 */
class ProgrammingPlay {
  /**
   * Instance generation.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   * @param {HTMLElement} codeAreaWrap Area for writing code.
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
   * Line breaks.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.4.0
   * @param {Int} countLine Row Count.
   */
  breakLine = async countLine => {
    const codeAreaHeight = this.codeArea.clientHeight;
    let scrollHeight = this.codeArea.scrollHeight;

    if(countLine > 0) {
      this.codeArea.innerHTML += `\n`;
      scrollHeight = this.codeArea.scrollHeight;
      if (codeAreaHeight < scrollHeight) {
        this.codeArea.scrollTop = scrollHeight;
      }
    }
  }

  /**
   * Typing code in the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.4.0
   * @param {Int} ms Millisecond. (Default: 50)
   */
  typeCode = async (ms = 50) => {
    let countLine = 0
  
    for (const codeLine of this.codeString.split('\n')) {
      await this.breakLine(countLine);
      for(const codeChar of codeLine) {
        await this.sleep(ms);
        this.codeArea.innerHTML += codeChar;
      }
      countLine++;
    }
  }

  /**
   * Put code in the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.4.0
   * @param {Int} ms Millisecond. (Default: 0)
   */
  putCode = async (ms = 0) => {
    let countLine = 0
  
    for (const codeLine of this.codeString.split('\n')) {
      await this.breakLine(countLine);
      await this.sleep(ms);
      this.codeArea.innerHTML += codeLine;
      countLine++;
    }
  }

  /**
   * Delete the code one character at a time.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   * @param {Int} ms Millisecond. (Default: 50)
   */
  deleteCode = async (ms = 50) => {
    let countLen = this.codeString.length;
    let codeAreaText = this.codeArea.innerHTML;

    while(countLen > 0) {
      this.codeArea.innerHTML = codeAreaText.slice(0, -1);
      await this.sleep(ms);
      codeAreaText = this.codeArea.innerHTML;
      countLen--;
    }
  }

  /**
   * Delete the line of code.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.4.0
   */
  deleteCodeLine = async () => {
    const countLen = this.codeString.length * -1;
    let codeAreaText = this.codeArea.innerHTML;

    this.codeArea.innerHTML = codeAreaText.slice(0, countLen);
  }


  /**
   * Clear the contents of the code area.
   * 
   * @author S.Yabunaka[strCode]
   * @since 1.0.0
   */
  clearCode = async () => {
    this.codeArea.innerHTML = '';
  }
}
