
import { Head } from 'next/document';
import './Heading4.css';

interface Heading4Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export default function Heading4({ children }: Heading4Props) {
  return <h4>{children}</h4>;
}
