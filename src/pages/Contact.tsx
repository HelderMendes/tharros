import React, { useState } from 'react';
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
            <div className='pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center'>
                <div className='text-center'>
                    <CheckCircle className='h-16 w-16 text-slate-500 mx-auto mb-6' />
                    <h1 className='text-3xl font-semibold text-slate-800 mb-4'>
                        Bedankt voor uw bericht!
                    </h1>
                    <p className='text-lg text-gray-600 mb-6 font-light'>
                        We nemen binnen 24 uur contact met u op.
                    </p>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-slate-500 mx-auto'></div>
                </div>
            </div>
        );
    }

    return (
        <div className='pt-20'>
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-slate-800 to-slate-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <div className='text-center'>
                        <h1 className='text-5xl lg:text-6xl font-bold mb-8 tracking-tight'>
                            Contact
                        </h1>
                        <p className='text-xl text-slate-100 mb-10 max-w-4xl mx-auto font-light'>
                            Klaar om de volgende stap te zetten in uw
                            leiderschapsontwikkeling? Neem contact op voor een
                            vrijblijvend gesprek over de mogelijkheden.
                        </p>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                        {/* Contact Information */}
                        <div className='space-y-10'>
                            <div>
                                <h2 className='text-4xl font-semibold text-slate-800 mb-8'>
                                    Neem Contact Op
                                </h2>
                                <p className='text-lg text-gray-600 leading-relaxed mb-10 font-light'>
                                    We staan klaar om uw vragen te beantwoorden
                                    en u te helpen bij het vinden van het juiste
                                    programma voor uw ontwikkeling of
                                    organisatie.
                                </p>
                            </div>

                            <div className='space-y-8'>
                                <div className='flex items-start space-x-6'>
                                    <div className='bg-slate-100 p-4 rounded-full'>
                                        <Building2 className='h-6 w-6 text-slate-600' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-slate-800 mb-2 text-lg'>
                                            Ferdi Licher
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Oprichter & Senior Coach
                                        </p>
                                        <p className='text-gray-600 font-light'>
                                            Tharros Training & Coaching
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start space-x-6'>
                                    <div className='bg-slate-100 p-4 rounded-full'>
                                        <Phone className='h-6 w-6 text-slate-600' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-slate-800 mb-2 text-lg'>
                                            Telefoon
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            +31 (0)6 12345678
                                        </p>
                                        <p className='text-sm text-gray-500 font-light'>
                                            Ma-Vr: 09:00 - 17:00
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start space-x-6'>
                                    <div className='bg-slate-100 p-4 rounded-full'>
                                        <Mail className='h-6 w-6 text-slate-600' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-slate-800 mb-2 text-lg'>
                                            E-mail
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            info@tharros-training.nl
                                        </p>
                                        <p className='text-sm text-gray-500 font-light'>
                                            We reageren binnen 24 uur
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start space-x-6'>
                                    <div className='bg-slate-100 p-4 rounded-full'>
                                        <MapPin className='h-6 w-6 text-slate-600' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-slate-800 mb-2 text-lg'>
                                            Locatie
                                        </h3>
                                        <p className='text-gray-600 font-light'>
                                            Nederland
                                        </p>
                                        <p className='text-sm text-gray-500 font-light'>
                                            Landelijk actief
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className='bg-slate-50 p-8 rounded-none border border-slate-200'>
                                <div className='flex items-center space-x-4 mb-4'>
                                    <Clock className='h-6 w-6 text-slate-600' />
                                    <h3 className='font-semibold text-slate-800 text-lg'>
                                        Snelle Respons
                                    </h3>
                                </div>
                                <p className='text-slate-700 font-light'>
                                    We streven ernaar om binnen 24 uur te
                                    reageren op uw aanvraag. Voor spoedeisende
                                    zaken kunt u direct bellen.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='bg-white p-10 rounded-none shadow-sm border border-gray-200'>
                            <h3 className='text-3xl font-semibold text-slate-800 mb-8'>
                                Verstuur een Bericht
                            </h3>

                            <form onSubmit={handleSubmit} className='space-y-8'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm font-medium text-gray-700 mb-3'
                                        >
                                            Naam *
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors font-light'
                                            placeholder='Uw volledige naam'
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-medium text-gray-700 mb-3'
                                        >
                                            E-mail *
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors font-light'
                                            placeholder='uw.email@organisatie.nl'
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div>
                                        <label
                                            htmlFor='organization'
                                            className='block text-sm font-medium text-gray-700 mb-3'
                                        >
                                            Organisatie
                                        </label>
                                        <input
                                            type='text'
                                            id='organization'
                                            name='organization'
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors font-light'
                                            placeholder='Uw organisatie'
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='phone'
                                            className='block text-sm font-medium text-gray-700 mb-3'
                                        >
                                            Telefoon
                                        </label>
                                        <input
                                            type='tel'
                                            id='phone'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors font-light'
                                            placeholder='06-12345678'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor='interest'
                                        className='block text-sm font-medium text-gray-700 mb-3'
                                    >
                                        Interesse in
                                    </label>
                                    <select
                                        id='interest'
                                        name='interest'
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors font-light'
                                    >
                                        <option value=''>
                                            Selecteer een programma
                                        </option>
                                        <option value='lecture'>
                                            Lecture - Programma Doorgroeien in
                                            Leiderschap
                                        </option>
                                        <option value='comenius'>
                                            Comenius - Emerging Leaders Leergang
                                        </option>
                                        <option value='abd'>
                                            ABD - Ontwikkelprogramma Leiderschap
                                        </option>
                                        <option value='bzr'>
                                            BZR - Programma Doorgroeien in
                                            Leiderschap
                                        </option>
                                        <option value='workshops'>
                                            Workshops
                                        </option>
                                        <option value='coaching'>
                                            Individuele Coaching & Mentorschap
                                        </option>
                                        <option value='other'>
                                            Anders / Algemene vraag
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium text-gray-700 mb-3'
                                    >
                                        Bericht *
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className='w-full px-4 py-4 border border-gray-300 rounded-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors resize-none font-light'
                                        placeholder='Vertel ons over uw situatie, doelen of vragen...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-5 rounded-none transition-colors duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                >
                                    <Send className='mr-3 h-5 w-5' />
                                    Verstuur Bericht
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
