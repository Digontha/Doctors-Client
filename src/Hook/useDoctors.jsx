import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useDoctors = () => {
    const axiosPublic = useAxiosPublic()

    const { refetch, data: Doctors = [], isPending } = useQuery({
        queryKey: ["Doctors"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/doctors`)
            return res.data
        }

    })
    return [Doctors, refetch, isPending]
};

export default useDoctors;