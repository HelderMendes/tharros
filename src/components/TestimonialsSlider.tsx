import { Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Testimonial {
    testimonial: string;
}

const testimonials: Testimonial[] = [
    {
        testimonial:
            'Heel gedreven om mensen iets te leren, om zijn ervaring over te dragen. Aanstekelijk enthousiasme en veel deskundigheid inhoudelijk en op het gebied van goed ambtelijk vakmanschap.',
    },
    {
        testimonial:
            'Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk.',
    },
    {
        testimonial:
            'De oefeningen over – het goede gesprek – waren erg inzichtelijk en hierbij gaf hij bruikbare tips. Mede doordat hij doorvraagt, worden gesprekken scherper, dat is heel prettig.',
    },
    {
        testimonial:
            'Het was fijn om hem zo in zijn element te zien en hoe open hij was over zijn ervaringen. Veel van geleerd.',
    },
    {
        testimonial:
            'Bijzonder hoe hij de tijd neemt om zijn inzichten en ervaringen te delen en ook echt betrokken is tijdens de hele leergang. Zijn oefeningen met ervaring uit de praktijk zijn prettig. Dat zou op de werkvloer vaker moeten gebeuren.',
    },
    {
        testimonial:
            'Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk. En je creëert een open setting door jezelf kwetsbaar en open op te stellen.',
    },
    {
        testimonial:
            'Ik vond het heel fijn om te leren van zijn ervaring en wijsheid. Hij is zeer flexibel en zoekt naar het juiste woord, het juiste middel voor het juiste moment om het goede gesprek te voeren. Daarnaast vond ik zijn opening en afsluiting ook erg inspirerend. Het voelde heel oprecht dat hij zijn ervaring en overdenkingen wilde delen en dat is wat mij betreft goed gelukt.',
    },
    {
        testimonial:
            'Het is geweldig hoe hij zich inzet voor de ontwikkeling van jongere ambtenaren, en ons uitdaagt om beter te worden. Het oefenen van ambtelijke skills zijn een waardevolle aanvulling op het programma, waarbij hij met zijn ervaring je ook echt iets bijbrengt.',
    },
];

const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // sm
};

const TestimonialsSlider = () => {
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Responsive slidesPerView
    useEffect(() => {
        const handleResize = () => setSlidesPerView(getSlidesPerView());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-advance every 8 seconds - moves one testimonial at a time
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, 8000);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [current]);

    // Move one testimonial at a time, with infinite loop
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    // Get the testimonials to display based on current position and slidesPerView
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < slidesPerView; i++) {
            const index = (current + i) % testimonials.length;
            visible.push({
                ...testimonials[index],
                key: `${index}-${current + i}`, // Unique key for React
            });
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden">
            {/* Slider Controls */}
            <button
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-slate-500 shadow transition-colors hover:bg-slate-500 hover:text-white"
                onClick={prevSlide}
                aria-label="Previous testimonial"
            >
                &#8592;
            </button>
            <button
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-slate-500 shadow transition-colors hover:bg-slate-500 hover:text-white"
                onClick={nextSlide}
                aria-label="Next testimonial"
            >
                &#8594;
            </button>

            {/* Testimonials Display */}
            <div className="flex transition-all duration-700 ease-in-out">
                {visibleTestimonials.map((testimonial) => (
                    <div
                        key={testimonial.key}
                        className="m-2 flex-shrink-0 rounded-lg bg-slate-50 p-6"
                        style={{
                            width: `calc(${100 / slidesPerView}% - 1rem)`,
                            minWidth:
                                slidesPerView === 1
                                    ? 'calc(100% - 1rem)'
                                    : 'auto',
                        }}
                    >
                        <div className="mb-4 flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="mr-2 h-5 w-5 fill-current text-slate-500"
                                />
                            ))}
                        </div>
                        <p className="mb-4 italic text-gray-700">
                            "{testimonial.testimonial}"
                        </p>
                    </div>
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="mt-6 flex justify-center space-x-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`h-2 w-2 rounded-full transition-colors ${
                            idx === current % testimonials.length
                                ? 'bg-gold-600'
                                : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSlider;
