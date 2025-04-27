const data = await fetch("https://admin.refabry.com/api/all/product/get")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    return data.data;
  })
  .then((data) => {
    return data.data;
  });

export default data;
