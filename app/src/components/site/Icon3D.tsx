import type { LucideIcon } from "lucide-react";

export function Icon3D({
  icon: Icon,
  size = 44,
  iconSize = 20,
  className = "",
}: {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
  className?: string;
}) {
  return (
    <div
      data-card-icon
      className={`icon-3d ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon size={iconSize} strokeWidth={1.75} className="relative text-foreground" />
    </div>
  );
}