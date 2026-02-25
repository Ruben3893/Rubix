import { LucideIcon } from "lucide-react";

interface SpecItemProps {
    label: string;
    value: string;
}

function SpecItem({ label, value }: SpecItemProps) {
    return (
        <div className="border border-white/5 p-8 flex flex-col hover:border-rubix-gold/30 transition-colors duration-300 bg-white/[0.02]">
            <span className="text-rubix-gold text-xs uppercase tracking-widest mb-2">{label}</span>
            <span className="text-white text-xl font-light tracking-wide">{value}</span>
        </div>
    );
}

export function SpecGrid() {
    const specs = [
        { label: "Movement", value: "Automatic Calibre" },
        { label: "Case Diameter", value: "42.5mm Titanium" },
        { label: "Resistance", value: "10 ATM / 100M" },
        { label: "Crystal", value: "Sapphire Arc" },
    ];

    return (
        <section className="bg-rubix-dark border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-b border-white/5">
                {specs.map((spec) => (
                    <SpecItem key={spec.label} {...spec} />
                ))}
            </div>
        </section>
    );
}
