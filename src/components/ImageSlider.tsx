import { useState, useEffect, useRef } from 'react';

interface HeroImage {
    src: string;
    alt: string;
    title: string;
    recommendation: string;
}

const heroImages: HeroImage[] = [
    {
        src: 'Tharros-Antieke-Griekse-Arena.jpg',
        alt: 'Tharros ancient ruins with columns',
        title: 'Leiderschap ontwikkeling',
        recommendation:
            '"Heel gedreven om mensen iets te leren, om zijn ervaring over te dragen. Aanstekelijk enthousiasme en veel deskundigheid inhoudelijk en op het gebied van goed ambtelijk vakmanschap."',
    },
    {
        src: 'images/Tharros_city01.jpeg',
        alt: 'Tharros historical site with stone columns',
        title: 'Publieke sector training',
        recommendation:
            '"Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk."',
    },
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Go to next slide (infinite loop)
    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % heroImages.length);
    // Go to previous slide (infinite loop)
    const prevSlide = () =>
        setCurrent(
            (prev) => (prev - 1 + heroImages.length) % heroImages.length
        );

    // Auto-advance
    useEffect(() => {
        timeoutRef.current = setTimeout(nextSlide, 8000);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current]);

    return (
        <section className="relative aspect-[1700/900] w-full overflow-hidden">
            {/* Slider */}
            <div className="relative h-full w-full overflow-hidden">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            idx === current
                                ? 'z-10 opacity-100'
                                : 'pointer-events-none z-0 opacity-0'
                        }`}
                        aria-hidden={idx !== current}
                    >
                        <div
                            className="relative h-full max-h-[870px] w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${img.src}')` }}
                        >
                            {/* Content - Bottom Left */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                                <div className="mx-auto flex w-full flex-col items-center text-center xl:mx-0 xl:max-w-4xl xl:items-start">
                                    <div className="mx-auto">
                                        <div className="w-full lg:max-w-4xl lg:pb-16 xl:pb-0">
                                            <p className="mb-4 text-center text-xl leading-relaxed text-gold-100 sm:text-3xl md:mb-8 md:text-4xl md:leading-relaxed lg:mb-12 lg:text-5xl lg:leading-relaxed xl:mb-16 xl:text-left xl:text-5xl xl:leading-relaxed">
                                                Training en Coaching op het
                                                gebied van leiderschap en
                                                ambtelijk vakmanschap in de
                                                publieke sector
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ferdi's Profile - Top Right */}
                        <div className="absolute right-6 top-6 hidden max-w-lg rounded-lg bg-white/85 p-4 shadow-xl backdrop-blur-sm xl:block">
                            <div className="flex items-end gap-6">
                                <div className="mb-2 h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary/20">
                                    <img
                                        src="images/Ferdi01.jpeg"
                                        alt="Ferdi Licher"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="mb-1 text-3xl font-bold text-foreground">
                                        Ferdi Licher
                                    </h3>
                                    <p className="mb-3 text-lg font-light leading-6 text-primary">
                                        Senior Leadership Coach & Trainer
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="mt-1 text-base font-medium leading-relaxed text-muted-foreground text-slate-600">
                                    {img.recommendation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70 hover:text-slate-400"
                >
                    &#8592;
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70 hover:text-slate-400"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

export default ImageSlider;
