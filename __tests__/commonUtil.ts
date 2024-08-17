import { formatNumberWithCommas, isEmailValid } from "@/utils/common";

describe("isEmaillValid", () => {
  it("should return true for a valid email", () => {
    expect(isEmailValid("test@example.com")).toBe(true);
  });
});

describe("formatNumberWithCommas", () => {
  it("should format a number with commas", () => {
    expect(formatNumberWithCommas(123456789)).toBe("123,456,789");
  });
});
