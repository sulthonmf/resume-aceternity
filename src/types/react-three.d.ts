// src/types/react-three.d.ts
import {
  AmbientLightProps,
  DirectionalLightProps,
  PointLightProps,
  Object3DNode,
} from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: AmbientLightProps;
      directionalLight: DirectionalLightProps;
      pointLight: PointLightProps;
      threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
  }
}
