const StarRatings = ({ ratings }: { ratings: number }) => {
  const greyStars = [];
  const yellowStars = [];
  ratings = ratings > 5 ? 5 : ratings;
    const roundedRatings = Math.ceil(ratings);
  for (let i = 0; i < roundedRatings; i++) {
    yellowStars.push(
      i === roundedRatings - 1
        ? Number((ratings - Math.floor(ratings)).toPrecision(2)) * 100
        : 100
    );
  }

  for (let i = 0; i < 5 - roundedRatings; i++) {
    greyStars.push(1);
  }
  return (
    <div className="flex mt-2 ">
      {yellowStars.map((percentage, i) => {
        return (
          <svg width="30" height="30" viewBox="0 0 20 30" key={i}>
            <defs>
              <linearGradient id={"gradient_" + i}>
                <stop offset={percentage + "%"} stopColor="#f5b307" />
                <stop stopColor="#D9D9D9" />
              </linearGradient>
            </defs>

            <path
              d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
              fill={`url(#gradient_${i})`}
            />
          </svg>
        );
      })}

      {greyStars.map((n, i) => {
        return (
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 30"
            key={roundedRatings + i}
          >
            <path
              d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
              fill="#D9D9D9"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRatings;
