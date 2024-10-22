import { describe, it, expect } from "vitest";
import { unixToNormalStamp } from "./unixToNormalStamp";

describe("unixToNormalStamp", () => {
  it('should convert 0 seconds to "0d 0h 0m 0.00s"', () => {
    console.log(unixToNormalStamp(0));
    expect(unixToNormalStamp(0)).toBe("0d 0h 0m 0.00s");
  });

  it('should convert 3600 seconds to "0d 1h 0m 0.00s"', () => {
    console.log(unixToNormalStamp(3600));
    expect(unixToNormalStamp(3600)).toBe("0d 1h 0m 0.00s");
  });

  it('should convert 86400 seconds to "1d 0h 0m 0.00s"', () => {
    console.log(unixToNormalStamp(86400));
    expect(unixToNormalStamp(86400)).toBe("1d 0h 0m 0.00s");
  });

  it('should convert 90061.5 seconds to "1d 1h 1m 1.50s"', () => {
    console.log(unixToNormalStamp(90061.5));
    expect(unixToNormalStamp(90061.5)).toBe("1d 1h 1m 1.50s");
  });

  it('should convert 1234567 seconds to "14d 6h 56m 7.00s"', () => {
    console.log(unixToNormalStamp(1234567));
    expect(unixToNormalStamp(1234567)).toBe("14d 6h 56m 7.00s");
  });
});
