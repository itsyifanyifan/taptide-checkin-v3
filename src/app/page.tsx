'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the URL contains an NFC tag ID
    const urlParams = new URLSearchParams(window.location.search);
    const nfcTagId = urlParams.get('nfc');
    
    if (nfcTagId) {
      router.push(`/checkin/${nfcTagId}`);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Taptide
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tap your phone on a Taptide NFC tag at participating businesses to earn rewards and discover local gems.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              How it works
            </h2>
            <ol className="text-left text-gray-600 space-y-2">
              <li>1. Tap your phone on a Taptide NFC tag</li>
              <li>2. Register with your name and phone number</li>
              <li>3. Earn rewards with each visit</li>
              <li>4. Discover recommended local businesses</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
