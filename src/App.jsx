import { AuthProvider } from '../src/hooks/authProvider.jsx'
import { NavigationProvider  } from './hooks/HOC/useNavigate'
import Pages from './hooks/HOC/Admin';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <AuthProvider>
      <NavigationProvider>
        <Pages />
      </NavigationProvider>
    </AuthProvider>

  );
};

export default App;
