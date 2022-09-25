import React, { useEffect, useRef, useState } from 'react'
import Select from '@/components/Form/partials/Select'
import { FORMAT_BLOCK_OPTIONS, } from './config'
import * as icons from './icons'
import styles from './index.module.less'

export default ({ checked: defaultChecked = false, content: defaultContent = '' }) => {
  const docRef = useRef()

  const [checked, setChecked] = useState(defaultChecked)
  function setDocMode(e) {
    debugger
    const checked = e?.target?.checked
    setChecked(checked)
    let textEl;
    if (checked) {
      textEl = document.createTextNode(docRef.current.innerHTML);
      docRef.current.innerHTML = "";
      var preEl = document.createElement("pre");
      docRef.current.contentEditable = false;
      preEl.className = "source_text";
      preEl.contentEditable = true;
      preEl.appendChild(textEl);
      docRef.current.appendChild(preEl);
      document.execCommand("defaultParagraphSeparator", false, "div");
    } else {
      if (document.all) {
        docRef.current.innerHTML = docRef.current.innerText;
      } else {
        textEl = document.createRange();
        textEl.selectNodeContents(docRef.current.firstChild);
        docRef.current.innerHTML = textEl.toString();
      }
      docRef.current.contentEditable = true;
    }
    docRef.current.focus();
  }
  function initDoc() {
    if (checked) {
      setDocMode(true);
    }
  }
  useEffect(initDoc, [])

  function validateMode() {
    if (!checked) {
      return true;
    }
    alert("Uncheck \"Show HTML\".");
    docRef.current.focus();
    return false;
  }

  function formatDoc(cmd, value) {
    if (validateMode()) {
      document.execCommand(cmd, false, value);
      docRef.current.focus();
    }
  }

  const format = (...params) => () => {
    formatDoc(...params)
  }

  const removeFormat = () => {
    formatDoc('removeFormat')
  }

  const handleSelect = (name) => (e) => {
    formatDoc(name, e?.target?.value)
  }

  const undo = () => {
    formatDoc('undo')
  }

  const redo = () => {
    formatDoc('redo')
  }

  const appendHyperLink = () => {
    var sLnk = prompt('Write the URL here', 'http:\/\/');
    if (sLnk && sLnk != '' && sLnk != 'http://') {
      formatDoc('createlink', sLnk)
    }
  }

  const [content, setContent] = useState(defaultContent)
  const handleClean = () => {
    if (validateMode() && confirm('Are you sure?')) {
      docRef.current.innerHTML = defaultContent
    };
  }
  const handleSubmit = () => {
    if (validateMode()) {
      setContent(docRef.current.innerHTML)
      return true;
    }
    return false;
  }

  function printDoc() {
    if (!validateMode()) return;
    const printWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
    printWin.document.open();
    printWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + docRef.current.innerHTML + "<\/body><\/html>");
    printWin.document.close();
  }

  return (
    <div className={styles.rich_text_editor}>
      <input type="hidden" value={content} />
      {/*  */}
      <div className={styles.toolbar}>
        <select onChange={handleSelect('formatblock')}>
          <option selected>- formatting -</option>
          <option value="h1">Title 1 &lt;h1&gt;</option>
          <option value="h2">Title 2 &lt;h2&gt;</option>
          <option value="h3">Title 3 &lt;h3&gt;</option>
          <option value="h4">Title 4 &lt;h4&gt;</option>
          <option value="h5">Title 5 &lt;h5&gt;</option>
          <option value="h6">Subtitle &lt;h6&gt;</option>
          <option value="p">Paragraph &lt;p&gt;</option>
          <option value="pre">Preformatted &lt;pre&gt;</option>
        </select>
        <select onChange={handleSelect('fontname')}>
          <option className="heading" selected>- font -</option>
          <option>Arial</option>
          <option>Arial Black</option>
          <option>Courier New</option>
          <option>Times New Roman</option>
        </select>
        <select onChange={handleSelect('fontsize')}>
          <option className="heading" selected>- size -</option>
          <option value="1">Very small</option>
          <option value="2">A bit small</option>
          <option value="3">Normal</option>
          <option value="4">Medium-large</option>
          <option value="5">Big</option>
          <option value="6">Very big</option>
          <option value="7">Maximum</option>
        </select>
        <select onChange={handleSelect('forecolor')}>
          <option className="heading" selected>- color -</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
        <select onChange={handleSelect('backcolor')}>
          <option className="heading" selected>- background -</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
      </div>
      {/*  */}
      <div className={styles.toolbar}>
        <img className={styles.icon} title="Clean" onClick={handleClean}
          src={icons.clean} />
        <img className={styles.icon} title="Print" onClick={printDoc}
          src={icons.print} />
        <img className={styles.icon} title="Undo" onClick={undo}
          src={icons.undo} />
        <img className={styles.icon} title="Redo" onClick={redo}
          src={icons.redo} />
        <img className={styles.icon} title="Remove formatting" onClick={removeFormat}
          src={icons.remove} />
        <img className={styles.icon} title="Bold" onClick={format('bold')}
          src={icons.bold} />
        <img className={styles.icon} title="Italic" onClick={format('italic')}
          src={icons.italic} />
        <img className={styles.icon} title="Underline" onClick={format('underline')}
          src={icons.underline} />
        <img className={styles.icon} title="Left align" onClick={format('justifyleft')}
          src={icons.left_align} />
        <img className={styles.icon} title="Center align" onClick={format('justifycenter')}
          src={icons.center_align} />
        <img className={styles.icon} title="Right align" onClick={format('justifyright')}
          src={icons.right_align} />
        <img className={styles.icon} title="Numbered list" onClick={format('insertorderedlist')}
          src={icons.numbered_list} />
        <img className={styles.icon} title="Dotted list" onClick={format('insertunorderedlist')}
          src={icons.dotted_list} />
        <img className={styles.icon} title="Quote" onClick={format('formatblock', 'blockquote')}
          src={icons.quote} />
        <img className={styles.icon} title="Delete indentation" onClick={format('outdent')}
          src={icons.outdent} />
        <img className={styles.icon} title="Add indentation" onClick={format('indent')}
          src={icons.indent} />
        <img className={styles.icon} title="Hyperlink" onClick={appendHyperLink}
          src={icons.hyperlink} />
        <img className={styles.icon} title="Cut" onClick={format('cut')}
          src={icons.cut} />
        <img className={styles.icon} title="Copy" onClick={format('copy')}
          src={icons.copy} />
        <img className={styles.icon} title="Paste" onClick={format('paste')}
          src={icons.paste} />
        <label className={styles.edit_mode}>
          <input type="checkbox" className={styles.switchBox} checked={checked} onChange={setDocMode} />
          <span className={styles.edit_mode_text}>Show HTML</span>
        </label>
      </div>
      <div ref={docRef} className={styles.doc} contenteditable="true" />
    </div>
  )
}