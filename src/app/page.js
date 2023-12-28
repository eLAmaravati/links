import Image from 'next/image'
import data from '/data.json';
import Footer from '@/components/Footer';
import ShopLinks from '@/components/Shop';
import SocialLinks from '@/components/Social';
import WebsiteLinks from '@/components/Website';
import BottomNavbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <BottomNavbar/>
    <main className="flex min-h-screen flex-col items-center py-24 px-12 lg:px-24">

      <figure className='mb-5 aspect-square rounded-full border-2 border-white/50 bg-white/10 p-2 backdrop-blur-lg'>
        <Image src='/foto-langit.webp' height={ 200 } width={ 200 } alt='Langit Amaravati' className='rounded-full' />
      </figure>
      <h1 className='text-center font-bold text-3xl text-neutral-300'>{ data.name }</h1>
      <p className='text-neutral-500 text-sm text-center mt-2'>Aktivis ngoding barbar yang punya love-hate relationship dengan JavaScript.</p>

      <section className='py-10' id='website'>
        <h2 className="text-neutral-300 text-xl text-center uppercase tracking-widest">Website:</h2>
        <WebsiteLinks />
      </section>

      <section className="py-10" id='shop'>
        <h2 className="text-neutral-300 text-xl text-center uppercase tracking-widest mt-14">Toko Online:</h2>
        <ShopLinks />
      </section>

      <section className="py-10" id='social'>
        <h2 className="text-neutral-300 text-xl text-center uppercase tracking-widest mt-14">Sosial Media:</h2>
        <SocialLinks />
      </section>

    </main>
    <Footer />
    </>
  )
}
