import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceBlockProps {
    title: string;
    subtitle?: string;
    intro: string;
    href: string;
    image?: string;
    logo?: React.ReactNode;
    featured?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
    title,
    subtitle,
    intro,
    href,
    image,
    logo,
    featured = false,
}) => {
    return (
        <Link
            to={href}
            className={`group block bg-white rounded-none border border-gray-200 hover:border-gold-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                featured ? 'ring-2 ring-gold-400' : ''
            }`}
        >
            {image && (
                <div className='h-48 overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                </div>
            )}

            <div className='p-8'>
                {logo && <div className='mb-6 flex justify-center'>{logo}</div>}

                <h3 className='text-2xl font-semibold text-gold-800 mb-2 group-hover:text-gold-600 transition-colors'>
                    {title}
                </h3>

                {subtitle && (
                    <h4 className='text-sm font-medium text-slate-600 mb-4 uppercase tracking-wider'>
                        {subtitle}
                    </h4>
                )}

                <p className='text-gray-700 leading-relaxed mb-6 font-semilight'>
                    {intro}
                </p>

                <div className='flex items-center text-gold-600 font-medium group-hover:text-gold-800 transition-colors'>
                    <span>Meer informatie</span>
                    <ArrowRight className='ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform' />
                </div>
            </div>
        </Link>
    );
};

export default ServiceBlock;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

// interface ServiceBlockProps {
//     title: string;
//     subtitle?: string;
//     intro: string;
//     href: string;
//     image?: string;
//     logo?: React.ReactNode;
//     featured?: boolean;
// }

// const ServiceBlock: React.FC<ServiceBlockProps> = ({
//     title,
//     subtitle,
//     intro,
//     href,
//     image,
//     logo,
//     featured = false,
// }) => {
//     return (
//         <Card
//             className={`group hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
//                 featured ? 'ring-2 ring-slate-400' : ''
//             }`}
//         >
//             {image && (
//                 <div className='h-48 overflow-hidden'>
//                     <img
//                         src={image}
//                         alt={title}
//                         className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
//                     />
//                 </div>
//             )}

//             <CardHeader className='pb-4'>
//                 {logo && <div className='mb-4 flex justify-center'>{logo}</div>}

//                 <CardTitle className='text-xl text-slate-800 group-hover:text-slate-600 transition-colors'>
//                     {title}
//                 </CardTitle>

//                 {subtitle && (
//                     <Badge variant='slate-outline' className='w-fit'>
//                         {subtitle}
//                     </Badge>
//                 )}
//             </CardHeader>

//             <CardContent className='pt-0'>
//                 <CardDescription className='text-gray-600 leading-relaxed mb-6 font-light'>
//                     {intro}
//                 </CardDescription>

//                 <Button
//                     asChild
//                     variant='ghost'
//                     className='p-0 h-auto text-slate-600 hover:text-slate-800'
//                 >
//                     <Link to={href} className='flex items-center'>
//                         <span>Meer informatie</span>
//                         <ArrowRight className='ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform' />
//                     </Link>
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// };

// export default ServiceBlock;
