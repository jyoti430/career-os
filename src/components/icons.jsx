import React from "react";

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="5,4 1,8 5,12" />
      <polyline points="11,4 15,8 11,12" />
      <line x1="9" y1="2" x2="7" y2="14" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" />
      <polyline points="2,5 8,8 14,5" />
      <line x1="8" y1="8" x2="8" y2="15" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="5" r="3" />
      <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  );
}
export { GridIcon, CodeIcon, BoxIcon, UserIcon };