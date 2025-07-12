import { useState } from 'react';
import { SEO } from '@/components/SEO';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Building2,
    Clock,
    CheckCircle,
} from 'lucide-react';

const Contact = () => {
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
                email: 'info@tharros-trainingcoaching.nl',
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                organization: '',
                phone: '',
                interest: '',
                message: '',
            });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
                <div className="text-center">
                    <CheckCircle className="mx-auto mb-6 h-16 w-16 text-slate-500" />
                    <h1 className="mb-4 text-3xl font-semibold text-slate-800">
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
                title="Contact - Neem contact op"
                description="Neem contact op met Tharros Training & Coaching voor meer informatie over onze leiderschapsprogramma's en coaching services voor de publieke sector."
                keywords="contact, tharros training coaching, leiderschapstraining contact, coaching contact, publieke sector training"
                structuredData={contactSchema}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-8 text-5xl font-bold tracking-tight lg:text-6xl">
                            Contact
                        </h1>
                        <p className="mx-auto mb-10 max-w-4xl text-xl font-light text-slate-100">
                            Klaar om de volgende stap te zetten in uw
                            leiderschapsontwikkeling? Neem contact op voor een
                            vrijblijvend gesprek over de mogelijkheden.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="mb-8 text-4xl font-semibold text-slate-800">
                                    Neem Contact Op
                                </h2>
                                <p className="mb-10 text-lg font-light leading-relaxed text-gray-600">
                                    We staan klaar om uw vragen te beantwoorden
                                    en u te helpen bij het vinden van het juiste
                                    programma voor uw ontwikkeling of
                                    organisatie.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <Building2 className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                            Ferdi Licher
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Oprichter & Senior Coach
                                        </p>
                                        <p className="font-light text-gray-600">
                                            Tharros Training & Coaching
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <Phone className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                            Telefoon
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            +31 (0)6 12345678
                                        </p>
                                        <p className="text-sm font-light text-gray-500">
                                            Ma-Vr: 09:00 - 17:00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <Mail className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                            E-mail
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            info@tharros-training.nl
                                        </p>
                                        <p className="text-sm font-light text-gray-500">
                                            We reageren binnen 24 uur
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-slate-100 p-4">
                                        <MapPin className="h-6 w-6 text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-800">
                                            Locatie
                                        </h3>
                                        <p className="font-light text-gray-600">
                                            Nederland
                                        </p>
                                        <p className="text-sm font-light text-gray-500">
                                            Landelijk actief
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="rounded-none border border-slate-200 bg-slate-50 p-8">
                                <div className="mb-4 flex items-center space-x-4">
                                    <Clock className="h-6 w-6 text-slate-600" />
                                    <h3 className="text-lg font-semibold text-slate-800">
                                        Snelle Respons
                                    </h3>
                                </div>
                                <p className="font-light text-slate-700">
                                    We streven ernaar om binnen 24 uur te
                                    reageren op uw aanvraag. Voor spoedeisende
                                    zaken kunt u direct bellen.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-none border border-gray-200 bg-white p-10 shadow-sm">
                            <h3 className="mb-8 text-3xl font-semibold text-slate-800">
                                Verstuur een Bericht
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-8">
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
                                            className="w-full rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
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
                                            className="w-full rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
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
                                            className="w-full rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
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
                                            className="w-full rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
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
                                        className="w-full rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                    >
                                        <option value="">
                                            Selecteer een programma
                                        </option>
                                        <option value="lecture">
                                            Lecture - Programma Doorgroeien in
                                            Leiderschap
                                        </option>
                                        <option value="comenius">
                                            Comenius - Emerging Leaders Leergang
                                        </option>
                                        <option value="ABR">
                                            ABR - Ontwikkelprogramma Leiderschap
                                        </option>
                                        <option value="BZK">
                                            BZK - Programma Doorgroeien in
                                            Leiderschap
                                        </option>
                                        <option value="workshops">
                                            Workshops
                                        </option>
                                        <option value="coaching">
                                            Individuele Coaching & Mentorschap
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
                                        className="w-full resize-none rounded-none border border-gray-300 px-4 py-4 font-light transition-colors focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                        placeholder="Vertel ons over uw situatie, doelen of vragen..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full transform items-center justify-center rounded-none bg-slate-600 px-8 py-5 font-semibold text-white shadow-sm transition-colors duration-200 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-md"
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
