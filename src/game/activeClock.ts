/**
 * Measures active study time. Time between taps counts, but any single gap is
 * capped (so leaving a lesson open while doing something else doesn't earn
 * screen time), and time while the app is in the background doesn't count.
 */
export class ActiveClock {
  private activeMs = 0;
  private last: number | null;

  constructor(now: number, private readonly maxGapMs = 120_000) {
    this.last = now;
  }

  /** Call on every interaction. */
  tick(now: number) {
    if (this.last !== null) this.activeMs += Math.min(Math.max(0, now - this.last), this.maxGapMs);
    this.last = now;
  }

  /** App went to the background: bank the time so far and stop counting. */
  pause(now: number) {
    this.tick(now);
    this.last = null;
  }

  /** App came back: start counting again from now. */
  resume(now: number) {
    this.last = now;
  }

  seconds(): number {
    return Math.round(this.activeMs / 1000);
  }
}
