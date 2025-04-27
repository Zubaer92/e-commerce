import Products from "./components/Products";

const posData = async (info) => {
  try {
    const response = await fetch(
      "https://admin.refabry.com/api/public/order/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
    alert(data.message);
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
export default posData;
