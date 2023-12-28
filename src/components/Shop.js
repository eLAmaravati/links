import data from '/data.json';
import { IconComponents } from './Icon';

export default function ShopLinks() {
  return (
    <ul className='mt-5 w-[80vw] lg:max-w-screen-md'>
      { data.shop.map((site, index) => {
        const Icon = IconComponents[site.icon];
        return (
          <li key={ index } className='relative mb-5 flex h-16 items-center rounded-full border-2 border-white/20 bg-white/10 p-2 shadow-white/30 backdrop-blur-md transition duration-300 hover:bg-neutral-800/20'>
            <span className='absolute flex size-12 items-center justify-center rounded-full bg-white/10 text-neutral-300'>
              { Icon && <Icon className='size-6' /> }
            </span>
            <a href={ site.url } className='mx-auto w-6/12 text-center text-neutral-200 after:absolute after:inset-0 after:z-10' target="_blank" rel="noopener noreferrer">
              { site.title }
            </a>
          </li>
        );
      }) }
    </ul>
  )
}