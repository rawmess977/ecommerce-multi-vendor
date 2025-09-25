import { useRoutes} from 'react-router-dom'

const Router = ({allRoutes}) => {
  console.log('Router received allRoutes:', allRoutes);
  const routes = useRoutes([...allRoutes]);
  return routes;
}
export default Router;