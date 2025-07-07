'use client';

import { Button } from "./ui/button";

export function ContactButton() {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="px-8 py-3 text-gray-900 bg-gray-300 rounded-full hover:bg-gray-400"
      onClick={() => window.location.href = 'mailto:akbardafandi@gmail.com'}
    >
      Contact Me
    </Button>
  );
}
