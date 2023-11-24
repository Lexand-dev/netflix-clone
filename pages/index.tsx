import { useMoviesList } from '@/hooks/useMoviesList';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { Inter } from 'next/font/google';

import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import useFavorites from '@/hooks/useFavorites';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,   
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { movies } = useMoviesList();
  const { data: favorites } = useFavorites();
  console.log(favorites);

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies}/>
        <MovieList title='My List' data={favorites}/>
      </div>
    </>
  )
}
