export default function FerdiProfile({
    className = '',
}: {
    className?: string;
}) {
    return (
        <div
            className={`bg-gold-900/10 backdrop-blur-sm rounded-lg p-3 max-w-md shadow-xl ${className}`}
        >
            <div className='flex items-start gap-3'>
                <div className='flex-1 flex flex-col justify-end items-end h-36'>
                    <h3 className='font-bold text-background text-3xl text-left mt-3'>
                        Ferdi Licher
                    </h3>
                    <p className='text-slate-900 font-medium text-xl text-right leading-tight pt-2'>
                        Senior Leadership Coach & Trainer
                    </p>
                </div>
                <div className='w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20 border-zinc-300 border-y-2'>
                    <img
                        src='images/Ferdi01.jpeg'
                        alt='Ferdi Licher'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <p className='flex-1 text-muted-foreground leading-relaxed text-white pt-3'>
                Met meer dan 15 jaar ervaring in de publieke sector,
                specialiseert Ferdi zich in het ontwikkelen van authentiek
                leiderschap en effectief vakmanschap.
            </p>
        </div>
    );
}
