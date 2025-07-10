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
        <section className='relative w-full aspect-[1700/900] overflow-hidden  '>
            {/* Slider */}
            <div className='w-full h-full relative overflow-hidden'>
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            idx === current
                                ? 'opacity-100 z-10'
                                : 'opacity-0 z-0 pointer-events-none'
                        }`}
                        aria-hidden={idx !== current}
                    >
                        <div
                            className='w-full h-full bg-cover bg-center bg-no-repeat relative max-h-[870px]'
                            style={{ backgroundImage: `url('${img.src}')` }}
                        >
                            {/* Content - Bottom Left */}
                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 '>
                                <div className='w-full xl:max-w-4xl flex flex-col text-center items-center xl:items-start mx-auto xl:mx-0'>
                                    <div className=' mx-auto'>
                                        <div className='w-full lg:max-w-4xl lg:pb-16  xl:pb-0'>
                                            <p className='text-gold-100 text-xl sm:text-3xl text-center md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-left xl:text-5xl xl:leading-relaxed mb-4 md:mb-8 lg:mb-12 xl:mb-16  leading-relaxed '>
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
                        <div className='hidden xl:block absolute  top-6 right-6 bg-white/85 backdrop-blur-sm rounded-lg p-4 max-w-lg shadow-xl'>
                            <div className='flex items-end gap-6'>
                                <div className='w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20 mb-2'>
                                    <img
                                        src='images/Ferdi01.jpeg'
                                        alt='Ferdi Licher'
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <h3 className='font-bold text-foreground text-3xl mb-1'>
                                        Ferdi Licher
                                    </h3>
                                    <p className='text-primary font-light text-lg leading-6  mb-3'>
                                        Senior Leadership Coach & Trainer
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className='text-base font-medium text-slate-600 text-muted-foreground leading-relaxed mt-1 '>
                                    {img.recommendation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    aria-label='Previous Slide'
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20 hover:text-slate-400'
                >
                    &#8592;
                </button>
                <button
                    onClick={nextSlide}
                    aria-label='Next Slide'
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20 hover:text-slate-400'
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

export default ImageSlider;
