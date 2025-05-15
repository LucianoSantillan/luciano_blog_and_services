
import './Paragraph.css';

interface ParagraphProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p>{children}</p>
  );
}
