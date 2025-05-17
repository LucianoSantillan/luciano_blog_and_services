import { PRIMARY_COLOR_2 } from "@/app/theme";
import { CheckCircle } from "lucide-react";

interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {
  bullets: string[];
}

export default function MenuList({ bullets, className, style }: MenuListProps) {
  return (
    <ul style={style} className={`${className} space-y-4`}>
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg">
          <CheckCircle style={{color: PRIMARY_COLOR_2}} className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
          <span style={{textAlign: "start"}}>{item}</span>
        </li>
      ))}
    </ul>
  );
}