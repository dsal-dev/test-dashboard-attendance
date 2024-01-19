const Card = ({ children }) => {
  return <div className="bg-white rounded p-2">{children}</div>;
};

export default Card;

export const CardSummary = ({ value, unit }) => {
  return (
    <div className="h-[200px] flex flex-col justify-center items-center">
      <p className="font-bold text-[56px] text-[#344767]">{value}</p>
      <p className="font-semibold text-[#344767]">{unit}</p>
    </div>
  );
};
