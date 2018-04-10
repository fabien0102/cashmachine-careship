import notes from "./notes";

describe("lambda/notes", () => {
  it("should return [20, 10] with 30", () => {
    expect(notes(null, { amount: 30 })).toEqual([20, 10]);
  });

  it("should return [50, 20, 10] with 80", () => {
    expect(notes(null, { amount: 80 })).toEqual([50, 20, 10]);
  });

  it("should throw if note is unavailable", () => {
    expect(() => notes(null, { amount: 125 })).toThrow(
      "NoteUnavailableException"
    );
  });

  it("should throw if note is invalid", () => {
    expect(() => notes(null, { amount: -130 })).toThrow(
      "InvalidArgumentException"
    );
  });

  it("should return an empty array if amount is 0", () => {
    expect(notes(null, { amount: 0 })).toEqual([]);
  });

  it("should return an empty array if amount is null", () => {
    expect(notes(null, {})).toEqual([]);
  });

  it("should works with a bigger amount", () => {
    expect(notes(null, { amount: 530 })).toEqual([
      100,
      100,
      100,
      100,
      100,
      20,
      10
    ]);
  });
});
