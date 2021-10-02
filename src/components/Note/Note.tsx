import React, { useState, useRef } from 'react';
import { 
  getShortId,
  parseSelection
} from '../../modules/Shared/Utils';

// cursor start and end characters to be added to body string.
const START_CURSOR = "{{!C_START}}";
const END_CURSOR = "{{!C_END}}";

const Note = (props) => {
  const {
    title = "(no title)",
    id = null,
    body = "",
    dateModified = new Date(0),
    dateCreated = new Date(0),
  } = props.content || {};

  const [editedBody, setEditedBody] = useState(body);
  // const [cursorLocation, setCursorLocation] = useState([0,0]);
  const viewRef = useRef(null);
  const editorRef = useRef(null);

  const getCursor = (text) => <span className="cursor" id="text-within">{text}</span>;
  const getWrapper = (text, label) => <span id={`text-${label}`}>{text}</span>;

  const getBaseOffset = (section) => {
    let offset = 0;
    switch (section) {
      case "text-after":
        offset += document.getElementById("text-within")?.textContent?.length || 0;
        console.log(offset)
      case "text-within":
        offset += document.getElementById("text-before")?.textContent?.length || 0;
        console.log(offset)
      default:
        break;
    }
    return offset;
  };

  /**
   * Set the location of the cursor in the view node to match the
   * passed location of the cursor in the edit node.
   * Must take into account the current cursor location when working
   * with the location object.
   * @param {number[]} newLocation the location offset array from the nearest anchor.
   * @param {string} section the section of text that the new cursor location resides in.
   */
  const findCusorLocation = (newLocation, section) => {
    const baseText = editedBody;

    // sum the lengths of offsets that come before our point.
    const baseOffset = getBaseOffset(section);

    const absoluteLocations = [
      0,
      baseOffset + newLocation[0],
      baseOffset + newLocation[1],
    ];

    const textSections = [];
    for (let i = 0; i < absoluteLocations.length; i++) {
      textSections.push(
        baseText.substring(absoluteLocations[i], absoluteLocations?.[i+1])
      );
    } 

    const beforeCursor = getWrapper(textSections[0], 'before');
    const thisCursor = getCursor(textSections[1]);
    const afterCursor = getWrapper(textSections[2], 'after')

    return (
      <>{beforeCursor}{thisCursor}{afterCursor}</>
    );
  };

  const handleBodyClick = (e) => {
    e && e.stopPropagation();
    if (!(editorRef.current instanceof HTMLInputElement)) return false;

    const newSelection = window.getSelection();
    // domRange is the distance from the nearest marker.
    // could be distance from start, start of cursor, or end of cursor.
    const domRange = parseSelection(newSelection);
    if (domRange === null) return false;



    const range = domRange;

    if (typeof editorRef.current.setSelectionRange === "function") {
      editorRef.current.focus();
      editorRef.current.setSelectionRange(...range);

      // setCursorLocation({
      //   target: e.target.id,
      //   range
      // });

      return true;
    } else {
      console.error('setSelectionRange is unsupported on this browser.');
      return false;
    }
  };

  const handleKeyDown = (e) => {
    console.log(e);
    // handle cursor position jumps...

  };

  const renderEditedView = () => {

    return <>{body}</>;
  };

  return (
    <article className="note-view" id={`view-${getShortId(id)}`}>
      <h1>{title}</h1>
      <span className="meta">created: {dateCreated?.toString().slice(0,24)}</span>
      <span className="meta">last modified: {dateModified?.toString().slice(0,24)}</span>
      <section className="body"
        onClick={handleBodyClick}
        // onDoubleClick={handleBodyClick}
        ref={viewRef}
      >
        {renderEditedView()}
      </section>
      <textarea 
        className="body-editor" 
        rows={20}
        defaultValue={editedBody}
        onChange={e => setEditedBody(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={editorRef}
      />
    </article>
  );
};

export default Note;
