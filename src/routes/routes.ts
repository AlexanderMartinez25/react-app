import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// como no utilizo el webpack, igual no es necesario ya que el nobre viene por defecto

const lazyLayout = lazy(() => import(/*webpackChunkName: "lazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: lazyLayout,
    name: 'lazyLayout'
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]