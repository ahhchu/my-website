import type { TypeProject } from '../types';
import {gknow, claude} from '../assets';

export const projects: TypeProject[] = [
    {
        id: 'proj-1',
        title: 'G-Know',
        description: 'Native IOS app designed for therapists to create, securely store, and share their patient genograms.',
        tags: ['Swift'],
        image: [gknow],
        link: 'https://projects.nmi.cool/2024/nmc/gknow/',
        repo: 'https://github.com/gknowapp/G-Know',
    },
    {
        id: 'proj-2',
        title: 'AI Extension',
        description: 'Integrated an open-source llama model into a browser extension, delivering sustainability insights and eco-friendly recommendations on clothing pages.',
        tags: ['Llama','JavaScript', 'React', 'Python'],
        repo: 'coming soon...',
    },
    {
        id: 'proj-3',
        title: 'Uber Data Analytics',
        description: 'A mobile app that helps users discover and purchase sustainable fashion options.',
        tags: ['Python', 'GCP', 'Mage'],
        repo: 'coming soon...',
    },
    {
        id: 'proj-4',
        title: 'Claude Skill - Prompt Efficiency Coach',
        description: 'A Claude skill designed to help users improve their prompt engineering skills and efficiency.',
        tags: ['Claude', 'Prompt Engineering'],
        image: [claude],
        repo: 'https://github.com/ahhchu/prompt-efficiency-coach',
    },
];