import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

const useMoviesList = () => {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export { useMoviesList };
