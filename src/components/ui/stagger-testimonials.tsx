

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The 60-Day Sprint completely reorganized our chaotic marketing. We went from random posts to a lead-generating machine.",
    by: "Sarah Khan, Founder at Dermacare Clinic",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "I was skeptical about the 50k maintenance, but the volume of content is insane. It feels like I have a full team working for me.",
    by: "Ahmed Riaz, Owner at IronForge Gym",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "Nerozarb built our entire brand infrastructure. The landing page alone paid for the sprint fee in just week two of the launch.",
    by: "Bilal Tariq, E-com Manager at StyloMode",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Finally, an agency that doesn't just talk about 'brand awareness' but actually cares about systems, automation, and revenue.",
    by: "Zainab Malik, Principal Architect at ZM Spaces",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "The ROI from Nerozarb's system is insane. We 5x'd our leads in just 30 days after the sprint.",
    by: "Omar Hassan, CEO at TechVentures",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "We were lost managing 5 different freelancers. Nerozarb gave us one system that just works.",
    by: "Fatima Ali, Marketing Head at StyleHub",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "The WhatsApp automation alone saved us 20 hours a week. Game changer for our sales team.",
    by: "Hassan Raza, Sales Director at PropTech",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "Their content production quality is unmatched. Every video they made went viral on our page.",
    by: "Ayesha Khan, Founder at GlowSkin",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "Best investment we made this year. The 60-day sprint transformed our entire digital presence.",
    by: "Usman Sheikh, Owner at FitLife Studio",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "From zero online presence to 50k followers in 2 months. Nerozarb delivers.",
    by: "Sana Mirza, Founder at CraftedHome",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-white border-primary"
          : "z-0 bg-onyx text-white border-zinc-700 hover:border-white/20"
      )}
      style={{
        width: cardSize,
        minHeight: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #333333" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-zinc-700"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-onyx object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #0A0A0A"
        }}
      />
      <p className={cn(
        "text-base sm:text-lg font-medium leading-relaxed line-clamp-5",
        isCenter ? "text-white" : "text-gray-300"
      )}>
        "{testimonial.testimonial}"
      </p>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-base italic",
        isCenter ? "text-white/80" : "text-gray-400"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSize, 150);
    };

    updateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-onyx"
      style={{ minHeight: 500 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-onyx border-2 border-zinc-700 hover:bg-primary hover:text-white hover:border-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left text-white" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-onyx border-2 border-zinc-700 hover:bg-primary hover:text-white hover:border-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right text-white" />
        </button>
      </div>
    </div>
  );
};
