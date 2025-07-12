export default function FerdiProfile({
    className = '',
}: {
    className?: string;
}) {
    return (
        <div
            className={`max-w-md rounded-lg bg-gold-900/10 p-3 shadow-xl backdrop-blur-sm ${className}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex h-36 flex-1 flex-col items-end justify-end">
                    <h3 className="mt-3 text-left text-3xl font-bold text-background">
                        Ferdi Licher
                    </h3>
                    <p className="pt-2 text-right text-xl font-medium leading-tight text-slate-900">
                        Senior Leadership Coach & Trainer
                    </p>
                </div>
                <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-full border-4 border-y-2 border-primary/20 border-zinc-300">
                    <img
                        src="images/Ferdi01.jpeg"
                        alt="Ferdi Licher"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <p className="flex-1 pt-3 leading-relaxed text-muted-foreground text-white">
                Met meer dan 15 jaar ervaring in de publieke sector,
                specialiseert Ferdi zich in het ontwikkelen van authentiek
                leiderschap en effectief vakmanschap.
            </p>
        </div>
    );
}
