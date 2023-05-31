import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

test('logo should load on rendering header', () => {

  // Load header
  const header = render(
    <StaticRouter>

      <Provider store={store}>
        <Header />
      </Provider>

    </StaticRouter>

  )
  const logo = header.getByTestId('logo');
  console.log(logo.src);

  expect(logo.src).toBe('http://localhost/dummy.png');

})


test('online status should green on rendering header', () => {

  // Load header
  const header = render(
    <StaticRouter>

      <Provider store={store}>
        <Header />
      </Provider>

    </StaticRouter>

  )
  const onlineStatus = header.getByTestId('online-status');
  console.log(onlineStatus);



  expect(onlineStatus.innerHTML).toBe("Status: 🟢");

})


test('cart should be 0 on rendering header', () => {

  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>

  )
  const cart = header.getByTestId('cart');
  console.log(cart);



  expect(cart.innerHTML).toBe('Cart - 0');

})