import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // NEW
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Tharros\nMoed en Zelfvertrouwen', href: '/tharros' },
        {
            name: 'Ferdi Licher\nModerator, Trainer en Coach',
            href: '/ferdi-licher',
        },
        { name: 'Lecture\nOver Ambtelijk Vakmanschap', href: '/lecture' },
        {
            name: 'Comenius\nLeergang Emerging Leaders in de Publieke Sector',
            href: '/comenius',
        },
        {
            name: 'ABR – Algemene Bestuursdienst Rijk\nOefenen met de rol van politiek-ambtelijk adviseur',
            href: '/ABR',
        },
        {
            name: 'Ministerie BZK\nLeergang Groeien in persoonlijk leiderschap',
            href: '/BZK',
        },
        {
            name: 'Workshops\nMaatwerk en moderatie voor teams en organisaties',
            href: '/workshops',
        },
        {
            name: 'Individuele trajecten\nPersoonlijke coaching en mentorschap',
            href: '/coaching',
        },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => location.pathname === href;

    return (
        <>
            <nav
                className={`fixed left-0 right-0 top-0 z-50 border-b border-gray-200/10 bg-white/90 shadow-sm transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className={`flex items-center justify-between transition-all duration-300 ${
                            scrolled ? 'h-14' : 'h-20'
                        }`}
                    >
                        <Link to="/" className="flex space-x-3">
                            <img
                                src="LogoTharros.png"
                                alt="logo Tharros, Training & Coaching"
                                className={`transition-all duration-300 ${scrolled ? 'w-[168px]' : 'w-[240px] pt-2'} `}
                            />
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="hover:border-inset mt-1 rounded-lg border-2 border-transparent p-1 text-gold-950 transition-colors hover:border-slate-600 hover:text-slate-600"
                        >
                            <Menu className="h-10 w-10" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-page overlay menu */}
            <div
                className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="absolute inset-0 bg-[#04293A] py-3">
                    <div className="mx-auto flex h-20 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:border-inset mt-1 rounded-lg border-2 border-transparent p-1 text-slate-600 transition-colors hover:border-slate-600 hover:text-white"
                        >
                            <X className="size-10" />
                        </button>
                    </div>

                    <div className="-mt-8 flex h-full flex-col items-center justify-start md:-mt-20 md:justify-center">
                        <nav className="text-center">
                            <ul className="space-y-2 text-gold-200 md:space-y-8">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-md block pb-2 text-center font-semibold leading-tight transition-all duration-300 hover:text-[#b67716] md:text-2xl ${
                                                isActive(item.href)
                                                    ? 'font-light text-slate-800'
                                                    : 'text-gold-50'
                                            }`}
                                        >
                                            {item.name.includes('\n') ? (
                                                <span>
                                                    <span className="block">
                                                        {
                                                            item.name.split(
                                                                '\n'
                                                            )[0]
                                                        }
                                                    </span>
                                                    <span className="block font-extralight">
                                                        {
                                                            item.name.split(
                                                                '\n'
                                                            )[1]
                                                        }
                                                    </span>
                                                </span>
                                            ) : (
                                                item.name
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mt-6 text-center md:mt-16">
                            <div className="mx-auto mb-6 flex max-w-[65%] items-center justify-center space-x-3">
                                <Link
                                    to="/"
                                    className="flex items-center space-x-3"
                                >
                                    <img
                                        src="TharrosLogoNegatief.png"
                                        alt="logo Tharros, Training & Coaching"
                                        className="max-w-[300px]"
                                    />
                                </Link>
                            </div>
                            <p className="mx-auto max-w-[90%] max-w-md px-4 text-lg font-light text-[#b67716]">
                                Leiderschap en ambtelijk vakmanschap in de
                                publieke sector
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
