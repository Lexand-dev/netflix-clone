import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

const useMoviesList = () => {
  const { data, error } = useSwr('/api/movies', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useMoviesList };
