/**
 * Get a shortened version of the item's id to use in the DOM tree.
 * @param id the identifier for this item
 * @param len the length to make the new id 
 * @returns the shortened id
 */
export const getShortId = (id: any, len?: number) => (
  String(id).slice(0, (typeof len == "number" && len) || 8)
);

/**
* Return the start and end index of a selection object
* such that [start, end] where start < end.
* @param selection the Selection object to parse
* @returns the start and end index of the selection if start and end is in the same element.
*/
export const parseSelection = (selection: Selection): [number, number] | null => {
 if (selection.anchorNode !== selection.focusNode) {
   return null;
 } else {
   const a = selection.anchorOffset;
   const b = selection.focusOffset;
   return (a < b) ? [a, b] : [b, a];
 }
};