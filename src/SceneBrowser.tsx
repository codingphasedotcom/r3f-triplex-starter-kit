import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "./Scene";
import "./App.css";

function SceneBrowser() {
  return (
    <Canvas
      camera={{
        position: [3, 3, -5],
        fov: 75,
      }}
    >
      <Scene />
    </Canvas>
  );
}

export default SceneBrowser;


