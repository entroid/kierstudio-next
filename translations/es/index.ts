import { common } from './common';
import { hero } from './hero';
import { services } from './services';
import { contact } from './contact';
import { partners } from './partners';
import { about } from './about';
import { projects } from './projects';
import { process } from './process';
import { testimonials } from './testimonials';
import { accounting } from './accounting';
import { saludybienestar } from './saludybienestar';
import { projectsData } from './projectsData';
import { presentacion } from './presentacion';
import { consent } from './consent';
import { legal } from './legal';

export const es = {
    // Common elements (SEO, nav, footer, controls)
    seo: common.seo,
    nav: common.nav,
    footer: common.footer,
    controls: common.controls,
    consent,
    legal,

    // Page sections
    hero,
    services,
    cta: contact,
    partners,
    about,
    projects,
    projectsData,
    process,
    testimonials,

    // Landing pages
    accounting,
    saludybienestar,
    presentacion,
};
