
import './App.css';
import store from './store/Store';
import { Provider } from 'react-redux';
import PhotoGallery from './components/photoGallery';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <PhotoGallery/>
    </Provider>
    </div>
  );
}

export default App;
