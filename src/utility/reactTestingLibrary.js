import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const AllTheProviders = ({ children }) => {
  return children;
};

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired
};

const defaultRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

const TabletProviders = ({ children }) => {
  return children;
};

TabletProviders.propTypes = {
  children: PropTypes.node.isRequired
};

const renderTablet = (ui, options) => render(ui, { wrapper: TabletProviders, ...options });

export * from "@testing-library/react";

export { fireEvent, waitForElement } from "@testing-library/react";

export { defaultRender as render, renderTablet };
