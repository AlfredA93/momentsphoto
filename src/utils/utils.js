import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {  // Look through results from API with reduce()
        return acc.some((accResult) => accResult.id === cur.id)  //Use some() to compare current and new post id's
          ? acc  // if some returns true, then it does not add post to the list of results
          : [...acc, cur];  // if some returns false, it adds post to the list of results
      }, prevResource.results),  // append to current results in State
    }));
  } catch (err) {}
};