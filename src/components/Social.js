import data from '/data.json';
import { IconComponents } from './Icon';

export default function SocialLinks() {
  return (
    <div className='group mt-5 flex w-[80vw] flex-wrap justify-center gap-x-5 *:mb-5 lg:max-w-screen-md'>
      { data.socials.map((site, index) => {
        const Icon = IconComponents[site.icon];
        return (
          <a key={ index } href={site.url} className='flex size-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-neutral-300 backdrop-blur-md transition duration-300 hover:bg-neutral-800/20' aria-label={site.title} target="_blank" rel="noopener noreferrer">
            { Icon && <Icon className='size-6' aria-hidden='true' /> }
          </a>
        );
      }) }
    </div>
  )
}