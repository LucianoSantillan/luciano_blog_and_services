
import './Heading5.css';

interface Heading5Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export default function Heading5({children}: Heading5Props) {
  return (
    <h5>{children}</h5>
  );
}
