import fetcher from '@/lib/fetcher';
import Swr from 'swr';

const useFavorites = () => {
  const { 
    data, 
    error,
    isLoading, 
    mutate
  } = Swr('/api/favorites', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export default useFavorites;