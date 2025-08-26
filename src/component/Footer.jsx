import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} Barya HR Services. All Rights Reserved.</p>
    </footer>
  );
}
