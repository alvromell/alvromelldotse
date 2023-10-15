export const PERSONAL_INFO = {
    name: 'Alv Romell',
    title: "Alv Romell's home page",
    contact: 'mailto:alvromell@gmail.com'
} as const;

export const ROUTES = [
    {
        href: '/',
        label: 'Home'
    }, 
    {
        href: '/photography',
        label: 'Photography'
    }
] as const;

// Icons from https://icon-sets.iconify.design/
export const SOCIAL = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/alvsphotos/',
        icon: 'mdi:instagram'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/alvromell/',
        icon: 'mdi:linkedin'
    },
    {
        label: 'Email',
        href: PERSONAL_INFO.contact,
        icon: 'mdi:email'
    }
] as const;
