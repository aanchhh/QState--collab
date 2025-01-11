const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="0%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="btn-top" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="0%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="0%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="0%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
