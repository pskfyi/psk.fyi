import type { Tier } from "/lib/tiers.tsx";

export function Tier({ rank }: { rank: Tier }) {
  return (
    <span class="inline-block font-display leading-none! text-xl">
      {rank}
    </span>
  );
}

Tier.S = () => <Tier rank="S" />;
Tier.A = () => <Tier rank="A" />;
Tier.B = () => <Tier rank="B" />;
Tier.C = () => <Tier rank="C" />;
Tier.D = () => <Tier rank="D" />;
Tier.E = () => <Tier rank="E" />;
Tier.F = () => <Tier rank="F" />;
