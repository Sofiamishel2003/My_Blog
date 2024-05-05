import { TokenProvider } from './hooks/useToken'
import { NavigationProvider  } from './hooks/HOC/useNavigate'
import Pages from './hooks/HOC/Admin';

const App = () => {
  return (
    <TokenProvider>
      <NavigationProvider>
        <Pages />
      </NavigationProvider>
    </TokenProvider>
  );
};

export default App;
