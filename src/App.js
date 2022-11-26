import marker from './marker.patt';
import asset from './asset.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false;"
        loading-screen="enabled: false;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;"
        id="scene"
        embedded
        gesture-detector
      >
        <a-marker
          id="animated-marker"
          type="pattern"
          preset="custom"
          url={marker}
          raycaster="objects: .clickable"
          emitevents="true"
          cursor="fuse: false; rayOrigin: mouse;"
          id="markerA"
        >
          <a-image
            src={asset}
            scale="1 1 1"
            class="clickable"
            rotation="-90 0 0"
            gesture-handler
          ></a-image>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
