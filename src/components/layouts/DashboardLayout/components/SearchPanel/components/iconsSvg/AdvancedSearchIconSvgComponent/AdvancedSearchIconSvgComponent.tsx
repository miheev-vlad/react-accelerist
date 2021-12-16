import * as React from 'react';

type AdvancedSearchIconSvgComponentProps = {
  fillColor: string;
};

const AdvancedSearchIconSvgComponent: React.FC<
  AdvancedSearchIconSvgComponentProps
> = ({ fillColor }) => (
  <svg width={24} height={24} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.667 6.667a.667.667 0 0 1-.667.666H5.334a.667.667 0 1 1 0-1.333H10c.368 0 .667.298.667.667ZM18 6.667a.667.667 0 0 1-.667.666h-4.666a.667.667 0 1 1 0-1.333h4.666c.369 0 .667.298.667.667ZM12 12a.667.667 0 0 1-.667.667h-6a.667.667 0 1 1 0-1.333h6c.368 0 .667.298.667.666ZM18 12a.667.667 0 0 1-.667.667H14a.667.667 0 1 1 0-1.333h3.333c.369 0 .667.298.667.666ZM9.333 17.333a.667.667 0 0 1-.667.667H5.333a.667.667 0 1 1 0-1.334h3.333c.369 0 .667.299.667.667ZM18 17.333a.667.667 0 0 1-.667.667h-6a.667.667 0 1 1 0-1.334h6c.369 0 .667.299.667.667Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4c.368 0 .667.298.667.667v4a.667.667 0 0 1-1.333 0v-4c0-.369.298-.667.666-.667ZM14 9.334c.368 0 .667.298.667.666v4a.667.667 0 0 1-1.333 0v-4c0-.368.298-.666.666-.666ZM8.666 14.666c.369 0 .667.299.667.667v4a.667.667 0 0 1-1.333 0v-4c0-.368.298-.667.666-.667Z"
      fill={fillColor}
    />
  </svg>
);

export default AdvancedSearchIconSvgComponent;
