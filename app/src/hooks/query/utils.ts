import qs from "query-string";

export const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newurl = "http://localhost:3000/page/" + qsValue;
  window.history.pushState({ path: newurl }, "", newurl);
};

export const getQueryStringValue = (
  key: string,
  queryString: string = window.location.search
) => {
  const values = qs.parse(queryString);
  return values[key];
};

export const setQueryStringValue = (
  key: string,
  value: string,
  queryString: string = window.location.search
) => {
  const values = qs.parse(queryString);
  const newQsValue = qs.stringify({
    ...values,
    [key]: value,
  });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};
