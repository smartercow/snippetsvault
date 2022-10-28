import { Icon } from "@chakra-ui/react";

export const ArrowDownSquareIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        opacity="0.4"
        d="M1.99988 7.9159V16.0839C1.99988 19.6229 4.27588 21.9999 7.66488 21.9999H16.3349C19.7239 21.9999 21.9999 19.6229 21.9999 16.0839V7.9159C21.9999 4.3779 19.7229 1.9999 16.3339 1.9999H7.66488C4.27588 1.9999 1.99988 4.3779 1.99988 7.9159Z"
        fill={fill}
      />
      <path
        d="M7.72057 12.8554L11.4686 16.6204C11.7506 16.9034 12.2496 16.9034 12.5326 16.6204L16.2806 12.8554C16.5726 12.5614 16.5716 12.0864 16.2776 11.7944C15.9836 11.5024 15.5096 11.5024 15.2166 11.7964L12.7496 14.2734V7.9184C12.7496 7.5034 12.4136 7.1684 11.9996 7.1684C11.5856 7.1684 11.2496 7.5034 11.2496 7.9184V14.2734L8.78357 11.7964C8.63657 11.6494 8.44457 11.5764 8.25157 11.5764C8.06057 11.5764 7.86857 11.6494 7.72257 11.7944C7.42957 12.0864 7.42857 12.5614 7.72057 12.8554Z"
        fill={fill}
      />
    </Icon>
  );
};
