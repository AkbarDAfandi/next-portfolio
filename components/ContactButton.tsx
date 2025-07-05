'use client';

import { Button } from "./ui/button";

export function ContactButton() {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-8 py-3 rounded-full"
      onClick={() => window.location.href = 'mailto:akbardafandi@gmail.com'}
    >
      Contact Me
    </Button>
  );
}
