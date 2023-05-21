export const filterData = (text, restaurant) => {
  const data = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(text.toLowerCase())
  );
  return data;
};
