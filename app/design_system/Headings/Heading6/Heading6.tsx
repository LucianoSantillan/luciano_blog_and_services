
import './Heading6.css';


interface Heading6Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export default function Heading6({children}: Heading6Props) {
  return (
    <h6>{children}</h6>
  );
}
