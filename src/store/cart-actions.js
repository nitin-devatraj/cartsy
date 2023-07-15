import { cartActions } from "./cartSlice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatchFn) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cartsy-eb97e-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Fetching cart data failed !");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatchFn(
        cartActions.replaceCart({
          items: cartData.items ?? [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatchFn(
        uiActions.showNotification({
          status: "error",
          title: "Error !",
          message: "Fetching cart data failed",
          shouldShowNotification: true,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatchFn) => {
    dispatchFn(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
        shouldShowNotification: true,
      })
    );

    try {
      const response = await fetch(
        "https://cartsy-eb97e-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed !");
      }

      dispatchFn(
        uiActions.showNotification({
          status: "success",
          title: "Success !",
          message: "Sent cart data successfully",
          shouldShowNotification: true,
        })
      );
    } catch (error) {
      dispatchFn(
        uiActions.showNotification({
          status: "error",
          title: "Error !",
          message: "Sending cart data failed",
          shouldShowNotification: true,
        })
      );
    }
  };
};
