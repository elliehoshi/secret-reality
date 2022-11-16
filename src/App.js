import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
      >
        <a-text
          value="This content will always face you."
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 37.87598° N; longitude: 122.25882° W;"
        ></a-text>
        <a-camera gps-camera rotation-reader> </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
