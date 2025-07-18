import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-24 bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="Logo_tharros_transparent01.png"
                                alt="logo Tharros, Training & Coaching"
                                className="mb-3 w-[260px]"
                            />
                        </Link>
                        <p className="mb-6 font-light leading-relaxed text-gray-300">
                            Training en Coaching op het gebied van leiderschap
                            en ambtelijk vakmanschap in de publieke sector
                        </p>
                        <div className="mt-24">
                            <h3 className="mb-8 text-2xl font-semibold">
                                Contact
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                                    <div>
                                        <p className="font-medium text-gray-300">
                                            Ferdi Licher
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Vossiusstraat+30-2,+1071AG+Amsterdam"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 transition-colors hover:text-slate-400"
                                        >
                                            Vossiusstraat 30-2
                                            <br />
                                            1071AG Amsterdam
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="tel:+31615017524"
                                        className="text-gray-300 transition-colors hover:text-slate-600"
                                    >
                                        <Phone className="mr-4 inline h-5 w-5" />
                                        +31 (6) 150 175 24
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="mailto:f.licher1@chello.nl?subject=Contact%20via%20Tharros%20Website"
                                        className="text-gray-300 transition-colors hover:text-slate-600"
                                    >
                                        <Mail className="mr-4 inline h-5 w-5 flex-shrink-0" />
                                        f.licher1@chello.nl
                                    </a>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/ferdi-licher-20456313/#"
                                        className="hover: inline-flex items-end text-gray-400 transition-colors hover:text-slate-600"
                                        aria-label="LinkedIn"
                                        target="new"
                                    >
                                        <Linkedin className="mt-3 inline size-5" />
                                        <span className="-mb-1 ml-3">
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
                        <h3 className="mb-8 text-2xl font-semibold">Menu</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/tharros"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Tharros
                                    </span>
                                    <br />
                                    Moed en zelfvertrouwen Leergang Emerging
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ferdi-licher"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Ferdi Licher
                                    </span>
                                    <br />
                                    Moderator, trainer en coach
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/lecture"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Lecture
                                    </span>
                                    <br />
                                    Over ambtelijke vakmanschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/comenius"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Comenius
                                    </span>
                                    <br />
                                    Leergang Emerging leaders in de publieke
                                    sector
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/abr"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Algemene Bestuursdienst Rijk
                                    </span>
                                    <br />
                                    Oefenen met de rol van politiek-ambtelijk
                                    adviseur
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ministerie-BZK"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Ministerie BZK
                                    </span>
                                    <br />
                                    Leergang Groeien in persoonlijk leiderschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/workshops"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Workshops
                                    </span>
                                    <br />
                                    Maatwerk en moderatie voor teams en
                                    organisaties
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/coaching"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    <span className="font-semibold">
                                        Individuele Trajecten
                                    </span>
                                    <br />
                                    Persoonlijke coaching en mentorschap
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="font-light text-gray-400 transition-colors hover:text-slate-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <p className="text-sm font-light text-gray-400">
                                © {new Date().getFullYear()} Tharros Training &
                                Coaching. Alle rechten voorbehouden.
                            </p>
                        </div>
                        <div className="text-md flex flex-col gap-2 font-light text-gray-400">
                            <p>KvK: 97556947 | BTW: NL005277464B14</p>
                            <p>IBAN: NL24INGB0114748454</p>
                            <p>
                                {' '}
                                <Link
                                    to="/"
                                    className="flex items-center space-x-3"
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
