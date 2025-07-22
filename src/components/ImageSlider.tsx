interface HeroImage {
    src: string;
    alt: string;
    title: string;
    recommendation: string;
}

const heroImages: HeroImage[] = [
    {
        src: 'images/Tharros-Antieke-Griekse-Arena.jpeg',
        alt: 'Tharros ancient ruins with columns',
        title: 'Leiderschap ontwikkeling',
        recommendation:
            '"Aanstekelijk enthousiasme. Ik vond het heel fijn te leren van zijn ervaring en wijsheid. Hij zoekt naar het juiste woord en moment om het goede gesprek te voeren."',
    },
];

const ImageSlider = () => {
    return (
        <section className="relative aspect-[600/400] h-full max-h-[870px] min-h-[320px] w-full overflow-hidden sm:aspect-[600/200] md:aspect-[1700/900]">
            {/* Slider */}
            {heroImages.map((img, idx) => (
                <div
                    key={idx}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                >
                    <div
                        className="absolute h-full max-h-[870px] w-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${img.src}')` }}
                    >
                        {/* Content - Bottom Left */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                            <div className="mx-auto flex w-full flex-col items-center text-center xl:mx-0 xl:max-w-4xl xl:items-start">
                                <div className="mx-auto">
                                    <div className="w-full lg:max-w-4xl lg:pb-16 xl:pb-0">
                                        <p className="mb-4 text-center text-xl leading-relaxed text-gold-100 sm:text-3xl md:mb-8 md:text-4xl md:leading-relaxed lg:mb-12 lg:text-5xl lg:leading-relaxed xl:mb-16 xl:text-left xl:text-5xl xl:leading-relaxed">
                                            Training en Coaching op het gebied
                                            van leiderschap en ambtelijk
                                            vakmanschap in de publieke sector
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
                                    src="images/Profil_FerdiLicher.jpeg"
                                    alt="Ferdi Licher"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <h3 className="mb-1 text-3xl font-bold text-foreground">
                                    Ferdi Licher
                                </h3>
                                <p className="mb-3 text-lg font-light leading-6 text-primary">
                                    Moderator, Trainer en Coach
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
        </section>
    );
};

export default ImageSlider;
