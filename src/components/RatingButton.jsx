export const RatingButton = ({ children, onClick }) => {
  return (
    <button className="rating-bar__star star-wrapper">
      {...children}
    </button>
  );
};
