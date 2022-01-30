export interface ILoadingProps {
  height?: string;
}

const Loading = ({ height }: ILoadingProps) => {
  return (
    <div className="container">
      <div className="element a"></div>
      <div className="element b"></div>
      <div className="element c"></div>
      <style jsx>{`
        .container {
          height: ${height ? height : "auto"};
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 8px;
        }

        .element {
          --size: 15px;
          height: var(--size);
          width: var(--size);
          background-color: #2859e0;
          border-radius: 4px;
          animation-name: up-down;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .a {
          animation-delay: 100ms;
        }

        .b {
          animation-delay: 300ms;
        }

        .c {
          animation-delay: 500ms;
        }

        @keyframes up-down {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
