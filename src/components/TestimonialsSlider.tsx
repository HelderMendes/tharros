import { Star } from 'lucide-react';
interface Testimonial {
    id: number;
    testimonial: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        testimonial:
            'Heel gedreven om mensen iets te leren, om zijn ervaring over te dragen. Aanstekelijk enthousiasme en veel deskundigheid inhoudelijk en op het gebied van goed ambtelijk vakmanschap.',
    },
    {
        id: 2,
        testimonial:
            'Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk.',
    },
    {
        id: 3,
        testimonial:
            'De oefeningen over – het goede gesprek – waren erg inzichtelijk en hierbij gaf hij bruikbare tips. Mede doordat hij doorvraagt, worden gesprekken scherper, dat is heel prettig.',
    },
    {
        id: 4,
        testimonial: 'Het was fijn om hem zo in zijn element te zien en hoe open hij was over zijn ervaringen. Veel van geleerd.',
    },
    {
        id: 5,
        testimonial:
            'Bijzonder hoe hij de tijd neemt om zijn inzichten en ervaringen te delen en ook echt betrokken is tijdens de hele leergang. Zijn oefeningen met ervaring uit de praktijk zijn prettig. Dat zou op de werkvloer vaker moeten gebeuren.',
    },
    {
        id: 6,
        testimonial:
            'Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk. En je creëert een open setting door jezelf kwetsbaar en open op te stellen.',
    },
    {
        id: 7,
        testimonial:
            'Ik vond het heel fijn om te leren van zijn ervaring en wijsheid. Hij is zeer flexibel en zoekt naar het juiste woord, het juiste middel voor het juiste moment om het goede gesprek te voeren. Daarnaast vond ik zijn opening en afsluiting ook erg inspirerend. Het voelde heel oprecht dat hij zijn ervaring en overdenkingen wilde delen en dat is wat mij betreft goed gelukt.',
    },
    {
        id: 8,
        testimonial:
            'Het is geweldig hoe hij zich inzet voor de ontwikkeling van jongere ambtenaren, en ons uitdaagt om beter te worden. Het oefenen van ambtelijke skills zijn een waardevolle aanvulling op het programma, waarbij hij met zijn ervaring je ook echt iets bijbrengt.',
    },
];

const TestimonialsSlider = () => {
    const visibleTestimonials = testimonials;

    return (
        <section className="relative mx-auto w-full max-w-7xl overflow-hidden">
            {/* Testimonials Display */}
            <div className="grid grid-cols-1 gap-6 transition-all duration-700 ease-in-out md:grid-cols-2 lg:grid-cols-3">
                {visibleTestimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg bg-slate-50 p-6 leading-relaxed text-gray-700">
                        <div className="mb-4 flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="mr-2 h-5 w-5 fill-current text-slate-500" />
                            ))}
                        </div>
                        <p className="mb-4">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSlider;
