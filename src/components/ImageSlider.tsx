import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FerdiProfile from './FerdiProfile';

interface HeroImage {
    src: string;
    alt: string;
    title: string;
    recommendation: string;
}

const heroImages: HeroImage[] = [
    {
        src: 'Tharros02.jpg',
        alt: 'Tharros ancient ruins with columns',
        title: 'Leiderschap ontwikkeling',
        recommendation:
            '"Heel gedreven om mensen iets te leren, om zijn ervaring over te dragen. Aanstekelijk enthousiasme en veel deskundigheid inhoudelijk en op het gebied van goed ambtelijk vakmanschap."',
    },
    {
        src: 'Tharros_city01.jpeg',
        alt: 'Tharros historical site with stone columns',
        title: 'Publieke sector training',
        recommendation:
            '"Ik vond het heel fijn om te leren van zijn ervaring en wijsheid. Hij is zeer flexibel en zoekt naar het juiste woord, het juiste middel voor het juiste moment om het goede gesprek te voeren."',
    },
    {
        src: 'groeps04.jpeg',
        alt: 'Tharros ancient road and archaeological site',
        title: 'Professionele coaching',
        recommendation:
            '"De oefeningen over \'het goede gesprek\' waren erg inzichtelijk en hierbij gaf hij bruikbare tips. Mede doordat hij doorvraagt, worden gesprekken scherper, dat is heel prettig."',
    },
    {
        src: 'VisualizingtheFuture.jpg',
        alt: 'Visualizing the Future',
        title: 'Ambtelijk vakmanschap',
        recommendation:
            '"Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk."',
    },
    {
        src: 'tharros03.webp',
        alt: 'Tharros ancient city coastal ruins',
        title: 'Ambtelijk vakmanschap',
        recommendation:
            'Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk. En je creëert een open setting door jezelf kwetsbaar en open op te stellen."',
    },
    {
        src: 'DeathOfArchimedes.jpg',
        alt: 'Death Of Archimedes',
        title: 'Ambtelijk vakmanschap',
        recommendation:
            'Bijzonder hoe hij de tijd neemt om zijn inzichten en ervaringen te delen en ook echt betrokken is tijdens de hele leergang. Zijn oefeningen met ervaring uit de praktijk zijn prettig. Dat zou op de werkvloer vaker moeten gebeuren."',
    },
    {
        src: 'Tharros01.jpg',
        alt: 'Tharros ancient city coastal ruins',
        title: 'Ambtelijk vakmanschap',
        recommendation:
            '"Het is geweldig hoe hij zich inzet voor de ontwikkeling van jongere ambtenaren, en ons uitdaagt om beter te worden. Het oefenen van ambtelijke skills zijn een waardevolle aanvulling op het programma, waarbij hij met zijn ervaring je ook echt iets bijbrengt."',
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
        <section className='w-full h-[30vh] md:h-[40vh] xl:h-[55vh] 2xl:h-[60] mt-12 relative'>
            {/* Profile - Top right (hidden on lg and down) */}
            <div className='hidden xl:block absolute top-4 right-4 z-20'>
                <FerdiProfile />
            </div>
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
                            className='w-full h-full bg-cover bg-center bg-no-repeat relative'
                            style={{ backgroundImage: `url('${img.src}')` }}
                        >
                            {/* Content - Bottom Left */}
                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8'>
                                <div className='max-w-2xl flex flex-col text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0'>
                                    <div className='container mx-auto'>
                                        <div className='max-w-2xl'>
                                            <p className='text-gold-100 leading-relaxed text-xl mb-4'>
                                                Training en Coaching op het
                                                gebied van leiderschap en
                                                ambtelijk vakmanschap in de
                                                publieke sector
                                            </p>
                                            <Link
                                                to='/'
                                                className='flex items-center space-x-3'
                                            >
                                                <img
                                                    src='Logo_tharros_transparent02.png'
                                                    alt='logo Tharros, Training & Coaching'
                                                    className='mb-4 bg-gold-900/70 backdrop-blur-sm rounded-lg p-3 max-w-[290px] shadow-xl hidden lg:block'
                                                />
                                            </Link>
                                            <h2 className='text-2xl font-semibold text-white mb-4'>
                                                {img.title}
                                            </h2>
                                            <blockquote className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border-l-4 border-white/50'>
                                                <p className='text-white italic text-sm leading-relaxed'>
                                                    {img.recommendation}
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
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
