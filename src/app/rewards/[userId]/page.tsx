'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import SurpriseCard from '@/components/SurpriseCard';
import { Sparkles } from 'lucide-react';

interface Merchant {
  id: string;
  name: string;
  location: string;
  rewardGoal: number;
  rewardDescription: string;
  activePromos: Array<{
    title: string;
    description: string;
    code: string;
  }>;
  referringTo: Merchant[];
}

interface Reward {
  id: string;
  progress: number;
  merchant: Merchant;
}

export default function RewardsPage() {
  const params = useParams();
  const userId = params?.userId as string;
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [referralMerchants, setReferralMerchants] = useState<Merchant[]>([]);
  const [revealedOffers, setRevealedOffers] = useState<Record<string, Date>>({});
  const [showCover, setShowCover] = useState(true);

  // Helper function to render star rating
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="h-5 w-5 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative h-5 w-5">
            <StarIcon className="absolute h-5 w-5 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            <StarIcon className="absolute h-5 w-5 text-gray-200" style={{ clipPath: 'inset(0 0 0 50%)' }} />
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="h-5 w-5 text-gray-200" />
        ))}
      </div>
    );
  };

  useEffect(() => {
    async function fetchRewards() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/rewards/${userId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch rewards');
        }
        const data = await response.json();
        
        // Process referral merchants
        const allReferrals = data.flatMap((reward: Reward) => {
          return reward.merchant.referringTo || [];
        });
        
        // Remove duplicates
        const uniqueReferrals = allReferrals.filter((merchant: Merchant, index: number, self: Merchant[]) =>
          index === self.findIndex((m: Merchant) => m.id === merchant.id)
        );
        
        setRewards(data);
        setReferralMerchants(uniqueReferrals);
      } catch (err) {
        console.error('Error fetching rewards:', err);
        setError(err instanceof Error ? err.message : 'Failed to load rewards');
        toast.error('Failed to load rewards');
      } finally {
        setIsLoading(false);
      }
    }

    if (userId) {
      fetchRewards();
    }
  }, [userId]);

  const handleReveal = (offerId: string) => {
    setRevealedOffers(prev => ({
      ...prev,
      [offerId]: new Date()
    }));
  };

  const handleClaim = (offerId: string) => {
    console.log('Claiming offer:', offerId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto card p-6">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (!rewards.length) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto card p-6">
          <p className="text-gray-500 text-center">No rewards found. Visit a merchant to start earning rewards!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Current Rewards */}
        <div className="card mb-8">
          <div className="p-6 bg-gradient-to-r from-primary-600 to-purple-600">
            <h2 className="text-2xl font-bold text-white font-poppins flex items-center">
              <GiftIcon className="h-7 w-7 mr-2" />
              Your Rewards
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {rewards.map((reward) => (
              <div key={reward.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 font-poppins">{reward.merchant.name}</h3>
                    <div className="mt-1">
                      {renderStarRating(4.5)}
                    </div>
                    <p className="text-sm text-gray-500 flex items-center mt-2">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {reward.merchant.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {reward.progress} / {reward.merchant.rewardGoal}
                    </p>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-4 progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${(reward.progress / reward.merchant.rewardGoal) * 100}%`
                    }}
                  ></div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  <GiftIcon className="h-4 w-4 inline mr-1" />
                  {reward.merchant.rewardGoal} visits = a coffee on us ☕✨ (You're {reward.progress} sip{reward.progress !== 1 ? 's' : ''} in!)
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Surprise Experiences Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock a Surprise Experience
            </h2>
            <p className="text-gray-600">
              Scratch to reveal exclusive offers from Cafe Luna's Brooklyn favorites
            </p>
          </div>

          <div className="space-y-6">
            <SurpriseCard
              title="Coffee with Books"
              description="Enjoy a free coffee and pastry while browsing our curated collection of local authors' books."
              isRevealed={!!revealedOffers['coffee-books']}
              onReveal={() => handleReveal('coffee-books')}
              onClaim={() => handleClaim('coffee-books')}
              revealedAt={revealedOffers['coffee-books']}
            />

            <SurpriseCard
              title="Yoga for Sunday"
              description="Join our Sunday morning yoga session with a complimentary smoothie after class."
              isRevealed={!!revealedOffers['yoga-sunday']}
              onReveal={() => handleReveal('yoga-sunday')}
              onClaim={() => handleClaim('yoga-sunday')}
              revealedAt={revealedOffers['yoga-sunday']}
            />

            <SurpriseCard
              title="Sofar Sounds Concert"
              description="Get exclusive access to our secret Sofar Sounds concert location with a complimentary drink."
              isRevealed={!!revealedOffers['sofar-concert']}
              onReveal={() => handleReveal('sofar-concert')}
              onClaim={() => handleClaim('sofar-concert')}
              revealedAt={revealedOffers['sofar-concert']}
            />
          </div>
        </section>
      </div>
    </div>
  );
} 