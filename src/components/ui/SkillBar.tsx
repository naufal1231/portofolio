interface SkillBarProps {
  percentage: number;
  animated?: boolean;
}

/**
 * SkillBar — Progress bar for skill percentage
 * Converts `.skill-bar` + `.skill-bar-fill-dev` from Blade to React component
 */
export default function SkillBar({ percentage, animated = true }: SkillBarProps) {
  return (
    <div className="skill-bar">
      <div
        className="skill-bar-fill-dev"
        style={{ width: animated ? `${percentage}%` : '0%' }}
      />
    </div>
  );
}
