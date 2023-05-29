import { useQuery } from "react-query";
import { URL } from "../api/index";
import axios from "axios";
import authHeader from "../services/auth/authHeader";

const fetchData = async () => {
  const response = await axios.get(
    URL + "/get_ordered_items_or_change status/null/",
    authHeader()
  );
  return response.data;
};

export const useVendorData = (options = {}) => {
  const defaultOptions = {
    cacheTime: 5000,
    staleTime: 6000,
    refetchOnMount: true,
    refetchOnWindowFocus: "never",
    refetchIntervalInBackground: true,
    enabled: false,
  };

  const queryOptions = { ...defaultOptions, ...options };

  return useQuery("vendors", fetchData, {
    ...queryOptions,
    select: (data) => {
      const vendors = data.map((vendor) => vendor.data);
      return vendors;
    },
  });
};
