"use client";

import { useRef, useState } from "react";

export type Review = {
  id: string;
  reviewerName: string;
  comment: string;
  rating: number;
};

type ReviewsSliderProps = {
  reviews: Review[];
};

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [ratings, setRatings] = useState<Record<string, number>>({});

  const moveSlider = (direction: number) => {
    sliderRef.current?.scrollBy({
      left: direction * 600,
      behavior: "smooth",
    });
  };

  const changeRating = (id: string, rating: number) => {
    setRatings((prev) => ({
      ...prev,
      [id]: rating,
    }));
  };

  return (
    <section className="w-full py-16 mb-10">
      <div className="max-w-[1760px] mx-auto px-5">
        <div className="flex justify-between items-center mb-10 ml-20">
          <h2 className="font-[heavyFont] text-[48px] cursor-default">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex gap-5">
            <button
              onClick={() => moveSlider(-1)}
              className="text-3xl cursor-pointer transition-transform duration-200 hover:-translate-x-1 active:scale-90"
              aria-label="Previous reviews"
            >
              ←
            </button>

            <button
              onClick={() => moveSlider(1)}
              className="text-3xl cursor-pointer transition-transform duration-200 hover:translate-x-1 active:scale-90"
              aria-label="Next reviews"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-7 overflow-x-auto px-5 pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((item) => {
            const currentRating = ratings[item.id] ?? item.rating;

            return (
              <div
                key={item.id}
                className="w-[508px] max-w-[85vw] min-h-[270px] shrink-0 snap-start border border-gray-200 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-default"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => changeRating(item.id, index + 1)}
                      className={`text-[30px] transition-all duration-200 hover:scale-125 active:scale-90 cursor-pointer ${
                        index < currentRating
                          ? "text-[#FFC633]"
                          : "text-gray-300"
                      }`}
                      aria-label={`Rate ${index + 1} stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-bold text-[23px]">{item.reviewerName}</h3>

                  <span className="size-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                    ✓
                  </span>
                </div>

                <p className="text-gray-500 text-[19px] leading-8">
                  "{item.comment}"
                </p>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-[2px]"></div>

        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-[2px]"></div>
      </div>
    </section>
  );
}
