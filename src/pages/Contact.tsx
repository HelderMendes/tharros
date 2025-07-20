import { useRef, useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import {
    Mail,
    Phone,
    Briefcase,
    MapPin,
    Send,
    Building2,
    CheckCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error('Form reference is null');
            return;
        }

        console.log('Sending email with form data:', formData);

        emailjs
            .sendForm(
                'service_tnwwd7h',
                // 'template_4x9g9fz',
                'template_lzuedzh',
                form.current,
                {
                    publicKey: '9-5OzkJ4Bu11JvnC9',
                }
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setIsSubmitted(true);
                    setTimeout(() => {
                        setIsSubmitted(true);
                        setFormData({
                            name: '',
                            email: '',
                            organization: '',
                            phone: '',
                            interest: '',
                            message: '',
                        });
                    }, 3000);
                },
                (error) => {
                    console.error('Email send failed:', error);
                    alert('Er is iets fout gegaan, probeer het later opnieuw.');
                }
            );
    };

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact - Tharros Training & Coaching',
        description:
            "Neem contact op met Tharros Training & Coaching voor meer informatie over onze leiderschapsprogramma's en coaching services.",
        provider: {
            '@type': 'Organization',
            name: 'Tharros Training & Coaching',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'info@helderdesign.nl',
            },
        },
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSubmitted === true) {
            timer = setTimeout(() => {
                navigate('/');
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isSubmitted, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
                <div className="text-center">
                    <CheckCircle className="mx-auto mb-6 h-16 w-16 text-slate-500" />
                    <h1 className="mb-4 text-3xl font-semibold text-gold-600">
                        Bedankt voor uw bericht!
                    </h1>
                    <p className="mb-6 text-lg font-light text-gray-600">
                        We nemen binnen 24 uur contact met u op.
                    </p>
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-slate-500"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Contact - Neem Contact Op met Tharros Training & Coaching"
                description="Neem contact op met Ferdi Licher van Tharros Training & Coaching voor meer informatie over onze leiderschapsprogramma's, coaching services en trainingen voor de publieke sector. Telefoon, email en contactformulier beschikbaar."
                keywords="contact tharros, ferdi licher contact, leiderschapstraining contact, coaching contact, publieke sector training contact, overheid coaching contact, ambtelijk coaching contact, training aanvragen"
                structuredData={contactSchema}
            />
            {/* Featured Image Section */}
            <section className="bg-gradient-to-t from-black/85 to-gold-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
                                Contact
                            </h1>
                            <p className="mb-6 text-2xl text-slate-600">
                                Ferdi Licher
                            </p>
                            <p className="mb-8 text-xl font-light leading-loose">
                                Voor deelname aan activiteiten of verkennen van
                                samenwerkingsmogelijkheden kunt u contact
                                opnemen.
                            </p>
                            <div className="flex items-center space-x-10 text-slate-600">
                                <div className="flex items-center">
                                    <Briefcase className="mr-3 size-4" />
                                    <span>Tharros training en coaching</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-xl shadow-2xl">
                                <img
                                    src="images/contact.jpeg"
                                    alt="Ferdi Licher - Senior Leadership Coach & Trainer"
                                    className="h-96 w-full object-cover grayscale"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mb-24 bg-gray-50 py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="mb-8 text-4xl font-semibold text-gold-600">
                                    Contactgegevens
                                </h2>
                                <p className="mb-10 text-lg font-light leading-relaxed text-gray-600">
                                    U kunt contact opnemen.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <Building2 className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-600">
                                            Ferdi Licher
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Oprichter Tharros training en
                                            coaching
                                        </p>
                                        <p className="font-light text-gray-600">
                                            Moderator, trainer en coach
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 hover:rounded-lg hover:bg-black/5 hover:p-1">
                                    <a
                                        href="tel:+31615017524"
                                        className="flex w-full justify-start gap-6 text-start text-gray-600 transition-colors hover:text-slate-600"
                                    >
                                        <div className="rounded-full bg-slate-100 p-4">
                                            <Phone className="h-6 w-6 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold text-slate-600">
                                                Telefoon
                                            </h3>
                                            <p className="font-light text-gray-600">
                                                <a
                                                    href="tel:+31615017524"
                                                    className="text-gray-600 transition-colors hover:text-slate-600"
                                                >
                                                    +31 (0)6 12345678
                                                </a>
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex items-start space-x-6 hover:rounded-lg hover:bg-black/5 hover:p-1">
                                    <a
                                        href="mailto:f.licher1@chello.nl?subject=Contact%20via%20Tharros%20Website"
                                        className="flex w-full justify-start gap-6 text-start text-gray-600 transition-colors hover:font-medium hover:text-slate-600"
                                    >
                                        <div className="rounded-full bg-slate-100 p-4">
                                            <Mail className="h-6 w-6 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold text-slate-600">
                                                E-mail
                                            </h3>
                                            <p className="font-light text-gray-600">
                                                <a
                                                    href="mailto:f.licher1@chello.nl?subject=Contact%20via%20Tharros%20Website"
                                                    className="text-gray-600 transition-colors hover:font-medium hover:text-slate-600"
                                                >
                                                    f.licher1@chello.nl
                                                </a>
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <MapPin className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-600">
                                            Locatie
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Nederland
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-none bg-white p-10 shadow-sm">
                            <h3 className="mb-8 text-3xl font-semibold text-slate-600">
                                Verstuur een Bericht
                            </h3>

                            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-sm font-medium text-gray-700"
                                        >
                                            Naam *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                            placeholder="Uw volledige naam"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-sm font-medium text-gray-700"
                                        >
                                            E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                            placeholder="uw.email@organisatie.nl"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="organization"
                                            className="mb-3 block text-sm font-medium text-gray-700"
                                        >
                                            Organisatie
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                            placeholder="Uw organisatie"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-3 block text-sm font-medium text-gray-700"
                                        >
                                            Telefoon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                            placeholder="06-12345678"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="interest"
                                        className="mb-3 block text-sm font-medium text-gray-700"
                                    >
                                        Interesse in
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                    >
                                        <option value="">
                                            Selecteer een programma
                                        </option>
                                        <option value="lecture">
                                            Lecture, Over ambtelijke vakmanschap
                                        </option>
                                        <option value="comenius">
                                            Comenius, Leergang Emerging leaders
                                            in de publieke sector
                                        </option>
                                        <option value="ABR">
                                            Algemene Bestuursdienst Rijk,
                                            Oefenen met de rol van
                                            politiek-ambtelijk adviseur
                                        </option>
                                        <option value="BZK">
                                            Ministerie BZK, Leergang Groeien in
                                            persoonlijk leiderschap
                                        </option>
                                        <option value="workshops">
                                            Workshops, Maatwerk en moderatie
                                            voor teams en organisaties
                                        </option>
                                        <option value="coaching">
                                            Individuele Trajecten, Persoonlijke
                                            coaching en mentorschap
                                        </option>
                                        <option value="other">
                                            Anders / Algemene vraag
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-3 block text-sm font-medium text-gray-700"
                                    >
                                        Bericht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-none border border-slate-900/20 p-3 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                        placeholder="'Schrijf hier uw vraag of opmerking..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full transform items-center justify-center rounded-xl bg-gradient-to-t from-black/85 to-gold-900 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:-translate-y-1 hover:bg-gradient-to-t hover:from-slate-500/85 hover:to-slate-900 hover:shadow-md"
                                >
                                    <Send className="mr-3 h-5 w-5" />
                                    Verstuur Bericht
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
