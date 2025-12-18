import { common } from './common';
import { hero } from './hero';
import { services } from './services';
import { contact } from './contact';
import { partners } from './partners';
import { about } from './about';
import { projects } from './projects';
import { process } from './process';
import { testimonials } from './testimonials';

export const es = {
    // Common elements (SEO, nav, footer, controls)
    seo: common.seo,
    nav: common.nav,
    footer: common.footer,
    controls: common.controls,

    // Page sections
    hero,
    services,
    cta: contact,
    partners,
    about,
    projects,
    process,
    testimonials,
};
