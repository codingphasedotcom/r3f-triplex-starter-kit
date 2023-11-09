import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";
import SceneBrowser from "./SceneBrowser";

function App() {
  return (
    <SceneBrowser />
    // <Scene />
  );
}

export default App;
