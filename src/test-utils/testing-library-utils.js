import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

const renderWithProvider = (ui, options) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, {
    wrapper: Wrapper,
    ...options
  })
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithProvider as render };

