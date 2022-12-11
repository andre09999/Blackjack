export default function earningModifier(total) {
  if (total === 21) return 3;
  if (total > 18) return 1.8;
  if (total > 15) return 1.5;
  if (total > 12) return 1.3;
}