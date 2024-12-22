import React from 'react';

export function AnnouncementBar() {
  return (
    <div className="py-1 px-4 text-left md:text-center font-medium font-sans tracking-tight text-sm bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500">
      <p className="max-w-screen-xl mx-auto">
        Introducing{' '}
        <span className="px-1 py-1 rounded-sm font-bold">
          Z-secure
        </span>{' '}
        - One stop solution for web attack protection. Free for first 100 Users!
      </p>
    </div>
  );
}
