import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';




const useBestDoc = () => {

    const axiosPublic = useAxiosPublic()

    const { refetch, data: AllBestDoctors = [], isPending } = useQuery({
        queryKey: ["AllBestDoctors"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bestDoctors`)
            return res.data
        }

    })
    return [AllBestDoctors, refetch, isPending]
};

export default useBestDoc;