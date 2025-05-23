import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

// Enhanced full-screen background with a deep space gradient
const StyledCanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at 60% 40%, #18244e 0%, #0a0e1a 70%, #020204 100%);
  overflow: hidden;
  z-index: -1;
`;

// Helper to generate star colors (white, blue, pink, yellow)
function generateStarColors(count) {
  const palette = [
    [1, 1, 1],       // white
    [0.7, 0.8, 1],   // blue-white
    [1, 0.85, 0.7],  // yellow-white
    [1, 0.7, 0.95],  // pinkish
  ];
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const color = palette[Math.floor(Math.random() * palette.length)];
    colors.set(color, i * 3);
  }
  return colors;
}

const Stars = (props) => {
  const ref = useRef();
  const STAR_COUNT = 8000;

  // Generate positions and colors for the stars
  const [data] = useState(() => ({
    positions: random.inSphere(new Float32Array(STAR_COUNT * 3), { radius: 1.8 }),
    colors: generateStarColors(STAR_COUNT),
  }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 14;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points
        ref={ref}
        positions={data.positions}
        colors={data.colors}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
