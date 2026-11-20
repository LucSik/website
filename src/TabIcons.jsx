// Small single-colour tab bar icons. They draw in currentColor, so they match each tab's
// text colour (muted when inactive, white when active).

function Icon({ children }) {
  return (
    <svg
      className="tab-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function HouseIcon() {
  return (
    <Icon>
      <path d="M4 11.2 12 4.5l8 6.7" />
      <path d="M6.3 9.6V19a1 1 0 0 0 1 1h9.4a1 1 0 0 0 1-1V9.6" />
      <path d="M10 20v-5.2a2 2 0 0 1 4 0V20" />
    </Icon>
  );
}

export function CodeIcon() {
  return (
    <Icon>
      <path d="M8.5 7 3.8 12l4.7 5" />
      <path d="M15.5 7l4.7 5-4.7 5" />
      <path d="M13.4 5.5 10.6 18.5" />
    </Icon>
  );
}

export function BubbleTeaIcon() {
  return (
    <Icon>
      <path d="M13.5 2.5 12.2 8" />
      <path d="M5.5 8h13" />
      <path d="M6.6 8l1.2 11.6a1.6 1.6 0 0 0 1.6 1.4h5.2a1.6 1.6 0 0 0 1.6-1.4L17.4 8" />
      <circle cx="10" cy="17" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13" cy="17.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11.6" cy="15" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </Icon>
  );
}

// A picture frame with hills and a sun, for the Gallery.
export function FrameIcon() {
  return (
    <Icon>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.8 17 9 11.8l4 4 2.6-2.6 4.6 4.6" />
      <circle cx="15.5" cy="9" r="1.6" />
    </Icon>
  );
}

// A torii gate: curved top beam, straight lower beam and two pillars.
export function ToriiIcon() {
  return (
    <Icon>
      <path d="M3 5.5c3 1.2 15 1.2 18 0" />
      <path d="M5.5 9.5h13" />
      <path d="M7.5 6.6V20.5M16.5 6.6V20.5" />
      <path d="M12 6.9v2.6" />
    </Icon>
  );
}
