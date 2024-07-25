import { Suspense , useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload , useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight instensity={0.15} 
      groundColor="black"/>
      <pointLight intensity={13} />   
      <spotLight
        position={[-20 , 50, 10]}
        angle={0.12}
        penumbra={1.5}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}

        />

      <primitive
      object={computer.scene}
      scale={isMobile ? 0.35 :  0.73}
      position={isMobile ? [ 0 , -1.5, -0.5] : [ 0, -2.85, -1.5]}
      rotation= {isMobile ? [0, -0.2, -0.1,] : [-0.01, -0.2, -0.1]}
      /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [ isMobile, setIsMobile] = useState(false);


useEffect(() => { //add a listener for chamnges on screen size
  const mediaQuery = window.matchMedia('(max-width: 500px)');

setIsMobile(mediaQuery.matches); // set initial value of the isMobile variable
const handleMediaQueryChange = (event) => {setIsMobile(event.matches);//define callback function to handle changes on MQs and adds listener for change on MQs
}
mediaQuery.addEventListener('change', handleMediaQueryChange);
//Remove listener when comp is unmounted!!! this  can break the effect
return () => {
  mediaQuery.removeEventListener('change' , handleMediaQueryChange);
}
},[])


  return (
    <Canvas
    style={{ userSelect: 'auto' }}
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true}}
    >
    <Suspense fallback={<CanvasLoader/>}>
    <OrbitControls
    enableZoom={false}
    maxPolarAngle={Math.PI / 2} 
    minPolarAngle={Math.PI / 2} 
    />
      <Computers isMobile={isMobile}/>
    </Suspense>
    <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas