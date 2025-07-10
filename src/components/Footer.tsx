import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Company Info */}
                    <div>
                        <Link to='/' className='flex items-center space-x-3'>
                            <img
                                src='Logo_tharros_transparent01.png'
                                alt='logo Tharros, Training & Coaching'
                                className='w-[260px] mb-3'
                            />
                        </Link>
                        <p className='text-gray-300 leading-relaxed mb-6 font-light'>
                            Specialist in leiderschap en ambtelijk vakmanschap
                            voor de publieke sector. Wij ontwikkelen de leiders
                            van morgen door middel van praktijkgerichte training
                            en coaching programma's.
                        </p>
                        <div className='mt-24'>
                            <h3 className='text-2xl font-semibold mb-8'>
                                Contact
                            </h3>
                            <div className='space-y-6'>
                                <div className='flex items-start space-x-3'>
                                    <MapPin className='h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0' />
                                    <div>
                                        <p className='text-gray-300 font-medium'>
                                            Ferdi Licher
                                        </p>
                                        <a
                                            href='https://www.google.com/maps/search/?api=1&query=Vossiusstraat+30-2,+1071AG+Amsterdam'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-gray-400 text-sm hover:text-slate-400 transition-colors'
                                        >
                                            Vossiusstraat 30-2
                                            <br />
                                            1071AG Amsterdam
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <Phone className='h-5 w-5 text-slate-400 flex-shrink-0' />
                                    <a
                                        href='tel:+31615017524'
                                        className='text-gray-300  hover:text-slate-600  transition-colors'
                                    >
                                        +31 (6) 150 175 24
                                    </a>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <Mail className='h-5 w-5 text-slate-400 flex-shrink-0' />
                                    <a
                                        href='mailto:f.licher1@chello.nl?subject=Contact%20via%20Tharros%20Website'
                                        className='text-gray-300 hover:text-slate-600  transition-colors '
                                    >
                                        f.licher1@chello.nl
                                    </a>
                                </div>
                                <div className='flex space-x-4'>
                                    <a
                                        href='https://www.linkedin.com/in/ferdi-licher-20456313/#'
                                        className='text-gray-400 hover: hover:text-slate-600 transition-colors inline-flex items-end'
                                        aria-label='LinkedIn'
                                        target='new'
                                    >
                                        <Linkedin className='siz3-8 mt-3 text-gray-300 inline ' />{' '}
                                        <span className='ml-3 text-white'>
                                            LinkedIn Profile
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-2xl font-semibold mb-8'>
                            Onze Diensten
                        </h3>
                        <ul className='space-y-3'>
                            <li>
                                <a
                                    href='/'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/tharros'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Tharros
                                    </span>
                                    <br />
                                    Moed en zelfvertrouwen Leergang Emerging
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/ferdi-licher'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Ferdi Licher
                                    </span>
                                    <br />
                                    Moderator, trainer en coach
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/lecture'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Lecture
                                    </span>
                                    <br />
                                    Over ambtelijke vakmanschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/comenius'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Comenius
                                    </span>
                                    <br />
                                    Leergang Emerging leaders in de publieke
                                    sector
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/abr'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        ABR – Algemene Bestuursdienst Rijk
                                    </span>
                                    <br />
                                    Oefenen met de rol van politiek-ambtelijk
                                    adviseur
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/ministerie-BZK'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Ministerie BZK
                                    </span>
                                    <br />
                                    Leergang Groeien in persoonlijk leiderschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/workshops'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Workshops
                                    </span>
                                    <br />
                                    Maatwerk en moderatie voor teams en
                                    organisaties
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/coaching'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>
                                        Individuele Trajecten
                                    </span>
                                    <br />
                                    Persoonlijke coaching en mentorschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/contact'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-12 pt-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <p className='text-gray-400 text-sm font-light'>
                                © {new Date().getFullYear()} Tharros Training &
                                Coaching. Alle rechten voorbehouden.
                            </p>
                        </div>
                        <div className='text-gray-400 text-md font-light flex flex-col gap-2'>
                            <p>KvK: 97556947 | BTW: NL005277464B14</p>
                            <p>IBAN: NL24INGB0114748454</p>
                            <p>
                                {' '}
                                <Link
                                    to='/'
                                    className='flex items-center space-x-3'
                                >
                                    tharros-trainingcoaching.nl
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
