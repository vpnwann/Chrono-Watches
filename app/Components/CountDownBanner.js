'use client';

import { useEffect, useState } from 'react';

const CountdownBanner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-06-01T00:00:00') - +new Date();
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black text-white px-6 py-2 flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <span>GET UP TO</span>
        <span className="font-bold">50%</span>
        <span>OFF LIMITED TIME</span>
        <a href="#" className="ml-4 text-yellow-400 underline hover:text-yellow-300 transition">
          SHOP NOW
        </a>
      </div>

      <div className="flex items-center gap-1 text-xs font-mono">
        <div className="text-center">
          <div>{timeLeft.days}</div>
          <div className="text-[10px] uppercase tracking-wider">Day</div>
        </div>
        <span>.</span>
        <div className="text-center">
          <div>{timeLeft.hours}</div>
          <div className="text-[10px] uppercase tracking-wider">Hrs</div>
        </div>
        <span>.</span>
        <div className="text-center">
          <div>{timeLeft.minutes}</div>
          <div className="text-[10px] uppercase tracking-wider">Min</div>
        </div>
        <span>.</span>
        <div className="text-center">
          <div>{timeLeft.seconds}</div>
          <div className="text-[10px] uppercase tracking-wider">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
