interface DotProps {
  color: string;
  index: number;
  checkColor(color: string): void;
}

export const Dot = ({ color, index, checkColor }: DotProps): JSX.Element => {
  const handleClick = () => {
    checkColor(color);
  };

  return (
    <button
      className="dot"
      style={{
        background: color,
      }}
      onClick={() => handleClick()}
      key={index}
    ></button>
  );
};
