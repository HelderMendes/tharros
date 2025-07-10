import { useState, useEffect } from 'react';

interface Reference {
    reference: string;
}

const references: Reference[] = [
    {
        reference:
            '"Heel gedreven om mensen iets te leren, om zijn ervaring over te dragen. Aanstekelijk enthousiasme en veel deskundigheid inhoudelijk en op het gebied van goed ambtelijk vakmanschap."',
    },
    {
        reference:
            '"Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk."',
    },
    {
        reference:
            '"Ik vond het heel fijn om te leren van zijn ervaring en wijsheid. Hij is zeer flexibel en zoekt naar het juiste woord, het juiste middel voor het juiste moment om het goede gesprek te voeren. Daarnaast vond ik zijn opening en afsluiting ook erg inspirerend. Het voelde heel oprecht dat hij zijn ervaring en overdenkingen wilde delen en dat is wat mij betreft goed gelukt."',
    },
    {
        reference:
            '"De oefeningen over – het goede gesprek – waren erg inzichtelijk en hierbij gaf hij bruikbare tips. Mede doordat hij doorvraagt, worden gesprekken scherper, dat is heel prettig."',
    },
    {
        reference:
            '"Het was fijn om hem zo in zijn element te zien en hoe open hij was over zijn ervaringen. Veel van geleerd."',
    },
    {
        reference:
            '"Bijzonder hoe hij de tijd neemt om zijn inzichten en ervaringen te delen en ook echt betrokken is tijdens de hele leergang. Zijn oefeningen met ervaring uit de praktijk zijn prettig. Dat zou op de werkvloer vaker moeten gebeuren."',
    },
    {
        reference:
            '"Super hoe je je eigen ervaringen deelt met de groep waar iedereen denk ik veel van heeft geleerd. Is meteen toe te passen in ons eigen werk. En je creëert een open setting door jezelf kwetsbaar en open op te stellen."',
    },
    {
        reference:
            '"Het is geweldig hoe hij zich inzet voor de ontwikkeling van jongere ambtenaren, en ons uitdaagt om beter te worden. Het oefenen van ambtelijke skills zijn een waardevolle aanvulling op het programma, waarbij hij met zijn ervaring je ook echt iets bijbrengt."',
    },
];

const ReferencesSlider = () => {
    const [current, setCurrent] = useState(0);

    // Auto-advance met setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % references.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [references.length]);

    return (
        <section className='relative w-fulloverflow-hidden flex items-center justify-center'>
            <div className='w-full h-full relative overflow-hidden'>
                <p className='text-muted-foreground leading-loose text-xl mt-3 text-center text-slate-400'>
                    {references[current].reference}
                </p>
            </div>
        </section>
    );
};

export default ReferencesSlider;
