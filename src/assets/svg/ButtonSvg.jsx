// const ButtonSvg = (white) => (
//   <>
//     <svg
//       className="absolute top-0 left-0"
//       width="21"
//       height="44"
//       viewBox="0 0 21 44"
//     >
//       <path
//         fill={white ? "white" : "none"}
//         stroke="white" // Changed to solid white color
//         strokeWidth="2"
//         d="M20,43 Q1,43 1,32 L1,12 Q1,1 20,1" // Rounded corners
//       />
//     </svg>
//     <svg
//       className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
//       height="44"
//       viewBox="0 0 100 44"
//       preserveAspectRatio="none"
//       fill={white ? "white" : "none"}
//     >
//       {white ? (
//         <polygon
//           fill="white"
//           fillRule="nonzero"
//           points="100 0 100 44 0 44 0 0" // Keeps the center rectangular
//         />
//       ) : (
//         <>
//           <polygon
//             fill="white" // Changed to solid white
//             fillRule="nonzero"
//             points="100 42 100 44 0 44 0 42"
//           />
//           <polygon
//             fill="white" // Changed to solid white
//             fillRule="nonzero"
//             points="100 0 100 2 0 2"
//           />
//         </>
//       )}
//     </svg>
//     <svg
//       className="absolute top-0 right-0"
//       width="21"
//       height="44"
//       viewBox="0 0 21 44"
//     >
//       <path
//         fill={white ? "white" : "none"}
//         stroke="white" // Changed to solid white color
//         strokeWidth="1"
//         d="M1,43 Q20,43 20,32 L20,12 Q20,1 1,1" // Rounded corners
//       />
//     </svg>
//   </>
// );

// export default ButtonSvg;
const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke="white" // Changed to solid white color
        strokeWidth="2"
        d="M20,43 Q1,43 1,32 L1,12 Q1,1 20,1" // Rounded corners
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0" // Keeps the center rectangular
        />
      ) : (
        <>
          <polygon
            fill="white" // Changed to solid white
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="white" // Changed to solid white
            fillRule="nonzero"
            points="100 0 100 2 0 2"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke="white" // Changed to solid white color
        strokeWidth="1"
        d="M1,43 Q20,43 20,32 L20,12 Q20,1 1,1" // Rounded corners
      />
    </svg>
  </>
);

export default ButtonSvg;
