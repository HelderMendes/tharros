import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
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
                        <div className='flex space-x-4'>
                            <a
                                href='https://www.linkedin.com/in/ferdi-licher-20456313/#'
                                className='text-gray-400 hover:text-slate-400 transition-colors'
                                aria-label='LinkedIn'
                                target='new'
                            >
                                <Linkedin className='siz3-8 mt-3 text-gray-300' />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className='text-lg font-semibold mb-8'>Contact</h3>
                        <div className='space-y-6'>
                            <div className='flex items-start space-x-3'>
                                <MapPin className='h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0' />
                                <div>
                                    <p className='text-gray-300 font-medium'>
                                        Ferdi Licher
                                    </p>
                                    <p className='text-gray-400 text-sm'>
                                        Vossiusstraat 30-2
                                    </p>
                                    <p className='text-gray-400 text-sm'>
                                        1071AG Amsterdam
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone className='h-5 w-5 text-slate-400 flex-shrink-0' />
                                <span className='text-gray-300'>
                                    +31.615017524
                                </span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail className='h-5 w-5 text-slate-400 flex-shrink-0' />
                                <span className='text-gray-300'>
                                    f.licher1@chello.nl
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-8'>
                            Onze Diensten
                        </h3>
                        <ul className='space-y-3'>
                            <li>
                                <a
                                    href='/lecture'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    Lecture Programma
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
                                    Leergang Emerging Leaders in de Publieke
                                    Sector
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/abd'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>ABD </span>
                                    <br />
                                    Groei in Persoonlijk Leiderschap (Incompany)
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/bzr'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    <span className='font-semibold'>BZR </span>
                                    <br />
                                    Programma Doorgroeien in Leiderschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/workshops'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    Workshops
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/coaching'
                                    className='text-gray-400 hover:text-slate-400 transition-colors font-light'
                                >
                                    Individuele Coaching en Mentorschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href='//contact'
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
                                © 2025 Tharros Training & Coaching. Alle rechten
                                voorbehouden.
                            </p>
                        </div>
                        <div className='text-gray-400 text-sm font-light'>
                            <p>KvK: 97556947 | BTW: NL005277464B14</p>
                            <p>IBAN: NL24INGB0114748454</p>
                            <p>www.tharros-trainingcoaching.nl</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
