export const Title = ({ title }) => {
  return (
    <h1 className="font-semibold text-slate-600">
      <span className="text-red-400">Today</span> {title}
    </h1>
  );
};

export const TitleColumnChart = ({ title }) => {
  return <h1 className="font-semibold text-slate-600">{title}</h1>;
};
