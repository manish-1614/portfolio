export type HeroVisualState =
  | 'source'      // Static photographic portrait
  | 'compile'     // Scroll-driven halftone coordinate snap
  | 'idle'        // Settled constellation, ambient slow breathing pulse
  | 'traced'      // Request pulse travelling through the 7-node architecture
  | 'resolved';   // Response delivered, quiet CTA visible

export type HeroAction =
  | { type: 'SCROLL_COMPILE'; progress: number }
  | { type: 'SET_IDLE' }
  | { type: 'START_TRACE'; source: 'manual' | 'auto-preview' }
  | { type: 'FINISH_TRACE' }
  | { type: 'RESET_TO_IDLE' };
