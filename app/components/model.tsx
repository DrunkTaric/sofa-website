import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage, useGLTF } from "@react-three/drei"

export default function Model() {
    const { scene } = useGLTF('/sofa.glb')
    return (
        <Canvas className="mt-0 mb-auto w-full max-h-[20re]" style={{display: "flex"}}>
          <PresentationControls>
            <Stage>
              <primitive object={scene}/>
            </Stage>
          </PresentationControls>
        </Canvas>
    )
}