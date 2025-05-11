import { CheckCircle } from "lucide-react";

interface MenuListProps {
  bullets: string[];
}

export default function MenuList({ bullets }: MenuListProps) {
  return (
    <ul className="mt-8 space-y-4">
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg">
          <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}