<script>
    import * as THREE from "three";
    import * as SC from "svelte-cubed";
    import {testVec, testVec2} from "../tools.js"
    import { CylinderGeometry } from "three";
</script>

<SC.Canvas background={new THREE.Color('seagreen')}>
    <SC.AmbientLight
      color={new THREE.Color('white')}
      intensity={.5}
    />  
    <SC.DirectionalLight
      color={new THREE.Color('white')}
      intensity={.75}
      position={[10, 10, 10]}
    />

    <!-- MESHES -->
     <SC.Mesh
     geometry={new THREE.CylinderGeometry}
     material={new THREE.MeshStandardMaterial({
        color: new THREE.Color('salmon')
      })}
    position = {testVec2}

    />

    <SC.Mesh
    geometry={new THREE.CylinderGeometry()}
     material={new THREE.MeshStandardMaterial({
       color: new THREE.Color('blue')
     })}
     position = {testVec}
   />

  
    <!-- CAMERA -->
    <SC.PerspectiveCamera near={1} far={100} fov={55}>
  
    </SC.PerspectiveCamera>
        <SC.OrbitControls />
  
  
  </SC.Canvas>
