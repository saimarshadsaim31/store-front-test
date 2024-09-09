//@ts-ignore
interface StarProps {
    filled?: boolean;
    partial?: number;
  }
  
  const Star: React.FC<StarProps> = ({ filled, partial }) => {
    const starPath = "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z";
    const starClipPath = partial ? `url(#star-clip-${partial})` : undefined;
    const clipWidth = partial !== undefined ? 24 * (partial / 100) : 0;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        className="md:w-4 md:h-4 h-3 w-3"
      >
        <defs>
          <clipPath id={`star-clip-${partial}`}>
            <rect x="0" y="0" width={clipWidth} height="20" />
          </clipPath>
        </defs>
        <path
          fill={filled ? '#FBB833' : 'none'}
          stroke="currentColor"
          d={starPath}
        />
        {partial !== undefined && (
          <path
            fill="#FBB833"
            clipPath={starClipPath}
            d={starPath}
          />
        )}
      </svg>
    );
  };
  
  // Define the props for the Rating component
  interface RatingProps {
    rating: string |undefined;
    reviewNumbers: string |undefined;
  }
  
  const Rating: React.FC<RatingProps> = ({ rating, reviewNumbers }) => {
    const totalStars = 5;
    const fullStars = Math.floor(Number(rating));
    const partialStar = Number(rating) % 1 * 100; // percentage for partial star
  
    // Create an array of star components
    const stars = Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) {
        return <Star key={index} filled />;
      } else if (index === fullStars && partialStar > 0) {
        return <Star key={index} partial={partialStar} />;
      } else {
        return <Star key={index} />;
      }
    });
  
    return (
      <div className="w-full rounded-lg">
        <div className="flex items-center gap-1 flex-col md:flex-row ">
          <div className="flex items-center">
            {stars}
          </div>
          <p className="text-sm font-semibold text-[#2d2d2d]/50">{reviewNumbers} Reviews</p>
        </div>
      </div>
    );
  };
  
  export default Rating;
  