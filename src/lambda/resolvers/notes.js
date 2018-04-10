const AVAILABLE_NOTES = [100, 50, 20, 10];
const SMALLEST_NOTE = AVAILABLE_NOTES[AVAILABLE_NOTES.length - 1];

/**
 * Retrieve notes from an amount.
 *
 * @param {never} _
 * @param {object} args
 * @param {number} args.amount
 *
 * @returns {number[]}
 */
export default function notes(_, { amount }) {
  if (!amount) return [];
  if (amount < 0) throw new Error("InvalidArgumentException");

  let rest = amount;
  let output = [];
  while (rest > 0) {
    for (let note of AVAILABLE_NOTES) {
      if (note > rest) continue;
      rest -= note;
      output.push(note);
      break;
    }
    if (rest !== 0 && rest < SMALLEST_NOTE)
      throw new Error("NoteUnavailableException");
  }
  return output;
}
