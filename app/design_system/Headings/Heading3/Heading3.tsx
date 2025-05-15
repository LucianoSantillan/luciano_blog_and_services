
import './Heading3.css';

interface Heading3Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{}

export default function Heading3({ children }: Heading3Props) {
  return <h3>{children}</h3>;
}
