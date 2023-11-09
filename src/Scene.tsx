import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <>
    <OrbitControls makeDefault />
    <ambientLight position={[2.94,-1.06,5.36]} visible={true} />
      <directionalLight intensity={-6.68} position={[0,2.22,-5.5]} visible={true} castShadow={true} receiveShadow={false} />
      <directionalLight intensity={1.02} position={[0,2.32,7.2]} visible={true} castShadow={true} />
      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
    
  );
}