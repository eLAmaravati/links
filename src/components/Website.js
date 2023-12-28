import data from '/data.json';
import { IconComponents } from './Icon';

export default function WebsiteLinks() {
return (
    <ul className='mt-5 group w-[80vw] lg:max-w-screen-md'>
      { data.website.map((site, index) => {
        const Icon = IconComponents[site.icon];
        return (
          <li key={ index } className='relative mb-5 flex cursor-pointer items-center gap-5 rounded-full border-2 border-white/20 bg-white/10 p-3 shadow-white/30 backdrop-blur-md transition duration-300 hover:bg-neutral-800/20'>
            <span className='text-neutral-300 rounded-full bg-white/10 size-12 flex justify-center items-center'>
              { Icon && <Icon className='size-6' /> }
            </span>
            <a href={ site.url } className='text-neutral-200 text-center absolute left-1/2 -translate-x-1/2 size-full' target="_blank" rel="noopener noreferrer">
              { site.title }
            </a>
          </li>
        );
      }) }
    </ul>
  );
}