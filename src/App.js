import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cartSlice";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const shouldShowNotification = useSelector(
    (state) => state.ui.notification.shouldShowNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    if (notification && notification.status === "success") {
      const timer = setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, dispatch]);

  return (
    <>
      {shouldShowNotification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
