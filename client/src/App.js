import './assets/App.css';

import Router from './router/index'
import { useToast } from '@chakra-ui/react'

function App() {
  const toast = useToast()
  window.toast = toast;
  return (
    <>
      <Router />
    </>
  );
}

export default App;
